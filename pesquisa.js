/* =====================================================================
   PESQUISA A PARTIR DA CHAVE (Canivete)
   Atalhos que abrem os apps de pesquisa já no texto bíblico (ou tema):
   InterTextus (?ref=), Teólogo de Bolso PRO (?q=), Teologia em Minutos (?q=).
   Uso: barraPesquisa('Romanos 8:28-39')  → HTML com os três botões
        abrirPesquisa('Romanos 8:28-39')  → painel/menu com os três (se a página tiver abrirPainel)
   ===================================================================== */
(function(){
  const APPS = [
    { nome: 'InterTextus', dica: 'Interlinear: grego/hebraico', url: q => 'https://eneas-ena.github.io/interlinear/?ref=' + encodeURIComponent(q), soRef: true },
    { nome: 'Teólogo de Bolso', dica: 'Pesquisa bíblica', url: q => 'https://eneas-ena.github.io/teologia-de-bolso/?q=' + encodeURIComponent(q) },
    { nome: 'Teologia em Minutos', dica: 'Perguntas de teologia', url: q => 'https://teologia-em-minutos.vercel.app/?q=' + encodeURIComponent(q) }
  ];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  /* parece uma referência bíblica? (Livro + capítulo) */
  const ehRef = q => /^\s*(?:[1-3]|I{1,3})?\s*[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ ]*?\s*\d+/.test(String(q || ''));
  window.ehReferencia = ehRef;
  window.barraPesquisa = function(q, rotulo){
    q = String(q || '').trim(); if (!q) return '';
    const apps = APPS.filter(a => !a.soRef || ehRef(q));
    return `<div class="pesq-barra"><span class="pesq-rot">${esc(rotulo || 'Pesquisar')}</span>${apps.map(a =>
      `<a class="pesq-link" href="${a.url(q)}" target="_blank" rel="noopener" title="${esc(a.dica)}">${esc(a.nome)}</a>`).join('')}</div>`;
  };
  window.abrirPesquisa = function(q){
    q = String(q || '').trim(); if (!q) return;
    const apps = APPS.filter(a => !a.soRef || ehRef(q));
    const html = `<div class="lista-apps"><div class="apps">${apps.map(a => `<a href="${a.url(q)}" target="_blank" rel="noopener">${esc(a.nome)}<small>${esc(a.dica)} · abre em ${esc(q)}</small></a>`).join('')}</div></div>`;
    if (typeof window.abrirPainel === 'function') window.abrirPainel('Pesquisar', q, html, false);
    else window.open(apps[0].url(q), '_blank', 'noopener');
  };
  /* estilo dos botões (uma vez só) */
  const css = document.createElement('style');
  css.textContent = `.pesq-barra{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px}
.pesq-rot{font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--mudo,#A8B3C7);margin-right:2px}
.pesq-link{font-size:13px;font-weight:500;padding:6px 10px;border-radius:999px;border:1px solid var(--borda,#26385C);background:var(--cartao2,#182A4C);color:var(--texto,#F3EEDF);text-decoration:none;min-height:32px;display:inline-flex;align-items:center}
.pesq-link:hover{border-color:var(--ouro,#C9A227)}`;
  document.head.appendChild(css);
})();
