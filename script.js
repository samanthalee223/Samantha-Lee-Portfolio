function updateClock() {
    const now = new Date();
    // Specify the target time zone using the IANA time zone identifier (e.g., 'America/New_York')
    const options = {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false // Set to false for 24-hour format
    };
    
    // Format the time string
    const timeString = now.toLocaleString('en-US', options);

    // Update the HTML element
    document.getElementById('txt').textContent = timeString + " " + "EST";
}

// Update the clock immediately on page load
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);