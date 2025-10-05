const saturnData = {
  facts: {
    name: "Saturn",
    radius_km: "58,232",
    orbital_period_days: "10,759",
    mean_surface_temp_c: "-139",
    atmosphere: "Hydrogen, Helium"
  },
  images: [
    {
      url: "https://cff2.earth.com/uploads/2023/05/12114223/Saturn-5-scaled.jpg",
      title: "Saturn from Earth.com",
      credit: "Earth.com"
    },
    {
      url: "https://i.pinimg.com/originals/eb/5e/77/eb5e771c28e63c03fba7e2a35f1feb2a.jpg",
      title: "Saturn Artistic View",
      credit: "Pinterest"
    },
    {
      url: "https://cdn.britannica.com/81/145481-050-F73198DB/Image-Saturn-radio-occultation-observation-planet-Cassini-2005.jpg",
      title: "Cassini Radio Occultation",
      credit: "Britannica"
    },
    {
      url: "https://th.bing.com/th/id/R.e5305f95a4c79a8f07a3663d5d632c7d?rik=KQNJRZf9zrYoRw&riu=http%3a%2f%2fwww.jpl.nasa.gov%2fedu%2fimages%2fnews%2fsaturn_fring_bright.jpg&ehk=huedVNmUXTqyQiNy8D8F4WQCKIUgftEf1VUsXsyJsMY%3d&risl=&pid=ImgRaw&r=0",
      title: "Saturn Bright Rings",
      credit: "NASA / JPL"
    }
  ],
  features: [
    {
      name: "Ring System",
      type: "Planetary Rings",
      description: "Saturn's rings are made of ice and rock particles.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_rings.jpg",
      credit: "Wikimedia Commons"
    },
    {
      name: "Hexagon Storm",
      type: "Atmospheric Feature",
      description: "A hexagonal jet stream at Saturn's north pole.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Saturn_hexagon.jpg",
      credit: "NASA"
    }
  ],
  missions: [
    {
      name: "Cassini-Huygens",
      year: 1997,
      description: "A joint NASA/ESA mission that studied Saturn and its moons for over 13 years.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Cassini_Saturn_Orbit_Insertion.jpg",
      credit: "NASA / ESA"
    },
    {
      name: "Voyager 1 & 2",
      year: 1979,
      description: "Flyby missions that provided the first detailed images of Saturn’s rings and moons.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Voyager_spacecraft.jpg",
      credit: "NASA"
    }
  ]
};

// Populate hero image
document.getElementById("heroImage").src = saturnData.images[0].url;
document.getElementById("heroImage").alt = saturnData.images[0].title;

// Populate facts
const factsList = document.getElementById("factsList");
Object.entries(saturnData.facts).forEach(([key, value]) => {
  const li = document.createElement("li");
  li.textContent = `${key.replace(/_/g, " ")}: ${value}`;
  factsList.appendChild(li);
});

// Show gallery on button click
document.getElementById("showGallery").addEventListener("click", () => {
  document.getElementById("gallerySection").style.display = "block";
});

// Populate gallery
const gallery = document.getElementById("gallery");
saturnData.images.forEach(img => {
  const div = document.createElement("div");
  div.className = "thumb";
  div.innerHTML = `
    <img src="${img.url}" alt="${img.title}" />
    <div class="caption">${img.title}</div>
    <div class="credit">${img.credit}</div>
  `;
  gallery.appendChild(div);
});

// Populate features
const features = document.getElementById("features");
saturnData.features.forEach(feature => {
  const div = document.createElement("div");
  div.className = "featureCard";
  div.innerHTML = `
    <h3>${feature.name}</h3>
    <p><strong>Type:</strong> ${feature.type}</p>
    <p>${feature.description}</p>
    <img src="${feature.image}" alt="${feature.name}" />
    <div class="credit">${feature.credit}</div>
  `;
  features.appendChild(div);
});

// Populate missions
const missions = document.getElementById("missions");
saturnData.missions.forEach(mission => {
  const div = document.createElement("div");
  div.className = "mission";
  div.innerHTML = `
    <h3>${mission.name} (${mission.year})</h3>
    <p>${mission.description}</p>
    <img src="${mission.image}" alt="${mission.name}" />
    <div class="credit">${mission.credit}</div>
  `;
  missions.appendChild(div);
});