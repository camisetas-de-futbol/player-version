/* ==========================================================
   PLAYER VERSION — web.js
   Pinta portada, catálogo, ligas, Mundial y ficha de producto
   a partir de productos.js. Para añadir camisetas solo hay que
   tocar productos.js.
   ========================================================== */
(function () {
  const IG = 'https://ig.me/m/player.version';
  const CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>';

  // Competiciones de la web: 'es' dice qué valores de 'grupo' de productos.js pertenecen a cada una.
  const LIGAS = [
    { id: 'mundial', nombre: 'Mundial 2026', corto: 'Mundial', pais: 'Selecciones', pagina: 'mundial.html', es: g => /^GRUPO |^NO CLASIFICADA$/.test(g) },
    { id: 'laliga',  nombre: 'La Liga',        corto: 'La Liga', pais: 'España',     pagina: 'laliga.html',  es: g => g === 'LA LIGA' },
    { id: 'premier', nombre: 'Premier League', corto: 'Premier', pais: 'Inglaterra', pagina: 'premier.html', es: g => g === 'PREMIER LEAGUE' },
    { id: 'seriea',  nombre: 'Serie A',        corto: 'Serie A', pais: 'Italia',     pagina: 'seriea.html',  es: g => g === 'SERIE A' },
    { id: 'ligue1',  nombre: 'Ligue 1',        corto: 'Ligue 1', pais: 'Francia',    pagina: 'ligue1.html',  es: g => g === 'LIGUE 1' },
    { id: 'bundesliga', nombre: 'Bundesliga',  corto: 'Bundesliga', pais: 'Alemania', pagina: 'bundesliga.html', es: g => g === 'BUNDESLIGA' },
    { id: 'mundo',   nombre: 'Resto del mundo', corto: 'Más ligas', pais: 'Portugal, Países Bajos, América…', pagina: 'mundo.html', es: g => g === 'RESTO DEL MUNDO' },
    { id: 'retro',   nombre: 'Retro',          corto: 'Retro',   pais: 'Clásicas',   pagina: 'retro.html',   es: g => g === 'RETRO' }
  ];
  const TEMPORADA_ACTUAL = '2026/27';

  // Analítica sin cookies (GoatCounter). Pon aquí tu código cuando crees la cuenta,
  // por ejemplo 'playerversion' si tu panel es https://playerversion.goatcounter.com
  const GOATCOUNTER = '';
  if (GOATCOUNTER && location.hostname.endsWith('github.io')) {
    const sc = document.createElement('script');
    sc.async = true; sc.src = 'https://gc.zgo.at/count.js';
    sc.dataset.goatcounter = `https://${GOATCOUNTER}.goatcounter.com/count`;
    document.head.appendChild(sc);
  }

  // productos.js declara "const productos", que no cuelga de window: se lee directamente.
  const catalogo = typeof productos !== 'undefined' ? productos : {};
  const TALLAS_WEB = typeof TALLAS !== 'undefined' ? TALLAS : ['S', 'M', 'L', 'XL', 'XXL'];
  const tallasDe = p => p.tallas || TALLAS_WEB;
  const pedidas = new Set(typeof MAS_PEDIDAS !== 'undefined' ? MAS_PEDIDAS : []);
  const esPedida = p => pedidas.has(p.nombre) && p.grupo !== 'RETRO' && /^1/.test(String(p.equipacion || '1')) && !/\d{2}\/\d{2}$/.test(String(p.equipacion || ''));
  const todos = Object.entries(catalogo).map(([id, p], i) => Object.assign({ id, orden: i }, p));
  const conFoto = p => Array.isArray(p.imagenes) && p.imagenes.length > 0 && !p.proximamente;
  const ligaDe = g => LIGAS.find(l => l.es(g));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = t => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const plural = (n, a, b) => n + ' ' + (n === 1 ? a : b);

  // Equipación: "3ª Equipación 25/26" -> número "3", texto "3ª equipación", temporada "2025/26"
  const kitNum = p => { const m = String(p.equipacion || '1').match(/^(\d)/); return m ? m[1] : 'e'; };
  const kitTexto = p => String(p.equipacion || '1ª Equipación').replace(/\s*\d{2}\/\d{2}$/, '').replace('Equipación', 'equipación');
  const esMundial = p => LIGAS[0].es(p.grupo);
  const temporadaDe = p => {
    if (p.temporada) return p.temporada;
    const m = String(p.equipacion || '').match(/(\d{2})\/(\d{2})$/);
    if (m) return '20' + m[1] + '/' + m[2];
    return esMundial(p) ? 'Mundial 2026' : TEMPORADA_ACTUAL;
  };
  const temporadaCorta = t => t.replace(/^20(\d\d)\/(\d\d)$/, '$1/$2');
  const tipoDe = p => (esMundial(p) || p.tipo === 'seleccion') ? 'seleccion' : 'club';
  const tieneCorte = p => p.grupo !== 'RETRO';
  const precioTexto = p => typeof p.precio === 'number' ? p.precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 }) : '';
  const rangoTallas = p => { const t = tallasDe(p); return t.length > 1 ? `${t[0]}–${t[t.length - 1]}` : t[0] || ''; };
  const frente = p => p.imagenes.find(i => !/detras|manga/i.test(i)) || p.imagenes[0];
  const detras = p => p.imagenes.find(i => /detras/i.test(i));
  const tituloDe = p => {
    if (p.grupo === 'RETRO') return `${p.nombre} ${p.temporada || ''}`.trim();
    const t = temporadaDe(p);
    return `${p.nombre} ${kitTexto(p)} ${t === 'Mundial 2026' ? t : temporadaCorta(t)}`;
  };

  /* ---------- Tarjeta de camiseta ---------- */
  function tarjeta(p, opts) {
    const o = opts || {};
    const back = detras(p);
    const liga = ligaDe(p.grupo);
    const temp = temporadaDe(p);
    const sobre = o.conLiga && liga ? `<p class="card-league">${esc(liga.corto)}</p>` : '';
    const precio = precioTexto(p);
    const titulo = tituloDe(p);
    return `
      <article class="card">
        <a class="card-link" href="producto.html?id=${encodeURIComponent(p.id)}">
          <div class="card-photo${p.grupo === 'RETRO' && !p.foto_real ? ' fit' : ''}">
            ${esPedida(p) ? '<span class="hot">Muy solicitada</span>' : ''}
            ${p.foto_real ? '<span class="real">Foto real</span>' : ''}
            <img src="${esc(frente(p))}" alt="${esc(titulo)}, delante" ${o.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
            ${back ? `<img class="back" src="${esc(back)}" alt="" loading="lazy" decoding="async"><span class="card-flip">Detrás</span>` : ''}
          </div>
          <div class="card-body">
            ${sobre}
            <h3 class="card-name">${esc(p.nombre)}</h3>
            <div class="card-meta">
              <span class="kit" data-kit="${kitNum(p)}">${esc(kitTexto(p))}</span>
              ${temp === 'Mundial 2026' ? '' : `<span class="tag">${esc(temporadaCorta(temp))}</span>`}
              ${p.confederacion && p.grupo !== 'RETRO' ? `<span class="tag">${esc(p.confederacion)}</span>` : ''}
            </div>
            <div class="card-foot">
              ${precio ? `<span class="price">${esc(precio)}</span>` : ''}
              <span class="sizes-mini" title="Tallas">Tallas ${esc(rangoTallas(p))}</span>
            </div>
          </div>
        </a>
        <a class="card-ig" href="${IG}" target="_blank" rel="noopener" data-msg="${esc(titulo)}" aria-label="Consultar disponibilidad de ${esc(titulo)} por Instagram">${CHAT}<span>Consultar</span></a>
      </article>`;
  }

  // "Consultar" en cualquier tarjeta: copia un mensaje listo para pegar en Instagram
  function avisar(texto) {
    let t = document.getElementById('toast-global');
    if (!t) { t = document.createElement('p'); t.id = 'toast-global'; t.className = 'toast-global'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = texto; t.classList.add('show');
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 3800);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('.card-ig'); if (!a) return;
    const msg = `Hola, me interesa la camiseta ${a.dataset.msg}. ¿Está disponible?`;
    if (navigator.clipboard) navigator.clipboard.writeText(msg).then(() => avisar('Mensaje copiado. Pégalo en el chat de Instagram.')).catch(() => {});
  });

  /* ---------- Bloques de competiciones (portada) ---------- */
  function pintarLigas(el) {
    el.innerHTML = LIGAS.map(l => {
      const items = todos.filter(p => l.es(p.grupo) && conFoto(p));
      const vistos = new Set();
      const muestra = items.filter(p => kitNum(p) === '1' && !vistos.has(p.nombre) && vistos.add(p.nombre)).slice(0, 3);
      return `
        <a class="league" href="${l.pagina}">
          <div class="league-head">
            <div class="league-sub">${esc(l.pais)}</div>
            <h3>${esc(l.nombre)}</h3>
          </div>
          <div class="league-count"><b>${items.length}</b>${items.length === 1 ? 'camiseta' : 'camisetas'}<span class="league-go" aria-hidden="true">→</span></div>
          <div class="league-shirts" aria-hidden="true">${muestra.map(p => `<img src="${esc(frente(p))}" alt="" loading="lazy">`).join('')}</div>
        </a>`;
    }).join('');
  }

  /* ---------- Novedades de la tienda (portada) ---------- */
  function pintarDestacadas(el) {
    const lista = todos.filter(p => p.foto_real && conFoto(p)).sort((a, b) => b.orden - a.orden).slice(0, 8);
    if (!lista.length) { el.closest('section').remove(); return; }
    el.innerHTML = lista.map(p => tarjeta(p, { conLiga: true })).join('');
  }

  /* ---------- Filtros de las páginas de liga ---------- */
  function filtros(root, onChange) {
    const input = root.querySelector('input[type="search"]');
    const chips = [...root.querySelectorAll('.chip')];
    const estado = { q: '', kit: 'todas', tipo: 'todos' };
    input && input.addEventListener('input', () => { estado.q = norm(input.value.trim()); onChange(estado); });
    chips.forEach(c => c.addEventListener('click', () => {
      chips.forEach(x => x.setAttribute('aria-pressed', String(x === c)));
      if (c.dataset.kit) estado.kit = c.dataset.kit;
      if (c.dataset.tipo) estado.tipo = c.dataset.tipo;
      onChange(estado);
    }));
    return estado;
  }
  const textoBusqueda = p => norm([p.nombre, kitTexto(p), p.confederacion, temporadaDe(p), (ligaDe(p.grupo) || {}).nombre].filter(Boolean).join(' '));
  const pasa = (p, e) => (!e.q || textoBusqueda(p).includes(e.q))
    && (e.kit === 'todas' || kitNum(p) === e.kit)
    && (e.tipo === 'todos' || tipoDe(p) === e.tipo);

  /* ---------- Página de una liga ---------- */
  function pintarLiga(main) {
    const liga = LIGAS.find(l => l.id === main.dataset.liga);
    const items = todos.filter(p => liga.es(p.grupo));
    const listas = items.filter(conFoto);
    const pendientes = items.filter(p => !conFoto(p));
    const grid = main.querySelector('#grid');
    const cuenta = main.querySelector('#result-count');
    const vacio = main.querySelector('#empty');
    const pend = main.querySelector('#pending');
    const pendList = main.querySelector('#pending-list');

    main.querySelector('#stat-ok').textContent = listas.length;
    main.querySelector('#stat-teams').textContent = new Set(items.map(p => p.nombre)).size;
    const statPend = main.querySelector('#stat-pend');
    if (statPend) statPend.textContent = pendientes.length;
    if (!pendientes.length && statPend) statPend.closest('div').remove();

    function render(e) {
      const vis = listas.filter(p => pasa(p, e));
      grid.innerHTML = vis.map((p, i) => tarjeta(p, { eager: i < 2 })).join('');
      cuenta.textContent = plural(vis.length, 'camiseta', 'camisetas');
      vacio.hidden = vis.length > 0;

      const pv = pendientes.filter(p => pasa(p, e));
      pend.hidden = pv.length === 0;
      const porEquipo = new Map();
      pv.forEach(p => { if (!porEquipo.has(p.nombre)) porEquipo.set(p.nombre, []); porEquipo.get(p.nombre).push(kitNum(p) + 'ª'); });
      pendList.innerHTML = [...porEquipo].map(([n, ks]) =>
        `<li><span class="team">${esc(n)}</span><span class="kits">${ks.map(k => `<span>${k}</span>`).join('')}</span></li>`).join('');
    }
    render(filtros(main, render));
  }

  /* ---------- Catálogo completo con filtros ---------- */
  function pintarCatalogo(main) {
    const lista = todos.filter(conFoto);
    const $ = s => main.querySelector(s);
    const grid = $('#grid'), cuenta = $('#result-count'), vacio = $('#empty'), mas = $('#more');
    const input = $('#q'), selTemp = $('#f-temporada'), selKit = $('#f-kit'), selTipo = $('#f-tipo'), selOrden = $('#f-orden');
    const ligaChips = $('#f-liga');
    const PASO = 36;
    let visibles = PASO;

    // Competiciones (solo las que tienen camisetas)
    const ligasCon = LIGAS.filter(l => lista.some(p => l.es(p.grupo)));
    ligaChips.innerHTML = `<button class="chip" type="button" data-liga="" aria-pressed="true">Todas <small>${lista.length}</small></button>` +
      ligasCon.map(l => `<button class="chip" type="button" data-liga="${l.id}" aria-pressed="false">${esc(l.corto)} <small>${lista.filter(p => l.es(p.grupo)).length}</small></button>`).join('');

    // Temporadas reales de los datos, de la más nueva a la más antigua
    const temps = [...new Set(lista.map(temporadaDe))].sort((a, b) => {
      const n = t => t === 'Mundial 2026' ? 2026.5 : parseInt(t, 10) || 0;
      return n(b) - n(a);
    });
    selTemp.innerHTML = '<option value="">Temporada: todas</option>' + temps.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('');
    // Equipaciones especiales solo si existen
    if (!lista.some(p => kitNum(p) === 'e')) { const op = selKit.querySelector('option[value="e"]'); op && op.remove(); }
    // Orden por precio solo si alguna camiseta tiene precio
    if (!lista.some(p => typeof p.precio === 'number')) selOrden.querySelectorAll('option[value^="precio"]').forEach(o => o.remove());

    const estado = { liga: '', q: '', temporada: '', kit: '', tipo: '', orden: 'destacadas' };
    // Estado inicial desde la URL (?liga=premier&q=betis...)
    const params = new URLSearchParams(location.search);
    Object.keys(estado).forEach(k => { if (params.get(k)) estado[k] = params.get(k); });
    input.value = estado.q; selTemp.value = estado.temporada; selKit.value = estado.kit; selTipo.value = estado.tipo; selOrden.value = estado.orden;
    if (selTemp.value !== estado.temporada) estado.temporada = '';
    if (selOrden.value !== estado.orden) estado.orden = 'destacadas';

    function guardarUrl() {
      const u = new URLSearchParams();
      Object.entries(estado).forEach(([k, v]) => { if (v && !(k === 'orden' && v === 'destacadas')) u.set(k, v); });
      const qs = u.toString();
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
    }

    function filtrar() {
      const q = norm(estado.q.trim());
      const liga = LIGAS.find(l => l.id === estado.liga);
      let r = lista.filter(p => (!liga || liga.es(p.grupo))
        && (!q || textoBusqueda(p).includes(q))
        && (!estado.temporada || temporadaDe(p) === estado.temporada)
        && (!estado.kit || kitNum(p) === estado.kit)
        && (!estado.tipo || tipoDe(p) === estado.tipo));
      const porNombre = (a, b) => a.nombre.localeCompare(b.nombre, 'es') || kitNum(a).localeCompare(kitNum(b));
      if (estado.orden === 'az') r.sort(porNombre);
      else if (estado.orden === 'nuevas') r.sort((a, b) => b.orden - a.orden);
      else if (estado.orden === 'precio-asc') r.sort((a, b) => (a.precio ?? Infinity) - (b.precio ?? Infinity));
      else if (estado.orden === 'precio-desc') r.sort((a, b) => (b.precio ?? -Infinity) - (a.precio ?? -Infinity));
      else r.sort((a, b) => (esPedida(b) - esPedida(a)) || (!!b.foto_real - !!a.foto_real) || a.orden - b.orden);
      return r;
    }

    function render() {
      const r = filtrar();
      grid.innerHTML = r.slice(0, visibles).map((p, i) => tarjeta(p, { conLiga: !estado.liga, eager: i < 2 })).join('');
      cuenta.textContent = plural(r.length, 'camiseta', 'camisetas');
      vacio.hidden = r.length > 0;
      mas.hidden = r.length <= visibles;
      mas.textContent = `Ver más camisetas (${r.length - visibles} restantes)`;
      ligaChips.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.liga === estado.liga)));
      const activos = ['q', 'temporada', 'kit', 'tipo', 'liga'].filter(k => estado[k]).length;
      $('#reset').hidden = activos === 0;
      guardarUrl();
    }
    const cambiar = (k, v) => { estado[k] = v; visibles = PASO; render(); };

    ligaChips.addEventListener('click', e => { const c = e.target.closest('.chip'); if (c) cambiar('liga', c.dataset.liga); });
    let tq; input.addEventListener('input', () => { clearTimeout(tq); tq = setTimeout(() => cambiar('q', input.value), 120); });
    selTemp.addEventListener('change', () => cambiar('temporada', selTemp.value));
    selKit.addEventListener('change', () => cambiar('kit', selKit.value));
    selTipo.addEventListener('change', () => cambiar('tipo', selTipo.value));
    selOrden.addEventListener('change', () => cambiar('orden', selOrden.value));
    mas.addEventListener('click', () => { visibles += PASO; render(); });
    const limpiar = () => { Object.assign(estado, { liga: '', q: '', temporada: '', kit: '', tipo: '' }); input.value = ''; selTemp.value = ''; selKit.value = ''; selTipo.value = ''; visibles = PASO; render(); };
    $('#reset').addEventListener('click', limpiar);
    $('#reset-empty').addEventListener('click', limpiar);
    render();
  }

  /* ---------- Mundial: por grupos ---------- */
  function pintarMundial(main) {
    const liga = LIGAS[0];
    const items = todos.filter(p => liga.es(p.grupo) && conFoto(p));
    const grupos = [...new Set(items.map(p => p.grupo))].sort((a, b) =>
      (a === 'NO CLASIFICADA') - (b === 'NO CLASIFICADA') || a.localeCompare(b));
    const nombreGrupo = g => g === 'NO CLASIFICADA' ? 'Otras selecciones' : 'Grupo ' + g.replace('GRUPO ', '');
    const idGrupo = g => 'g-' + norm(g).replace(/[^a-z0-9]+/g, '-');
    main.querySelector('#stat-ok').textContent = items.length;
    main.querySelector('#stat-teams').textContent = new Set(items.map(p => p.nombre)).size;
    main.querySelector('#jump').innerHTML = grupos.map(g => `<a href="#${idGrupo(g)}">${esc(nombreGrupo(g))}</a>`).join('');
    const cont = main.querySelector('#groups');
    const cuenta = main.querySelector('#result-count');
    const vacio = main.querySelector('#empty');

    function render(e) {
      let total = 0;
      cont.innerHTML = grupos.map(g => {
        const vis = items.filter(p => p.grupo === g && pasa(p, e));
        total += vis.length;
        if (!vis.length) return '';
        const sel = new Set(vis.map(p => p.nombre)).size;
        return `<section class="group" id="${idGrupo(g)}">
          <div class="group-title"><h2 class="display">${esc(nombreGrupo(g))}</h2><span>${plural(sel, 'selección', 'selecciones')}</span></div>
          <div class="grid">${vis.map(p => tarjeta(p)).join('')}</div></section>`;
      }).join('');
      cuenta.textContent = plural(total, 'camiseta', 'camisetas');
      vacio.hidden = total > 0;
    }
    render(filtros(main, render));
  }

  /* ---------- Ficha de producto ---------- */
  function pintarProducto(main) {
    const id = new URLSearchParams(location.search).get('id');
    const p = todos.find(x => x.id === id);
    if (!p) { main.classList.add('ready'); location.replace('catalogo.html'); return; }
    const liga = ligaDe(p.grupo) || LIGAS[0];
    const titulo = tituloDe(p);
    const temp = temporadaDe(p);
    document.title = `${titulo} — Player Version`;
    const md = document.querySelector('meta[name="description"]');
    if (md && p.descripcion) md.setAttribute('content', p.descripcion);

    main.querySelector('#crumb-liga').textContent = liga.nombre;
    main.querySelector('#crumb-liga').href = liga.pagina;
    main.querySelector('#crumb-actual').textContent = titulo;
    const ll = main.querySelector('#league-link');
    ll.textContent = [liga.nombre, temp, p.grupo !== 'RETRO' ? p.confederacion : ''].filter(Boolean).join(' · ');
    ll.href = liga.pagina;
    main.querySelector('#nombre').textContent = p.nombre;
    const kit = main.querySelector('#kit');
    kit.textContent = kitTexto(p); kit.dataset.kit = kitNum(p);
    main.querySelector('#descripcion').textContent = p.descripcion || '';
    const precio = precioTexto(p);
    const pr = main.querySelector('#precio');
    if (pr) { if (precio) { pr.textContent = precio; pr.hidden = false; } else pr.remove(); }
    if (p.foto_real) { const r = main.querySelector('#real'); if (r) r.hidden = false; }
    if (esPedida(p)) {
      const hot = main.querySelector('#hot');
      if (hot) hot.hidden = false;
      const r = main.querySelector('#reserva');
      if (r) r.textContent = 'Es de las más pedidas: escríbenos pronto y te la reservamos. La ves y te la pruebas en Écija antes de pagar.';
    }

    // Tallas: al elegir una, el botón la incluye en el mensaje
    const tallas = tallasDe(p);
    const tallasBox = main.querySelector('#tallas');
    const stock = main.querySelector('#stock');
    if (stock && p.tallas) stock.textContent = 'Tallas disponibles: ' + p.tallas.join(', ');
    let talla = '';
    const botones = [main.querySelector('#ig'), main.querySelector('#ig-mobile')].filter(Boolean);
    const textoBoton = () => talla ? `Pedir talla ${talla} por Instagram` : 'Pedir por Instagram';
    const pintarBotones = () => botones.forEach(b => { b.querySelector('span').textContent = textoBoton(); });
    tallasBox.innerHTML = tallas.map(t => `<button type="button" class="size" aria-pressed="false">${esc(t)}</button>`).join('');
    tallasBox.addEventListener('click', ev => {
      const b = ev.target.closest('.size'); if (!b) return;
      const ya = b.getAttribute('aria-pressed') === 'true';
      tallasBox.querySelectorAll('.size').forEach(x => x.setAttribute('aria-pressed', 'false'));
      if (!ya) b.setAttribute('aria-pressed', 'true');
      talla = ya ? '' : b.textContent;
      pintarBotones();
    });

    // Al pedir, se copia un mensaje listo para pegar en Instagram
    const toast = main.querySelector('#toast');
    botones.forEach(b => {
      b.href = IG;
      b.addEventListener('click', () => {
        const msg = `Hola, me interesa la camiseta ${titulo}${talla ? ' en talla ' + talla : ''}. ¿Está disponible?`;
        if (navigator.clipboard) navigator.clipboard.writeText(msg).then(() => {
          toast.textContent = 'Mensaje copiado. Pégalo en el chat de Instagram.';
          toast.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => { toast.hidden = true; }, 4000);
        }).catch(() => {});
      });
    });
    pintarBotones();

    // Las retro de catálogo son fotos de la prenda sola: se muestran enteras y sin las frases de la versión jugador.
    if (!tieneCorte(p)) {
      if (!p.foto_real) main.querySelector('.gallery-main').classList.add('fit');
      const f = main.querySelector('#features'); if (f) f.remove();
    }
    const imgs = conFoto(p) ? p.imagenes : [];
    const mainImg = main.querySelector('#main-img');
    const thumbs = main.querySelector('#thumbs');
    const nombreFoto = src => /detras/i.test(src) ? 'Detrás' : /manga/i.test(src) ? 'Manga' : 'Delante';
    if (imgs.length) {
      mainImg.src = imgs[0]; mainImg.alt = `${titulo}, ${nombreFoto(imgs[0]).toLowerCase()}`;
      thumbs.innerHTML = imgs.length > 1 ? imgs.map((src, i) =>
        `<button type="button" aria-label="Ver foto: ${nombreFoto(src)}" aria-current="${i === 0}" data-src="${esc(src)}"><img src="${esc(src)}" alt=""></button>`).join('') : '';
      thumbs.addEventListener('click', ev => {
        const b = ev.target.closest('button'); if (!b) return;
        mainImg.src = b.dataset.src; mainImg.alt = `${titulo}, ${nombreFoto(b.dataset.src).toLowerCase()}`;
        thumbs.querySelectorAll('button').forEach(x => x.setAttribute('aria-current', String(x === b)));
      });
    } else {
      mainImg.closest('.gallery').innerHTML = '<div class="gallery-main gallery-empty">Fotos próximamente</div>';
    }

    const otras = todos.filter(x => x.grupo === p.grupo && x.nombre === p.nombre && x.id !== p.id && conFoto(x));
    const box = main.querySelector('#other-kits');
    if (otras.length) {
      box.querySelector('.row').innerHTML = otras.map(x =>
        `<a href="producto.html?id=${encodeURIComponent(x.id)}"><img src="${esc(frente(x))}" alt="" loading="lazy"><span>${esc(x.grupo === 'RETRO' ? x.temporada : kitTexto(x) + ' ' + temporadaCorta(temporadaDe(x)))}</span></a>`).join('');
    } else box.remove();

    main.classList.add('ready');
    // Más camisetas de la misma competición
    const rel = main.querySelector('#related');
    if (rel) {
      const parecidas = todos.filter(x => conFoto(x) && x.id !== p.id && x.nombre !== p.nombre && liga.es(x.grupo))
        .sort((a, b) => (esPedida(b) - esPedida(a)) || (!!b.foto_real - !!a.foto_real) || a.orden - b.orden).slice(0, 4);
      if (parecidas.length) {
        rel.querySelector('.grid').innerHTML = parecidas.map(x => tarjeta(x)).join('');
        rel.querySelector('.related-more').href = `catalogo.html?liga=${liga.id}`;
        rel.querySelector('.related-more span').textContent = liga.nombre;
      } else rel.remove();
    }
  }

  /* ---------- Menú del móvil ---------- */
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    const header = toggle.closest('.site-header');
    const cerrar = () => { header.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const abierto = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(abierto));
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && header.classList.contains('open')) { cerrar(); toggle.focus(); } });
    document.addEventListener('click', e => { if (!header.contains(e.target)) cerrar(); });
  }

  /* ---------- Cabecera compacta al hacer scroll ---------- */
  const cab = document.querySelector('.site-header');
  if (cab) {
    const marcar = () => cab.classList.toggle('scrolled', window.scrollY > 8);
    marcar(); window.addEventListener('scroll', marcar, { passive: true });
  }

  /* ---------- Arranque ---------- */
  document.querySelectorAll('[data-ligas]').forEach(pintarLigas);
  document.querySelectorAll('[data-destacadas]').forEach(pintarDestacadas);
  document.querySelectorAll('[data-total]').forEach(el => { el.textContent = todos.filter(conFoto).length; });
  const main = document.querySelector('main[data-page]');
  if (main) {
    if (main.dataset.page === 'liga') pintarLiga(main);
    if (main.dataset.page === 'catalogo') pintarCatalogo(main);
    if (main.dataset.page === 'mundial') pintarMundial(main);
    if (main.dataset.page === 'producto') pintarProducto(main);
  }

  /* ---------- Aparición suave de secciones ---------- */
  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
    reveal.forEach(el => io.observe(el));
  } else reveal.forEach(el => el.classList.add('in'));
})();
