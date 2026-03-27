  

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