export const neptuneData = {
  facts: {
    name: 'Neptune',
    radius_km: 24622,
    orbital_period_days: 60190, // ~164.8 years
    mean_surface_temp_c: -200,
    atmosphere: 'Hydrogen, helium, methane (gives blue color)'
  },
  images: [
    {
      title: 'Neptune (Voyager 2)',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg',
      credit: 'Voyager 2 / NASA / Wikimedia Commons'
    },
    {
      title: 'Neptune (Hubble close-up)',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Neptune_-_Voyager_2.jpg',
      credit: 'NASA / Hubble / Wikimedia Commons'
    },
    {
      title: 'Great Dark Spot (Voyager 2)',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Neptune_great_dark_spot.jpg',
      credit: 'Voyager 2 / NASA / Wikimedia Commons'
    },
    {
      title: 'Neptune feature (OrbitalToday)',
      url: 'https://orbitaltoday.com/wp-content/uploads/2022/12/Neptune-featureIMG.jpg',
      credit: 'OrbitalToday'
    },
    {
      title: 'Neptune (Voyager 2 crop)',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/250px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
      credit: 'Voyager 2 / Wikimedia Commons'
    },
    // External reference links (rendered as link cards if not direct images)
    { title: 'Neptune — NASA Solar System', url: 'https://solarsystem.nasa.gov/planets/neptune/overview/', credit: '' },
    { title: 'Neptune images collection (Wikimedia)', url: 'https://commons.wikimedia.org/wiki/Category:Neptune', credit: '' }
  ],
  features: [
    {
      name: 'Great Dark Spot',
      type: 'Storm / atmospheric feature',
      description: 'A large storm system discovered by Voyager 2, analogous to Jupiter\'s Great Red Spot though shorter lived. Read more in the linked article.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Neptune_great_dark_spot.jpg',
      credit: 'Voyager 2 / NASA — <a href="https://www.nytimes.com/2020/12/22/science/neptune-dark-spot.html" target="_blank" rel="noopener noreferrer">NYTimes: Neptune\'s Dark Spot</a>'
    },
    {
      name: 'Triton (largest moon)',
      type: 'Moon (retrograde orbit)',
      description: 'Triton is Neptune\'s largest moon — geologically active with nitrogen geysers and a retrograde orbit suggesting it was captured. More on Triton at the linked NASA page.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Triton-Voyager.gif',
      credit: 'Voyager 2 / NASA — <a href="https://science.nasa.gov/neptune/moons/triton/" target="_blank" rel="noopener noreferrer">NASA: Triton</a>'
    }
  ],
  missions: [
    {
      name: 'Voyager 2 flyby',
      year: 1989,
      summary: 'The only spacecraft to visit Neptune up close; returned the first detailed images of the planet, its rings, and moons.',
      credit: 'NASA / JPL'
    }
  ]
};
