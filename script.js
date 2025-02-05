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

// Default images for heads and tails
const defaultHeadsImage = 'default-heads-image.webp';
const defaultTailsImage = 'default-tails-image.webp';
const defaultBackgroundImage = 'cricket-pitch.webp';

let headsImage = defaultHeadsImage;
let tailsImage = defaultTailsImage;
let backgroundImage = defaultBackgroundImage;

document.body.appendChild(resetButton);

headsInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        headsImage = e.target.result;
    };
    reader.readAsDataURL(file);
});

tailsInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        tailsImage = e.target.result;
    };
    reader.readAsDataURL(file);
});

backgroundInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        backgroundImage = e.target.result;
        document.body.style.backgroundImage = `url(${backgroundImage})`;
    };
    reader.readAsDataURL(file);
});

resetButton.addEventListener('click', () => {
    headsImage = defaultHeadsImage;
    tailsImage = defaultTailsImage;
    backgroundImage = defaultBackgroundImage;
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    alert('Settings have been reset to default!');
});

flipButton.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    coin.style.backgroundImage = result === 'Heads' ? `url(${headsImage})` : `url(${tailsImage})`;
    coin.style.animation = 'none';
    setTimeout(() => {
        coin.style.animation = '';
    }, 10);
    
    resultText.textContent = result === 'Heads' ? 'It is Heads' : 'It is Tails';
    resultText.style.backgroundColor = result === 'Heads' ? 'green' : 'red';
    resultText.style.color = 'white';
    resultText.style.display = 'block';
    setTimeout(() => {
        resultText.style.display = 'none';
    }, 2000);
});

customizationButton.addEventListener('click', () => {
    details.classList.toggle('hidden');
    details.classList.toggle('visible');
    customizationButton.after(details);
    details.style.marginTop = '10px';
});

moreButton.addEventListener('click', () => {
    moreDetails.classList.toggle('hidden');
    moreDetails.classList.toggle('visible');
    moreButton.after(moreDetails);
    moreDetails.style.marginTop = '10px';
});

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'TOSS BLASTER',
            text: 'Check out this fun coin toss app!',
            url: window.location.href
        }).then(() => {
            console.log('Successfully shared');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Web Share API is not supported in your browser. You can copy the URL manually: ' + window.location.href);
    }
});

aboutButton.addEventListener('click', () => {
    aboutInfo.classList.toggle('hidden');
    aboutInfo.classList.toggle('visible');
    aboutButton.after(aboutInfo);
    aboutInfo.style.marginTop = '10px';
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('pressed');
    });

    button.addEventListener('mouseup', () => {
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 300);
    });
    button.style.marginBottom = '10px';
});
