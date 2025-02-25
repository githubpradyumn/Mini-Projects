// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Like button animation and counter update
    const likeButton = document.querySelector('.analytics .bxs-heart');
    const likeCounter = document.querySelector('.analytics .number');

    likeButton.addEventListener('click', () => {
        let currentLikes = parseInt(likeCounter.innerText.replace('k', '000'));
        likeCounter.innerText = `${(currentLikes + 1) / 1000}k`;

        // Add animation class
        likeButton.classList.add('liked');
        setTimeout(() => {
            likeButton.classList.remove('liked');
        }, 500);
    });

    // Message button alert
    const messageButton = document.querySelector('.buttons .button');
    messageButton.addEventListener('click', () => {
        alert('Message feature coming soon!');
    });

    // Social media links open in new tab (Modify with actual URLs)
    const socialLinks = document.querySelectorAll('.media-button .link');
    const urls = [
        'https://instagram.com',
        'https://twitter.com',
        'https://facebook.com',
        'https://linkedin.com'
    ];

    socialLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(urls[index], '_blank');
        });
    });
});
