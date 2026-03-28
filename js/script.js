
// ===== RÉSERVER =====
document.querySelectorAll('.btn-reserver').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.closest('.car-card');

    // نجيب الاسم والثمن من داخل الكارت
    const nom  = card.querySelector('h3').textContent;
    const prix = card.querySelector('p').textContent;

    // نكوّن بارامترات URL باش نرسلهم لصفحة réservation
    const params = new URLSearchParams({ voiture: nom, prix: prix });

    // نوجّه المستخدم لصفحة réservation مع المعلومات
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