// Tab switching
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.schedule-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const day = tab.dataset.day;
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    tab.setAttribute('aria-selected','true');
    document.querySelector(`.schedule-panel[data-panel="${day}"]`).classList.add('active');
  });
});

// Modal
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

function openModal(eventId) {
  const ev = EVENTS[eventId];
  if (!ev) return;
  document.getElementById('modal-time').textContent = ev.time;
  document.getElementById('modal-title').textContent = ev.title;
  document.getElementById('modal-loc').textContent = '📍 ' + ev.location;
  document.getElementById('modal-body').innerHTML = ev.body;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.row-clickable').forEach(row => {
  row.addEventListener('click', () => openModal(row.dataset.event));
  row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(row.dataset.event); });
  row.setAttribute('tabindex', '0');
  row.setAttribute('role', 'button');
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
