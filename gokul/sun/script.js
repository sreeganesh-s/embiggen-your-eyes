// Page loaded message
console.log("Sun page loaded with image above glowing line");

// Animate the sun-line color gradient
const sunLine = document.querySelector('.sun-line');
let hue = 40;

function animateLine() {
  hue += 0.5;
  if (hue > 60) hue = 40;
  sunLine.style.background = `linear-gradient(90deg, hsl(${hue}, 100%, 50%), hsl(${hue+20}, 100%, 50%), hsl(${hue}, 100%, 50%))`;
  requestAnimationFrame(animateLine);
}

animateLine();

// Hover effect: glow stronger
sunLine.addEventListener('mouseenter', () => {
  sunLine.style.boxShadow = '0 0 50px #ff8c00, 0 0 100px #ff6600';
});

sunLine.addEventListener('mouseleave', () => {
  sunLine.style.boxShadow = '0 0 25px #ff8c00, 0 0 50px #ff6600';
});
;
