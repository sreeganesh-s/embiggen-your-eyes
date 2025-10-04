const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 6
});

const mapWidth = 10000;
const mapHeight = 6000;
const bounds = [[0, 0], [mapHeight, mapWidth]];

map.setMaxBounds(bounds);
map.fitBounds(bounds);

const background = L.imageOverlay('https://upload.wikimedia.org/wikipedia/commons/4/4e/Milky_Way_Galaxy.jpg', bounds).addTo(map);

fetch('data/nasa_2025.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const marker = L.circleMarker([item.y, item.x], {
        radius: 12,
        color: 'yellow',
        fillColor: 'white',
        fillOpacity: 0.8
      }).addTo(map);

      marker.bindTooltip(item.name, { permanent: false, direction: "top" });

      marker.on('click', () => {
        showTileViewer(item);
      });
    });
  });

function showTileViewer(item) {
  document.getElementById('image-popup').classList.remove('hidden');

  const container = L.DomUtil.get('tile-map');
  if (container._leaflet_id) {
    container._leaflet_id = null;
    container.innerHTML = '';
  }

  const tileMap = L.map('tile-map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: item.tile_levels
  });

  tileMap.fitBounds([[0, 0], [item.height, item.width]]);

  L.tileLayer(item.tiles_base, {
    minZoom: 0,
    maxZoom: item.tile_levels,
    continuousWorld: true
  }).addTo(tileMap);

  document.getElementById('metadata').innerHTML = `
    <b>Name:</b> ${item.name}<br>
    <b>ID:</b> ${item.id}<br>
    <b>Tile Levels:</b> ${item.tile_levels}<br>
    <b>Width x Height:</b> ${item.width} x ${item.height}px<br>
    <b>Base Tiles URL:</b> ${item.tiles_base}
  `;
}

document.getElementById('close-popup').onclick = () => {
  document.getElementById('image-popup').classList.add('hidden');
};
