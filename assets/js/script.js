
// Configuration
const IMAGE_FOLDER = './assets/img/';
const CATEGORIES = {
    recipe_1: [
        './assets/img/r1/1.png',
        './assets/img/r1/2.png',
        './assets/img/r1/3.png',
        './assets/img/r1/4.png',
        './assets/img/r1/5.png',
        './assets/img/r1/6.png',
        './assets/img/r1/7.png',
        './assets/img/r1/8.png',
        './assets/img/r1/9.png',
        './assets/img/r1/10.png',
        './assets/img/r1/11.png',
        './assets/img/r1/12.png',
        './assets/img/r1/13.png',
        './assets/img/r1/14.png',
        './assets/img/r1/15.png',
        './assets/img/r1/16.png',
        './assets/img/r1/17.png',
        './assets/img/r1/18.png',
        './assets/img/r1/19.png',
        './assets/img/r1/20.png',
        './assets/img/r1/21.png',
        './assets/img/r1/22.png',
        './assets/img/r1/23.png',
        './assets/img/r1/24.png',
        './assets/img/r1/25.png',
        './assets/img/r1/26.png',
        './assets/img/r1/27.png',
        './assets/img/r1/28.png',
        './assets/img/r1/29.png',
        './assets/img/r1/30.png',

    ],
    recipe_2: [
        './assets/img/r2/1.png',
        './assets/img/r2/2.png',
        './assets/img/r2/3.png',
        './assets/img/r2/4.png',
        './assets/img/r2/5.png',
        './assets/img/r2/6.png',
        './assets/img/r2/7.png',
        './assets/img/r2/8.png',
        './assets/img/r2/9.png',
        './assets/img/r2/10.png',
        './assets/img/r2/11.png',
        './assets/img/r2/12.png',
        './assets/img/r2/13.png',
        './assets/img/r2/14.png',
        './assets/img/r2/15.png',
        './assets/img/r2/16.png',
        './assets/img/r2/17.png',
        './assets/img/r2/18.png',
        './assets/img/r2/19.png',
        './assets/img/r2/20.png',
        './assets/img/r2/21.png',
        './assets/img/r2/22.png',
        './assets/img/r2/23.png',
        './assets/img/r2/24.png',
        './assets/img/r2/25.png',
        './assets/img/r2/26.png',
        './assets/img/r2/27.png',
        './assets/img/r2/28.png',
        './assets/img/r2/29.png',
        './assets/img/r2/30.png',
        './assets/img/r2/31.png',
        './assets/img/r2/32.png',
        './assets/img/r2/33.png',
        './assets/img/r2/34.png',
        './assets/img/r2/35.png',
    ],
};

let currentCategory = 'recipe_1';

// DOM Elements
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const tabs = document.querySelectorAll('.tab');

// Load images function
function loadImages(category) {
    const images = CATEGORIES[category] || CATEGORIES.all;
    gallery.innerHTML = '';

    // Create loading placeholders
    for (let i = 0; i < images.length; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item loading';
        gallery.appendChild(item);
    }

    // Load actual images
    setTimeout(() => {
        gallery.innerHTML = '';
        images.forEach((src, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = src;
            img.alt = `Gallery image ${index + 1}`;
            img.loading = 'lazy';

            item.appendChild(img);
            gallery.appendChild(item);

            // Click handler for modal
            item.addEventListener('click', () => {
                modalImage.src = src;
                modal.classList.add('active');
            });
        });
    }, 300);
}

// Tab click handlers
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Load images for category
        currentCategory = tab.dataset.category;
        loadImages(currentCategory);
    });
});

// Modal handlers
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.classList.remove('active');
    }
});

// Header and tabs scroll effect
const header = document.querySelector('.header');
const tabsContainer = document.getElementById('tabsContainer');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (currentScroll > 200) {
        tabsContainer.classList.add('scrolled');
    } else {
        tabsContainer.classList.remove('scrolled');
    }
});

// Initialize
loadImages('recipe_1');

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});