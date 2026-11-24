'use strict';
/* ============ CONFIG: edit these to customise the site ============ */
const CONFIG = {
  brand: 'WOOT',
  currency: 'EGP',
  whatsapp: '201000000000',                 // country code + number, no "+"
  instagram: 'https://instagram.com/woot',  // replace with your Instagram URL
  email: 'hello@woot.example',
  featuredId: 'executive'
};

/* Add, edit or remove products here. cat: black | tan (matches the filter buttons in index.html) */
const PRODUCTS = [
  { id: 'noir', name: 'Noir Matte Bifold Wallet', cat: 'black', price: 800, badge: '', img: 'assets/images/products/noir.jpg',
    short: 'Soft grained black leather with tone-on-tone stitching and a clean profile.',
    desc: 'A refined bifold in soft grained black leather with tone-on-tone stitching and a clean, understated profile. Multiple card slots and a full-length bill compartment keep everything organised, while the slim fold slips easily into a pocket. A premium everyday wallet with a dark, executive look.',
    highlights: ['Soft grained black leather', 'Tone-on-tone stitching', 'Multiple card slots and a full-length bill compartment'],
    colors: [{ n: 'Black', h: '#141412' }] },
  { id: 'diagonal', name: 'Diagonal Accent Wallet', cat: 'black', price: 450, badge: '', img: 'assets/images/products/diagonal.jpg',
    short: 'A bold diagonal stitched line and a polished silver corner accent.',
    desc: 'A modern black bifold with a bold diagonal stitched line and a polished silver corner accent. Contrast white edge stitching gives it a sharp, youthful character. Compact, lightweight and practical, with card slots and a bill section for daily use.',
    highlights: ['Diagonal stitched line', 'Polished silver corner accent', 'Contrast white edge stitching'],
    colors: [{ n: 'Black', h: '#141412' }] },
  { id: 'snaptab', name: 'Snap-Tab Wallet with Brush Pin', cat: 'black', price: 650, badge: 'Gift Idea', img: 'assets/images/products/snap.jpg',
    short: 'A secure snap-tab closure and a small enamel paintbrush emblem.',
    desc: 'A classic black leather wallet with a secure snap-tab closure and neat hand-finished stitching. A small enamel paintbrush emblem adds a personal touch, making it a thoughtful gift for artists and decorators. Roomy interior with card slots and a note compartment.',
    highlights: ['Secure snap-tab closure', 'Enamel paintbrush emblem', 'Card slots and a note compartment'],
    colors: [{ n: 'Black', h: '#141412' }] },
  { id: 'executive', name: 'Executive Slim Bifold', cat: 'black', price: 750, badge: '', img: 'assets/images/products/executive.jpg',
    short: 'Polished black leather with a slim build and fine edge stitching.',
    desc: 'Smooth, polished black leather with a minimalist design and fine edge stitching. Its clean lines and slim build suit both formal and casual outfits. Several card pockets and a full bill section make it elegant and highly functional.',
    highlights: ['Smooth, polished black leather', 'Fine edge stitching', 'Several card pockets and a full bill section'],
    colors: [{ n: 'Black', h: '#141412' }] },
  { id: 'tan', name: 'Personalised Tan Leather Wallet', cat: 'tan', price: 700, badge: 'Personalised', img: 'assets/images/products/tan.jpg',
    short: 'Warm tan leather with tiered card slots, embossable with initials.',
    desc: 'A warm tan leather bifold with contrast stitching and tiered card slots for quick access. Can be embossed with initials for a custom gift. The rich colour develops a lovely character with use, and the slim shape stays comfortable in any pocket.',
    highlights: ['Warm tan leather with contrast stitching', 'Can be embossed with initials', 'Tiered card slots for quick access'],
    colors: [{ n: 'Tan / Camel', h: '#B8743A' }] },
  { id: 'vintage', name: 'Vintage Brown Stripe Wallet', cat: 'tan', price: 500, badge: '', img: 'assets/images/products/vintage.jpg',
    short: 'Distressed brown leather with a stripe detail and bold cream stitching.',
    desc: 'A rugged vintage-style bifold in distressed brown with a horizontal stripe detail and bold cream stitching. The embossed logo adds a classic finish. Durable, practical and affordable, with card slots and a note section for everyday carry.',
    highlights: ['Distressed brown leather', 'Horizontal stripe and cream stitching', 'Card slots and a note section'],
    colors: [{ n: 'Brown', h: '#6B4226' }] }
];

