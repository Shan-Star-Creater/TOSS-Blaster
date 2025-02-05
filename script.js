const coin = document.getElementById('coin');
const flipButton = document.getElementById('flip-button');
const headsInput = document.getElementById('heads-image');
const tailsInput = document.getElementById('tails-image');
const backgroundInput = document.getElementById('background-image');
const customizationButton = document.getElementById('customization-button');
const moreButton = document.getElementById('more-button');
const shareButton = document.getElementById('share-button');
const aboutButton = document.getElementById('about-button');
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset to Default';
resetButton.id = 'reset-button';
const details = document.getElementById('details');
const moreDetails = document.getElementById('more-details');
const aboutInfo = document.getElementById('about-info');
const buttonsContainer = document.getElementById('buttons-container');
const resultText = document.createElement('div');
resultText.id = 'result-text';
resultText.style.position = 'absolute';
resultText.style.top = '50%';
resultText.style.left = '50%';
resultText.style.transform = 'translate(-50%, -50%)';
resultText.style.padding = '10px 20px';
resultText.style.fontSize = '24px';
resultText.style.fontWeight = 'bold';
resultText.style.borderRadius = '10px';
resultText.style.display = 'none';
document.body.appendChild(resultText);

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Service Worker Registered!', reg))
    .catch(err => console.log('Service Worker Registration Failed!', err));
}
