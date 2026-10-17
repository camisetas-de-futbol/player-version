/* ==========================================================
   PLAYER VERSION — web.js
   Pinta las competiciones, las ligas, el Mundial y la ficha
   de producto a partir de productos.js.
   No hace falta tocar este archivo para añadir camisetas:
   basta con añadirlas en productos.js.
   ========================================================== */
(function () {
  const IG = 'https://ig.me/m/player.version';

  // Competiciones de la web. 'grupos' dice qué valores de 'grupo' en productos.js pertenecen a cada una.
  const LIGAS = [
    { id: 'mundial', nombre: 'Mundial 2026', pais: 'Selecciones', pagina: 'mundial.html', es: g => /^GRUPO |^NO CLASIFICADA$/.test(g) },
    { id: 'laliga',  nombre: 'La Liga',        pais: 'España',     pagina: 'laliga.html',  es: g => g === 'LA LIGA' },
    { id: 'premier', nombre: 'Premier League', pais: 'Inglaterra', pagina: 'premier.html', es: g => g === 'PREMIER LEAGUE' },
    { id: 'seriea',  nombre: 'Serie A',        pais: 'Italia',     pagina: 'seriea.html',  es: g => g === 'SERIE A' },
    { id: 'ligue1',  nombre: 'Ligue 1',        pais: 'Francia',    pagina: 'ligue1.html',  es: g => g === 'LIGUE 1' },
    { id: 'retro',   nombre: 'Retro',          pais: 'Clásicas',   pagina: 'retro.html',   es: g => g === 'RETRO' }
  ];

  // productos.js declara "const productos", que no cuelga de window: se lee directamente.
  const catalogo = typeof productos !== 'undefined' ? productos : {};
  const todos = Object.entries(catalogo).map(([id, p]) => Object.assign({ id }, p));
  const conFoto = p => Array.isArray(p.imagenes) && p.imagenes.length > 0 && !p.proximamente;
  const ligaDe = g => LIGAS.find(l => l.es(g));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = t => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const kitNum = p => { const m = String(p.equipacion || '').match(/^(\d)/); return m ? m[1] : '1'; };
  const kitTexto = p => (p.equipacion ? p.equipacion : '1ª Equipación').replace('Equipación', 'equipación');
  const frente = p => p.imagenes.find(i => !/detras|manga/i.test(i)) || p.imagenes[0];
  const detras = p => p.imagenes.find(i => /detras/i.test(i));
  const plural = (n, a, b) => n + ' ' + (n === 1 ? a : b);

  /* ---------- Tarjeta de camiseta ---------- */
  function tarjeta(p) {
    const back = detras(p);
    const meta = [p.temporada, p.confederacion].filter(Boolean).map(t => `<span>${esc(t)}</span>`).join('');
    return `
      <a class="card" href="producto.html?id=${encodeURIComponent(p.id)}">
        <div class="card-photo${p.grupo === 'RETRO' ? ' fit' : ''}">
          <img src="${esc(frente(p))}" alt="${esc(p.nombre)}, ${esc(kitTexto(p))}" loading="lazy" decoding="async">
          ${back ? `<img class="back" src="${esc(back)}" alt="" loading="lazy" decoding="async"><span class="card-flip">Detrás</span>` : ''}
        </div>
        <div>
          <h3 class="card-name">${esc(p.nombre)}</h3>
          <div class="card-meta"><span class="kit" data-kit="${kitNum(p)}">${esc(kitTexto(p))}</span>${meta}</div>
        </div>
      </a>`;
  }

  /* ---------- Bloques de competiciones (portada y catálogo) ---------- */
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
          <div class="league-count"><b>${items.length}</b>${items.length === 1 ? 'camiseta' : 'camisetas'}</div>
          <div class="league-shirts" aria-hidden="true">${muestra.map(p => `<img src="${esc(frente(p))}" alt="" loading="lazy">`).join('')}</div>
        </a>`;
    }).join('');
  }

  /* ---------- Filtros compartidos ---------- */
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
  const pasa = (p, e) => (!e.q || norm([p.nombre, kitTexto(p), p.confederacion, p.temporada].filter(Boolean).join(' ')).includes(e.q))
    && (e.kit === 'todas' || kitNum(p) === e.kit)
    && (e.tipo === 'todos' || p.tipo === e.tipo);

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
      grid.innerHTML = vis.map(tarjeta).join('');
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
          <div class="grid">${vis.map(tarjeta).join('')}</div></section>`;
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
    if (!p) { location.href = 'catalogo.html'; return; }
    const liga = ligaDe(p.grupo) || LIGAS[0];
    const titulo = p.temporada ? `${p.nombre} ${p.temporada}` : `${p.nombre} ${kitTexto(p)}`;
    document.title = `${titulo} — Player Version`;

    main.querySelector('#crumb-liga').textContent = liga.nombre;
    main.querySelector('#crumb-liga').href = liga.pagina;
    main.querySelector('#crumb-actual').textContent = titulo;
    const ll = main.querySelector('#league-link');
    ll.textContent = [liga.nombre, p.temporada, p.confederacion].filter(Boolean).join(', ');
    ll.href = liga.pagina;
    main.querySelector('#nombre').textContent = p.nombre;
    const kit = main.querySelector('#kit');
    kit.textContent = kitTexto(p); kit.dataset.kit = kitNum(p);
    main.querySelector('#descripcion').textContent = p.descripcion || '';
    const ig = main.querySelector('#ig');
    ig.href = IG;

    // Las retro son fotos de la prenda sola: se muestran enteras y sin las frases de la versión jugador.
    if (p.grupo === 'RETRO') {
      main.querySelector('.gallery-main').classList.add('fit');
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
      mainImg.closest('.gallery').innerHTML = '<div class="gallery-main" style="display:grid;place-items:center;color:#0b1226;font-weight:600">Fotos próximamente</div>';
    }

    const otras = todos.filter(x => x.grupo === p.grupo && x.nombre === p.nombre && x.id !== p.id && conFoto(x));
    const box = main.querySelector('#other-kits');
    if (otras.length) {
      box.querySelector('.row').innerHTML = otras.map(x =>
        `<a href="producto.html?id=${encodeURIComponent(x.id)}"><img src="${esc(frente(x))}" alt="" loading="lazy"><span>${esc(x.temporada || kitTexto(x))}</span></a>`).join('');
    } else box.remove();
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
    document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrar(); });
    document.addEventListener('click', e => { if (!header.contains(e.target)) cerrar(); });
  }

  /* ---------- Arranque ---------- */
  document.querySelectorAll('[data-ligas]').forEach(pintarLigas);
  const main = document.querySelector('main[data-page]');
  if (main) {
    if (main.dataset.page === 'liga') pintarLiga(main);
    if (main.dataset.page === 'mundial') pintarMundial(main);
    if (main.dataset.page === 'producto') pintarProducto(main);
  }
})();
