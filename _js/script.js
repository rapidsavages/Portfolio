document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll(".dropdown");
    
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("mouseenter", function() {
            console.log("Mouse entered dropdown");
            this.querySelector(".dropdown-content").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function() {
            console.log("Mouse left dropdown");
            this.querySelector(".dropdown-content").style.display = "none";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const collageContainer = document.querySelector('.collage-container');
    const numberOfPhotos = 8 // Adjust based on the number of photos you have
    const photoPaths = [];

    // Prepare photo paths
    for (let i = 1; i <= numberOfPhotos; i++) {
        photoPaths.push(`images/photo${i}.jpg `);
    }

    // Define a grid layout with various sizes
    const photoSizes = [220, 250, 300, 240, 260]; // Different sizes for variety

    // Generate collage layout
    photoPaths.forEach((path, index) => {
        const img = document.createElement('img');
        img.src = path;

        // Randomly assign size for a collage effect
        const size = photoSizes[index % photoSizes.length];
        img.style.width = `${size}px`;
        img.style.height = `${size}px`;

        // Assign grid position
        img.style.position = 'absolute';
        img.style.top = `${10 + index * 25}vh`;
        img.style.left = `${2 + (index % 2) * 80}vw`;
        img.style.zIndex = 0;
        img.alt = `Decorative photo ${index + 1}`;

        collageContainer.appendChild(img);
    });
});

// Javascript for carousel on projects page
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button--next');
    const prevButton = document.querySelector('.carousel-button--prev');
    let currentIndex = 0;

    function updateSlides(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function moveToNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlides(currentIndex);
    }

    function moveToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlides(currentIndex);
    }

    nextButton.addEventListener('click', moveToNextSlide);
    prevButton.addEventListener('click', moveToPrevSlide);

    // Initialize the first slide as active
    updateSlides(currentIndex);
});

const modals = document.querySelectorAll('.modal');
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.close');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modals[index].style.display = 'block';
    });
});

spans.forEach(span => {
    span.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
