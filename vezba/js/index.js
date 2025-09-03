// Hamburger menu toggle for desktop nav
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

// Product card quantity increment/decrement
document.querySelectorAll(".product-card").forEach(card => {
    const countEl = card.querySelector(".count");
    const increaseBtn = card.querySelector(".increase");
    const decreaseBtn = card.querySelector(".decrease");

    let count = 0;

    increaseBtn.addEventListener("click", () => {
        count++;
        countEl.textContent = count;
    });

    decreaseBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countEl.textContent = count;
        }
    });
});

// View More / View Less toggle for extra product cards
const toggleBtn = document.querySelector(".view-more");
const extraCards = document.querySelectorAll(".product-card.extra");

let expanded = false;

toggleBtn.addEventListener("click", () => {
    expanded = !expanded;

    extraCards.forEach(card => {
        card.style.display = expanded ? "block" : "none";
    });

    toggleBtn.textContent = expanded ? "View Less <<<" : "View More >>>";
});

// Product images by category
const images = {
    cat: ['img/node-25.png', 'img/node-27.png', 'img/bowl.png'],
    dogs: ['img/node-29.png', 'img/bowl.png', 'img/bottle1.png'],
    birds: ['img/bottle_bird.png'],
    fish: [], // dead link, nothing to show
    all: ['img/node-25.png', 'img/node-27.png', 'img/bowl.png', 'img/node-29.png', 'img/bottle1.png', 'img/bottle_bird.png']
};

// Function to display images by category
function showImages(category) {
    const container = document.querySelector('.product-row');
    container.innerHTML = ''; // clear previous products

    let imgsToShow = [];

    if (category === 'random') {
        let allImages = [...images.all];
        while (imgsToShow.length < 3 && allImages.length > 0) {
            const index = Math.floor(Math.random() * allImages.length);
            imgsToShow.push(allImages.splice(index, 1)[0]);
        }
    } else {
        imgsToShow = images[category];
    }

    if (imgsToShow.length === 0) {
        container.innerHTML = '<p>No images to display for this category.</p>';
        return;
    }

    imgsToShow.forEach(src => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const img = document.createElement('img');
        img.src = src;
        img.alt = src;
        card.appendChild(img);
        container.appendChild(card);
    });

    // Mobile hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}
