var whiteBox = document.getElementById('whiteBox');
var overlay = document.getElementById('overlay');

document.getElementById('showBoxButton').addEventListener('click', () => {
    whiteBox.classList.remove('hidden');
    whiteBox.classList.add('visible');
    overlay.classList.remove('hidden');
    overlay.classList.add('visible');
});

document.getElementById('closeBoxButton').addEventListener('click', () => {
    whiteBox.classList.remove('visible');
    whiteBox.classList.add('hidden');
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');
});

document.getElementById('overlay').addEventListener('click', () => {
    whiteBox.classList.remove('visible');
    whiteBox.classList.add('hidden');
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');
});
