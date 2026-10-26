function showSection(id) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('section-' + id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const nav = document.querySelector('.nav-item[data-section="' + id + '"]');
  if (nav) nav.classList.add('active');
  if (id === 'instances') loadInst();
}

function openmc() {
  window.open('mc/26.3-wasm/', '_blank');
}

function loadInst() {
  const box = document.getElementById('installationsbox');
  if (!box || box.innerHTML.trim() !== '') return;
  fetch('./assets/json/base.json')
    .then(r => r.json())
    .then(data => {
      data.forEach(g => {
        const d = document.createElement('div');
        d.className = 'list-item';
        d.innerHTML = '<strong>' + g.title + '</strong> <span style="color:#b4b0c0">(' + g.version + ')</span> <button onclick="window.open(\'' + (g.link || 'mc/' + g.version + '-wasm') + '\')" class="btn" style="margin-left:auto;font-size:0.75rem;padding:4px 10px">Abrir</button>';
        box.appendChild(d);
      });
    })
    .catch(() => {
      box.innerHTML = '<div class="list-item">26.3 WASM (padrão)</div>';
    });
}
