const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt from showing
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
  // Check if the PWA can be installed
  if (deferredPrompt) {
    // Show the custom install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;
    // Log the user's choice
    console.log(result);
    // Reset the deferredPrompt variable
    deferredPrompt = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  // Log a message when the PWA is installed
  console.log('PWA installed successfully');
});