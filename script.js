function playSong() {
    const audio = document.getElementById('birthday-audio');
    if (audio.paused) {
        audio.play();
        alert('🎵 Playing the Birthday Song! 🎉');
    } else {
        audio.pause();
        alert('🎵 Stopped the Birthday Song.');
    }
}

function showSurprise() {
    const surpriseText = document.getElementById('surprise-text');
    surpriseText.classList.toggle('hidden');
    if (!surpriseText.classList.contains('hidden')) {
        surpriseText.style.display = 'block';
        alert('🎉 Happy Birthday once again! 🎉');
    } else {
        surpriseText.style.display = 'none';
    }
}
