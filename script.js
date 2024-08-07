const memesContainer = document.getElementById('memesContainer');

function showCategory(category) {
    // Clear existing memes
    memesContainer.innerHTML = '';

    // Simulated data for demonstration
    const memes = [
        { url: 'meme1.jpg', category: 'funny' },
        { url: 'meme2.jpg', category: 'cute' },
        { url: 'meme3.jpg', category: 'random' }
    ];

    // Filter and display memes based on category
    memes.filter(meme => meme.category === category)
         .forEach(meme => {
             const memeElement = document.createElement('img');
             memeElement.src = meme.url;
             memesContainer.appendChild(memeElement);
         });
}