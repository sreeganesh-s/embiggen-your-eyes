export const earthData = {
  facts: {
    name: 'Earth',
    radius_km: 6371,
    orbital_period_days: 365.25,
    mean_surface_temp_c: 14,
    atmosphere: 'Nitrogen (78%), Oxygen (21%), trace gases'
  },
  images: [
    { url: 'https://t3.ftcdn.net/jpg/01/94/08/00/360_F_194080021_Qqc5gJLp4uNQpSStlbPdbQdeYUXt7PHN.jpg', title: 'Earth (stock)'} ,
    { url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg', title: 'Earth from Apollo 17 (NASA)'} ,
    { url: 'https://earthobservatory.nasa.gov/ContentFeature/BlueMarble/Images/land_shallow_topo_4096.jpg', title: 'Topography (NASA)'}
  ],
  features: [
    { name: 'Mount Everest', type: 'Mountain', description: 'Highest point above sea level on Earth.', image: 'https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg', credit: 'Encyclopaedia Britannica' },
    { name: 'Mariana Trench', type: 'Ocean trench', description: 'Deepest part of the world\'s oceans.', image: 'https://media.istockphoto.com/id/1152368018/photo/mariana-trench-the-deepest-depths.jpg?s=612x612&w=0&k=20&c=KyREn8VLnLvxC2HfOAb4-QfZ7zDD33kGsqRk7FYauyo=', credit: 'iStockphoto' }
  ],
  missions: [
    { name: 'Landsat program', year: '1972–present', summary: 'Ongoing Earth-observing satellites providing high-quality imagery for science and resource management.', credit: 'NASA/USGS' },
    { name: 'NOAA satellites', year: '1970s–present', summary: 'Weather and environmental monitoring satellites operated by NOAA.', credit: 'NOAA' }
  ]
};
