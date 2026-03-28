  
/*voitures*/
  const liste = document.getElementById('liste-voitures');

  voitures.forEach(function(v) {
    liste.innerHTML += `
      <div class="car">
        <img src="${v.image}" alt="${v.nom}">
        <div class="car-info">
          <span class="badge">2024</span>
          <h3>${v.nom}</h3>
          <p class="prix">${v.prix}</p>
          <button onclick="alert('✅ Réservation : ${v.nom}')">Réserver</button>
        </div>
      </div>
    `;
  });

 

// ===== RÉSERVER =====
document.querySelectorAll('.btn-reserver').forEach(btn => {
  btn.addEventListener('click', function () {

    // Récupère le nom et le prix de la carte
    const card = this.closest('.car-card');
    const nom  = card.querySelector('h3').textContent;
    const prix = card.querySelector('p').textContent;

    // Redirige vers la page réservation avec les infos
    const params = new URLSearchParams({ voiture: nom, prix: prix });
    window.location.href = `reservation.html?${params}`;
  });
});

// ===== ACTIVE NAVBAR =====
const liens = document.querySelectorAll('.nav-links a');
liens.forEach(lien => {
  if (lien.href === window.location.href) {
    document.querySelectorAll('.nav-links a')
      .forEach(l => l.classList.remove('active'));
    lien.classList.add('active');
  }
});