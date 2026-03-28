
document.querySelectorAll('.btn-reserver').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.closest('.car-card');

    const nom  = card.querySelector('h3').textContent;
    const prix = card.querySelector('p').textContent;

    const params = new URLSearchParams({ voiture: nom, prix: prix });

    window.location.href = `reservation.html?${params}`;
  });
});


const liens = document.querySelectorAll('.nav-links a');
liens.forEach(lien => {
  if (lien.href === window.location.href) {
    document.querySelectorAll('.nav-links a')
      .forEach(l => l.classList.remove('active'));
    lien.classList.add('active');
  }
});