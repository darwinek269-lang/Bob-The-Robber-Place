function loadGame(url) {
    const container = document.getElementById('game-container');
    const player = document.getElementById('game-player');
    
    player.src = url;
    container.classList.remove('hidden');
}

function closeGame() {
    const container = document.getElementById('game-container');
    const player = document.getElementById('game-player');
    
    player.src = "";
    container.classList.add('hidden');
}