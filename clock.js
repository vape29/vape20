// clock.js

function updateClock() {
    const now = new Date();

    // Get the current date and time
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Format the date and time
    const dateString = `${month}/${day}/${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the date and time
    document.getElementById('clock').innerHTML = `<div>${dateString}</div><div>${timeString}</div>`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
