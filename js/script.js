  const voitures = [
    {
      nom: "Mercedes Benz 2024",
      prix: "900 DH/mois",
      image: "Mercedes-Benz-2024.jpg"
    },
    {
      nom: "Toyota Yaris 2024",
      prix: "350 DH/mois",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2020_Toyota_Yaris_sedan_%28China%29%2C_front_8.15.19.jpg/320px-2020_Toyota_Yaris_sedan_%28China%29%2C_front_8.15.19.jpg"
    },
    {
      nom: "BMW Série 3 2024",
      prix: "600 DH/mois",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/2019_BMW_330i_%28G20%29_Sport%2C_front_8.22.19.jpg/320px-2019_BMW_330i_%28G20%29_Sport%2C_front_8.22.19.jpg"
    },
    {
      nom: "Dacia Logan 2024",
      prix: "250 DH/mois",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Dacia_Logan_II_%28facelift%2C_2016%29%2C_front_8.22.19.jpg/320px-Dacia_Logan_II_%28facelift%2C_2016%29%2C_front_8.22.19.jpg"
    },
    {
      nom: "Renault Clio 2024",
      prix: "300 DH/mois",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Renault_Clio_V_–_Frontansicht%2C_15._M%C3%A4rz_2020%2C_D%C3%BCsseldorf.jpg/320px-Renault_Clio_V_–_Frontansicht%2C_15._M%C3%A4rz_2020%2C_D%C3%BCsseldorf.jpg"
    },
    {
      nom: "Hyundai Tucson 2024",
      prix: "500 DH/mois",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2019_Hyundai_Tucson_%28TL%2C_facelift%29_Elite_2WD%2C_front_8.13.19.jpg/320px-2019_Hyundai_Tucson_%28TL%2C_facelift%29_Elite_2WD%2C_front_8.13.19.jpg"
    }
  ];

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