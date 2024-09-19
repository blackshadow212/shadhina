const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const hiddenMessage = document.getElementById('hiddenMessage');

// Add sounds for 'Yes' and 'No' actions
const yesSound = new Audio('Recording (71).m4a'); // Replace with your sound file
const noSound = new Audio('no-sound.mp3');   // Replace with your sound file

// Event listener for the "Yes" button
yesBtn.addEventListener('click', function() {
    response.textContent = 'I love you too Jaan';
    yesSound.play();  // Play 'Yes' sound
    createHearts();   // Create floating hearts
    hiddenMessage.style.display = 'block';  // Show hidden message
    document.body.style.backgroundImage = "url('fina.jpg')";  // Change background image
});

// Event listener for the "No" button movement
noBtn.addEventListener('mouseover', function() {
    noSound.play();  // Play 'No' sound
    const randomX = Math.floor(Math.random() * window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Function to create floating hearts
function createHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;  // Vary speed of hearts
    }
}
