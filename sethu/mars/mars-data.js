export const marsData = {
  images: [
    { title: 'Mars - True color', url: 'https://t4.ftcdn.net/jpg/03/66/81/05/360_F_366810558_oHtNhQLAHEfLXyV4RYe2X1VgwcUQYfdC.jpg', credit: 'NASA' },
    { title: 'Gale Crater (Curiosity)', url: 'https://photojournal.jpl.nasa.gov/jpegMod/PIA19806_modest.jpg', credit: 'JPL/NASA' },
    { title: 'Valles Marineris', url: 'https://photojournal.jpl.nasa.gov/jpegMod/PIA10214_modest.jpg', credit: 'JPL/NASA' }
  ],
  facts: {
    name: 'Mars',
    radius_km: 3389,
    orbital_period_days: 687,
    mean_surface_temp_c: '-63°C (average)',
    atmosphere: 'Thin, mostly CO2 with trace gases'
  },
  features: [
    { name: 'Olympus Mons', type: 'Shield volcano', description: 'Largest volcano in the Solar System.', image: 'https://photojournal.jpl.nasa.gov/jpegMod/PIA10214_modest.jpg', credit: 'JPL' },
    { name: 'Valles Marineris', type: 'Canyon system', description: 'A vast canyon system running along the Martian equator.', image: 'https://photojournal.jpl.nasa.gov/jpegMod/PIA10214_modest.jpg', credit: 'JPL' }
  ],
  missions: [
    { name: 'Viking', year: 1976, summary: 'First successful landers on Mars.', credit: 'NASA' },
    { name: 'Curiosity', year: 2012, summary: 'Mars Science Laboratory rover exploring Gale Crater.', credit: 'NASA' },
    { name: 'Perseverance', year: 2021, summary: 'Mars 2020 rover searching for biosignatures and caching samples.', credit: 'NASA' }
  ]
};
