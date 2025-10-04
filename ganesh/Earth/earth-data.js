export const earthData = {
  facts: {
    name: 'Earth',
    radius_km: 6371,
    orbital_period_days: 365.25,
    mean_surface_temp_c: 14,
    atmosphere: 'Nitrogen (78%), Oxygen (21%), trace gases'
  },
  images: [
    { url: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57730/earth_lrg.jpg', title: 'Blue Marble (NASA)'} ,
    { url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg', title: 'Earth from Apollo 17 (NASA)'} ,
    { url: 'https://earthobservatory.nasa.gov/ContentFeature/BlueMarble/Images/land_shallow_topo_4096.jpg', title: 'Topography (NASA)'}
  ],
  features: [
    { name: 'Mount Everest', type: 'Mountain', description: 'Highest point above sea level on Earth.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Everest_from_Gokyo_Ri_Nov2008.jpg', credit: 'Wikimedia Commons' },
    { name: 'Mariana Trench', type: 'Ocean trench', description: 'Deepest part of the world\'s oceans.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Mariana_trench_cross_section.jpg', credit: 'NOAA' }
  ],
  missions: [
    { name: 'Landsat program', year: '1972–present', summary: 'Ongoing Earth-observing satellites providing high-quality imagery for science and resource management.', credit: 'NASA/USGS' },
    { name: 'NOAA satellites', year: '1970s–present', summary: 'Weather and environmental monitoring satellites operated by NOAA.', credit: 'NOAA' }
  ]
};