/* Sample testimonials: replace with real customer reviews before publishing */
const REVIEWS = [
  { n: 'Sample Customer 1', r: 5, t: 'The leather feels substantial from the first day. It has already started to develop a lovely tone.' },
  { n: 'Sample Customer 2', r: 5, t: 'I moved from a bulky wallet to The Minimalist and my pocket finally feels empty again.' },
  { n: 'Sample Customer 3', r: 4, t: 'Beautiful stitching and a clean design. I bought a second one as a gift and it was received very well.' }
];

const GALLERY = [['vintage', 'g-tall'], ['executive', ''], ['snaptab', ''], ['noir', ''], ['diagonal', 'g-wide'], ['tan', '']]; // product ids; swap in lifestyle photos any time

/* ============ Helpers ============ */
const ICONS = {
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  eye: '<path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>', up: '<path d="m18 15-6-6-6 6"/>',
  insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.3L3 21l1.7-5.4A8.5 8.5 0 1 1 21 11.5z"/>',
  plus: '<path d="M5 12h14M12 5v14"/>', minus: '<path d="M5 12h14"/>'
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const icon = n => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]}</svg>`;
const money = n => `${CONFIG.currency} ${n.toLocaleString('en-US')}`;
const byId = id => PRODUCTS.find(p => p.id === id);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Placeholder artwork used when a photo file is missing. Drop real photos at the paths above. */
function ph(label, color = '#3E2C14', w = 800, h = 1000, kind = 'bifold') {
  const ww = kind === 'cardholder' ? w * .4 : w * .55;
  const hh = kind === 'cardholder' ? h * .2 : kind === 'slim' ? h * .26 : Math.min(h * .3, ww * .75);
  const x = (w - ww) / 2, y = (h - hh) / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="#1F150C"/><rect x="${x}" y="${y}" width="${ww}" height="${hh}" rx="10" fill="${color}" stroke="#E1DCC9" stroke-opacity=".4" stroke-dasharray="8 6"/><rect x="${x + 14}" y="${y + 14}" width="${ww - 28}" height="${hh - 28}" rx="6" fill="none" stroke="#E1DCC9" stroke-opacity=".25" stroke-dasharray="3 4"/><text x="${w / 2}" y="${h * .93}" text-anchor="middle" font-family="Georgia,serif" font-size="${Math.max(w / 32, 12)}" fill="#E1DCC9" fill-opacity=".6">${label} (replace photo)</text></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}
function loadImg(el) {
  const [label, color, w, h, kind] = (el.dataset.ph || '').split('|');
  el.dataset.done = '1';
  el.onerror = () => { el.onerror = null; el.src = ph(label || 'WOOT', color || '#3E2C14', +w || 800, +h || 1000, kind); };
  el.src = el.dataset.src;
}
const loadImgs = (root = document) => $$('img[data-src]:not([data-done])', root).forEach(loadImg);

/* ============ Scroll reveal ============ */
const io = 'IntersectionObserver' in window && !reduced
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 })
  : null;
const reveal = (root = document) => $$('.reveal:not(.in)', root).forEach(el => io ? io.observe(el) : el.classList.add('in'));

/* ============ Overlay / scroll lock ============ */
let openLayer = null, lastFocus = null;
function openLayerEl(el) {
  closeLayer(true); lastFocus = document.activeElement; openLayer = el;
  el.classList.add('open'); el.setAttribute('aria-hidden', 'false');
  $('#overlay').classList.add('on'); document.body.classList.add('lock');
  setTimeout(() => $('[data-close]', el)?.focus(), 50);
}
function closeLayer(silent) {
  if (!openLayer) return;
  openLayer.classList.remove('open'); openLayer.setAttribute('aria-hidden', 'true'); openLayer = null;
  $('#overlay').classList.remove('on'); document.body.classList.remove('lock');
  if (!silent && lastFocus) lastFocus.focus();
}
$('#overlay').addEventListener('click', () => closeLayer());
document.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeLayer(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLayer(); closeMenu(); }
  if (e.key === 'Tab' && openLayer) { // keep focus inside the open dialog
    const f = $$('button,a[href],input,[tabindex]:not([tabindex="-1"])', openLayer).filter(x => !x.disabled && x.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ============ Toast ============ */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2600);
}

/* ============ Collection ============ */
let filter = 'all';
function renderGrid() {
  const list = PRODUCTS.filter(p => filter === 'all' || p.cat === filter);
  $('#grid').innerHTML = list.map((p, i) => `
  <article class="card reveal" style="--d:${(i % 3) * 80}ms" data-id="${p.id}" data-color="0">
    <div class="card-media">${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <img data-src="${p.img}" data-ph="${p.name}|${p.colors[0].h}|800|1000|${p.cat}" alt="${p.name} leather wallet in ${p.colors[0].n}" loading="lazy" width="800" height="1000">
      <button class="qv" data-act="quick" aria-label="Quick view ${p.name}">${icon('eye')}<span>Quick View</span></button></div>
    <div class="card-body">
      <div class="row"><h3>${p.name}</h3><span class="price">${money(p.price)}</span></div>
      <p>${p.short}</p>
      <div class="swatches" role="radiogroup" aria-label="Colour for ${p.name}">${p.colors.length > 1 ? p.colors.map((c, j) => `<button class="sw${j ? '' : ' on'}" role="radio" aria-checked="${!j}" data-act="color" data-i="${j}" title="${c.n}" aria-label="${c.n}" style="--c:${c.h}"></button>`).join('') : `<span class="sw on" aria-hidden="true" style="--c:${p.colors[0].h}"></span>`}<span class="cname muted">${p.colors[0].n}</span></div>
      <button class="btn btn-line" data-act="add">Add to Bag</button>
    </div>
  </article>`).join('');
  loadImgs($('#grid')); reveal($('#grid'));
}
$('#grid').addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const card = b.closest('.card'), p = byId(card.dataset.id);
  if (b.dataset.act === 'color') {
    $$('.sw', card).forEach(s => { s.classList.toggle('on', s === b); s.setAttribute('aria-checked', s === b); });
    card.dataset.color = b.dataset.i;
    $('.cname', card).textContent = p.colors[+b.dataset.i].n;
  } else if (b.dataset.act === 'add') addToBag(p.id, +card.dataset.color, 1);
  else if (b.dataset.act === 'quick') openModal(p.id, +card.dataset.color);
});
$$('.filters button').forEach(b => b.addEventListener('click', () => {
  filter = b.dataset.f;
  $$('.filters button').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
  renderGrid();
}));

/* ============ Quick view modal ============ */
let mState = { id: null, c: 0, q: 1 };
function openModal(id, c = 0) {
  mState = { id, c, q: 1 };
  const p = byId(id), img = $('#mImg');
  img.dataset.src = p.img; img.dataset.ph = `${p.name}|${p.colors[c].h}|800|1000|${p.cat}`; img.alt = `${p.name} leather wallet`;
  loadImg(img);
  $('#mName').textContent = p.name; $('#mPrice').textContent = money(p.price); $('#mDesc').textContent = p.desc;
  $('#mSw').innerHTML = p.colors.map((x, j) => `<button class="sw${j === c ? ' on' : ''}" role="radio" aria-checked="${j === c}" data-i="${j}" title="${x.n}" aria-label="${x.n}" style="--c:${x.h}"></button>`).join('');
  syncModal(); openLayerEl($('#modal'));
}
function syncModal() {
  const p = byId(mState.id);
  $('#mCol').textContent = p.colors[mState.c].n; $('#mQty').textContent = mState.q;
  $('#mMinus').disabled = mState.q <= 1;
}
$('#mSw').addEventListener('click', e => {
  const b = e.target.closest('.sw'); if (!b) return;
  mState.c = +b.dataset.i;
  $$('#mSw .sw').forEach(s => { s.classList.toggle('on', s === b); s.setAttribute('aria-checked', s === b); });
  syncModal();
});
$('#mMinus').addEventListener('click', () => { mState.q = Math.max(1, mState.q - 1); syncModal(); });
$('#mPlus').addEventListener('click', () => { mState.q = Math.min(20, mState.q + 1); syncModal(); });
$('#mAdd').addEventListener('click', () => { addToBag(mState.id, mState.c, mState.q); closeLayer(true); });

/* ============ Shopping bag ============ */
const KEY = 'woot_bag_v1';
let bag = (() => {
  try {
    return (JSON.parse(localStorage.getItem(KEY)) || []).filter(i => byId(i.id) && byId(i.id).colors[i.c] && Number.isInteger(i.q) && i.q > 0);
  } catch { return []; }
})();
const saveBag = () => { try { localStorage.setItem(KEY, JSON.stringify(bag)); } catch { /* storage unavailable */ } };
const total = () => bag.reduce((s, i) => s + byId(i.id).price * i.q, 0);

function addToBag(id, c, q) {
  const line = bag.find(i => i.id === id && i.c === c);
  line ? line.q = Math.min(99, line.q + q) : bag.push({ id, c, q });
  saveBag(); renderBag();
  const cnt = $('#count'); cnt.classList.remove('bump'); void cnt.offsetWidth; cnt.classList.add('bump');
  toast(`${byId(id).name} (${byId(id).colors[c].n}) added to your bag`);
}
function renderBag() {
  const n = bag.reduce((s, i) => s + i.q, 0);
  $('#count').textContent = n; $('#bagBtn').setAttribute('aria-label', `Open shopping bag, ${n} item${n === 1 ? '' : 's'}`);
  $('#sub').textContent = money(total()); $('#checkout').disabled = !bag.length;
  $('#items').innerHTML = bag.length ? bag.map((i, k) => {
    const p = byId(i.id), col = p.colors[i.c];
    return `<div class="item" data-k="${k}">
      <img data-src="${p.img}" data-ph="${p.name}|${col.h}|200|250|${p.cat}" alt="${p.name}" width="76" height="95">
      <div><h3>${p.name}</h3><small>${col.n}</small>
        <div class="qty"><button data-a="dec" aria-label="Decrease quantity of ${p.name}">${icon('minus')}</button><output>${i.q}</output><button data-a="inc" aria-label="Increase quantity of ${p.name}">${icon('plus')}</button></div></div>
      <div style="text-align:right"><div class="price">${money(p.price * i.q)}</div><button class="rm" data-a="rm" aria-label="Remove ${p.name}">Remove</button></div>
    </div>`;
  }).join('') : `<div class="empty"><p>Your bag is empty. Choose a wallet and it will wait for you here.</p><button class="btn btn-line" data-close>Continue shopping</button></div>`;
  loadImgs($('#items'));
}
$('#items').addEventListener('click', e => {
  const b = e.target.closest('[data-a]'); if (!b) return;
  const k = +b.closest('.item').dataset.k, it = bag[k];
  if (b.dataset.a === 'inc') it.q = Math.min(99, it.q + 1);
  if (b.dataset.a === 'dec') it.q = Math.max(1, it.q - 1);
  if (b.dataset.a === 'rm') bag.splice(k, 1);
  saveBag(); renderBag();
});
$('#bagBtn').addEventListener('click', () => openLayerEl($('#drawer')));
$('#checkout').addEventListener('click', () => {
  if (!bag.length) return;
  const lines = bag.map(i => { const p = byId(i.id); return `- ${p.name} (${p.colors[i.c].n}) x${i.q} = ${money(p.price * i.q)}`; });
  const msg = `Hello ${CONFIG.brand}, I would like to place an order:\n\n${lines.join('\n')}\n\nSubtotal: ${money(total())}\n\nPlease confirm availability and delivery details.`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});

/* ============ Featured ============ */
const fp = byId(CONFIG.featuredId), fImg = $('#fImg');
$('#ftT').textContent = fp.name; $('#fDesc').textContent = fp.desc; $('#fPrice').textContent = money(fp.price);
$('#fList').innerHTML = fp.highlights.map(x => `<li>${x}</li>`).join('');
fImg.dataset.src = fp.img; fImg.dataset.ph = `${fp.name}|${fp.colors[0].h}|800|800|bifold`; fImg.alt = `${fp.name} in ${fp.colors[0].n.toLowerCase()} leather`;
$('#fBtn').addEventListener('click', () => openModal(CONFIG.featuredId, 0));

/* ============ Reviews carousel ============ */
let idx = 0, timer;
$('#track').innerHTML = REVIEWS.map((r, i) => `<figure class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${REVIEWS.length}">
  <div class="stars" role="img" aria-label="${r.r} out of 5 stars">${'★'.repeat(r.r)}${'☆'.repeat(5 - r.r)}</div>
  <blockquote>${r.t}</blockquote><figcaption><cite>${r.n}</cite><small>Sample review. Replace with a real customer review.</small></figcaption></figure>`).join('');
function go(n) {
  idx = (n + REVIEWS.length) % REVIEWS.length;
  $('#track').style.transform = `translateX(-${idx * 100}%)`;
  $('#carN').textContent = `${idx + 1} / ${REVIEWS.length}`;
  $$('.slide').forEach((s, i) => s.setAttribute('aria-hidden', i !== idx));
}
function auto() { clearInterval(timer); if (!reduced) timer = setInterval(() => go(idx + 1), 6000); }
$('#prev').addEventListener('click', () => { go(idx - 1); auto(); });
$('#next').addEventListener('click', () => { go(idx + 1); auto(); });
['mouseenter', 'focusin'].forEach(ev => $('#car').addEventListener(ev, () => clearInterval(timer)));
['mouseleave', 'focusout'].forEach(ev => $('#car').addEventListener(ev, auto));
go(0); auto();

/* ============ Gallery ============ */
$('#gal').innerHTML = GALLERY.map(([id, cls]) => { const p = byId(id); return `<a class="${cls}" data-link="ig" target="_blank" rel="noopener" aria-label="${p.name} on Instagram">
  <img data-src="${p.img}" data-ph="${p.name}|${p.colors[0].h}|800|800|bifold" alt="${p.name}" loading="lazy" width="800" height="800"></a>`; }).join('');

/* ============ Contact links and form ============ */
const waLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Hello WOOT, I have a question.')}`;
$$('[data-link]').forEach(a => { a.href = a.dataset.link === 'wa' ? waLink : a.dataset.link === 'ig' ? CONFIG.instagram : `mailto:${CONFIG.email}`; });
$$('[data-text="email"]').forEach(e => e.textContent = CONFIG.email);
$('#yr').textContent = new Date().getFullYear();

const rules = {
  name: v => v.trim().length >= 2 || 'Enter your name (at least 2 characters).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address, like name@example.com.',
  message: v => v.trim().length >= 10 || 'Write a message of at least 10 characters.'
};
function check(input) {
  const r = rules[input.name](input.value), ok = r === true;
  input.classList.toggle('bad', !ok); input.setAttribute('aria-invalid', !ok);
  input.parentElement.querySelector('small').textContent = ok ? '' : r;
  return ok;
}
$$('#form input,#form textarea').forEach(i => i.addEventListener('blur', () => check(i)));
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const fields = $$('#form input,#form textarea');
  if (!fields.map(check).every(Boolean)) { fields.find(f => f.classList.contains('bad')).focus(); return; }
  const d = Object.fromEntries(new FormData(e.target));
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Message from ' + d.name)}&body=${encodeURIComponent(d.message + '\n\nReply to: ' + d.email)}`;
  $('#formOk').textContent = 'Thank you. Your email app should open with your message ready to send.';
  e.target.reset();
});

/* ============ Navigation ============ */
const nav = $('#nav'), burger = $('#burger');
const onScroll = () => nav.classList.toggle('solid', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
function closeMenu() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open menu'); burger.innerHTML = icon('menu'); }
burger.addEventListener('click', () => {
  const o = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); burger.innerHTML = icon(o ? 'x' : 'menu');
});
$$('#menu a').forEach(a => a.addEventListener('click', closeMenu));
addEventListener('resize', () => { if (innerWidth > 820) closeMenu(); });
$('#top').addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
if ('IntersectionObserver' in window) {
  const links = $$('#menu a');
  const so = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target.id === 'features' ? 'home' : e.target.id;
    links.forEach(l => l.getAttribute('href') === '#' + id ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current'));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('#home,#collection,#about,#contact').forEach(s => so.observe(s));
}

/* ============ Init ============ */
$$('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
renderGrid(); renderBag(); loadImgs(); reveal();