// ============================================================
// RECORTAR CAMISETAS PARA LA PORTADA
// Quita el fondo de las fotos reales (foto_real: true) de productos.js,
// guarda la camiseta recortada en assets/cut/ y calcula su color principal.
// El resultado va a portada-recortes.js, que usa la portada para cambiar el fondo de color.
//
// Cómo usarlo cuando añadas camisetas nuevas con foto_real:
//   1. En una carpeta aparte:  npm install @imgly/background-removal-node@1.4.5 sharp@0.33.5
//   2. Desde esa carpeta:      node ruta/a/herramientas/recortar.js ruta/a/la/web
// Solo procesa las camisetas que aún no tienen recorte (borra assets/cut/ para rehacerlas todas).
// ============================================================
const fs = require('fs');
const path = require('path');
// sharp tiene que cargarse antes que la librería de recorte (si no, Windows da un error de DLL)
const sharp = require(path.resolve('node_modules/sharp'));
const { removeBackground } = require(path.resolve('node_modules/@imgly/background-removal-node'));

const web = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const src = fs.readFileSync(path.join(web, 'productos.js'), 'utf8');
const productos = new Function(src + ';return productos')();
// Opcional: tercera ruta para guardar el resultado en otra carpeta (por defecto, la propia web)
const destinoBase = path.resolve(process.argv[3] || web);
const salida = path.join(destinoBase, 'portada-recortes.js');
const carpeta = path.join(destinoBase, 'assets', 'cut');
fs.mkdirSync(carpeta, { recursive: true });

let previos = {};
if (fs.existsSync(salida)) {
  try { previos = new Function(fs.readFileSync(salida, 'utf8') + ';return RECORTES')(); } catch (e) { previos = {}; }
}

// Color principal: media de los píxeles vivos de la camiseta; si casi no hay color (blanca, negra), la media de todos.
function colorDe(data, info) {
  let n = 0, r = 0, g = 0, b = 0, nv = 0, rv = 0, gv = 0, bv = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    if (data[i + 3] < 220) continue;
    const R = data[i], G = data[i + 1], B = data[i + 2];
    n++; r += R; g += G; b += B;
    const max = Math.max(R, G, B), min = Math.min(R, G, B), l = (max + min) / 510;
    const s = max === min ? 0 : (max - min) / (255 - Math.abs(max + min - 255));
    if (s > 0.35 && l > 0.15 && l < 0.85) { nv++; rv += R; gv += G; bv += B; }
  }
  const hex = (x, y, z, k) => '#' + [x, y, z].map(v => Math.round(v / k).toString(16).padStart(2, '0')).join('');
  return nv > n * 0.25 ? hex(rv, gv, bv, nv) : hex(r, g, b, n || 1);
}

// Limpieza de la máscara: quita lo fino (barras del perchero, ganchos) y se queda con el trozo más grande.
// Apertura morfológica (erosión + dilatación con un cuadrado de radio r) y componente conexa mayor.
function filtroMinMax(a, w, h, r, esMin) {
  const t = new Uint8Array(a.length), o = new Uint8Array(a.length);
  const pick = esMin ? Math.min : Math.max;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let v = esMin ? 255 : 0;
    for (let k = Math.max(0, x - r); k <= Math.min(w - 1, x + r); k++) v = pick(v, a[y * w + k]);
    t[y * w + x] = v;
  }
  for (let x = 0; x < w; x++) for (let y = 0; y < h; y++) {
    let v = esMin ? 255 : 0;
    for (let k = Math.max(0, y - r); k <= Math.min(h - 1, y + r); k++) v = pick(v, t[k * w + x]);
    o[y * w + x] = v;
  }
  return o;
}
function limpiarMascara(rgba, w, h) {
  const a = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) a[i] = rgba[i * 4 + 3] > 128 ? 255 : 0;
  const r = Math.max(4, Math.round(w * 0.014));
  const abierta = filtroMinMax(filtroMinMax(a, w, h, r, true), w, h, r + 2, false);
  // Componente conexa más grande
  const lab = new Int32Array(w * h); let mejor = 0, mejorTam = 0, n = 0;
  const pila = [];
  for (let i = 0; i < w * h; i++) {
    if (!abierta[i] || lab[i]) continue;
    n++; let tam = 0; pila.push(i); lab[i] = n;
    while (pila.length) {
      const j = pila.pop(); tam++;
      const x = j % w, y = (j / w) | 0;
      for (const k of [x > 0 ? j - 1 : -1, x < w - 1 ? j + 1 : -1, y > 0 ? j - w : -1, y < h - 1 ? j + w : -1])
        if (k >= 0 && abierta[k] && !lab[k]) { lab[k] = n; pila.push(k); }
    }
    if (tam > mejorTam) { mejorTam = tam; mejor = n; }
  }
  for (let i = 0; i < w * h; i++) if (lab[i] !== mejor) rgba[i * 4 + 3] = 0;
  return rgba;
}

(async () => {
  // Camisetas cuya foto no sirve para recortar (por ejemplo, hecha en diagonal): no salen en la portada.
  // (El Málaga tiene otra camiseta colgada detrás y el recorte se la lleva pegada.)
  const SIN_RECORTE = ['betis-3-2526', 'malaga-3-2526'];
  const lista = Object.entries(productos).filter(([id, p]) => p.foto_real && Array.isArray(p.imagenes) && p.imagenes.length && !p.proximamente && !SIN_RECORTE.includes(id));
  const res = {};
  for (const [id, p] of lista) {
    const foto = p.imagenes.find(i => !/detras|manga/i.test(i)) || p.imagenes[0];
    const nombre = path.basename(foto).replace(/\.\w+$/, '') + '.webp';
    const destino = path.join(carpeta, nombre);
    if (previos[id] && fs.existsSync(destino)) { res[id] = previos[id]; console.log('ya estaba', id); continue; }
    const blob = await removeBackground('file://' + path.join(web, foto).replace(/\\/g, '/'), { output: { format: 'image/png' } });
    const png = Buffer.from(await blob.arrayBuffer());
    const bruto = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    limpiarMascara(bruto.data, bruto.info.width, bruto.info.height);
    const limpia = await sharp(bruto.data, { raw: { width: bruto.info.width, height: bruto.info.height, channels: 4 } }).png().toBuffer();
    const recortada = sharp(await sharp(limpia).trim({ threshold: 10 }).toBuffer());
    const { data, info } = await recortada.clone().raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    await recortada.resize({ height: 900, withoutEnlargement: true }).webp({ quality: 82, alphaQuality: 90 }).toFile(destino);
    res[id] = { img: 'assets/cut/' + nombre, color: colorDe(data, info) };
    console.log('recortada', id, res[id].color);
  }
  const js = '// Generado por herramientas/recortar.js: camiseta sin fondo y su color principal para la portada.\n' +
    'const RECORTES = ' + JSON.stringify(res, null, 2) + ';\n';
  fs.writeFileSync(salida, js);
  console.log('Listo:', Object.keys(res).length, 'camisetas');
})().catch(e => { console.error(e); process.exit(1); });
