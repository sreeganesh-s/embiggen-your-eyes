// venus-data.js — dataset for the Venus mini-site
export const venusData = {
  facts: {
    name: 'Venus',
    radius_km: 6051.8,
    orbital_period_days: 224.7,
    mean_surface_temp_c: 462,
    atmosphere: 'Thick CO2 atmosphere with clouds of sulfuric acid; surface pressure ~92 bar'
  },
  images: [
  { url: 'https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/pia00271/PIA00271~large.jpg?w=1920&h=1920&fit=clip&crop=faces%2Cfocalpoint', title: 'Venus (NASA high resolution)', credit: 'NASA/JPL' },
  { url: 'https://sos.noaa.gov/catalog/datasets/venus-topography-and-radar/', title: 'Venus topography & radar (NOAA dataset)', credit: 'NOAA' },
  { url: 'https://www.researchgate.net/figure/Elevation-in-km-of-the-Aphrodite-Terra-region-mapped-on-the-Venus-sphere-on-the-left_fig1_351566026', title: 'Aphrodite Terra elevation (ResearchGate)', credit: 'ResearchGate / original authors' }
  ],
  features: [
  { name: 'Aphrodite Terra', type: 'Continental highland', description: 'Large highland region with complex tectonic deformation.', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Aphrodite_terra_topo.jpg', credit: 'NASA / Magellan' },
  { name: 'Ishtar Terra', type: 'Plateau/highland', description: 'Highland region near the north pole containing Maxwell Montes.', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Ishtar_terra_topo.jpg', credit: 'NASA / Magellan' },
  { name: 'Maxwell Montes', type: 'Mountain range', description: 'Highest mountain range on Venus, located within Ishtar Terra.', image: 'https://i1.sndcdn.com/artworks-000219552041-f7mkvh-t500x500.jpg', credit: 'NASA / Magellan' }
  ],
  missions: [
    { name: 'Venera (USSR)', year: '1961-1984', summary: 'Series of Soviet probes; several landed and returned images and data from the surface (Venera 13/14).', credit: 'Soviet space program' },
    { name: 'Magellan (USA)', year: '1989-1994', summary: 'Mapped Venus with radar to reveal surface topography and features.', credit: 'NASA / JPL' },
    { name: 'Akatsuki (Japan)', year: '2010-present', summary: 'Studying the atmosphere and weather of Venus from orbit.', credit: 'JAXA' }
  ]
};

export default venusData;
