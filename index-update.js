// Add this JavaScript to all main pages (index.html, manga.html, news.html, games.html, store.html)

// Get all anime/manga/news/game/product cards
const contentCards = document.querySelectorAll('.anime-card, .manga-card, .news-card, .game-card, .product-card');

// Add click event to each card
contentCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the title of the content
        const title = card.querySelector('h4').textContent;
        
        // Determine the content type based on the page or card class
        let contentType = 'anime';
        if (card.classList.contains('manga-card')) contentType = 'manga';
        if (card.classList.contains('news-card')) contentType = 'news';
        if (card.classList.contains('game-card')) contentType = 'games';
        if (card.classList.contains('product-card')) contentType = 'store';
        
        // Generate a unique ID (in a real app, this would come from a database)
        const contentId = Math.floor(Math.random() * 1000) + 1;
        
        // Navigate to the detail page with query parameters
        window.location.href = `detail-page.html?type=${contentType}&id=${contentId}&title=${encodeURIComponent(title)}`;
    });
});

