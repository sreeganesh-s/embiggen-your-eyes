document.addEventListener('DOMContentLoaded', () => {
    const space = document.getElementById('space');

    let isDown = false;
    let startX, startY;
    let lastX = 0, lastY = 0; // Store the last position

    // 1. Center the view on load
    const initialX = -(space.offsetWidth - window.innerWidth) / 2;
    const initialY = -(space.offsetHeight - window.innerHeight) / 2;
    lastX = initialX;
    lastY = initialY;
    space.style.transform = `translate(${initialX}px, ${initialY}px)`;

    // 2. Listen for mouse down
    space.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        startY = e.pageY;
    });

    // 3. Listen for mouse up and leaving the window
    space.addEventListener('mouseup', () => {
        isDown = false;
        // Save the current position
        const transform = window.getComputedStyle(space).transform;
        const matrix = new DOMMatrix(transform);
        lastX = matrix.m41;
        lastY = matrix.m42;
    });

    space.addEventListener('mouseleave', () => {
        isDown = false;
    });

    // 4. Listen for mouse move
    space.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();

        // Calculate the distance moved
        const deltaX = e.pageX - startX;
        const deltaY = e.pageY - startY;

        // Apply the new position
        space.style.transform = `translate(${lastX + deltaX}px, ${lastY + deltaY}px)`;
    });
});