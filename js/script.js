let currentImgIndex = 0;
let images = document.querySelectorAll('.screenshot-stack img, .gallery-container img');

function enlargeImage(img) {
    const overlay = document.querySelector('.overlay');
    const enlarged = document.querySelector('.enlarged-image');
    enlarged.src = img.src;
    overlay.style.display = 'flex';
    currentImgIndex = Array.from(images).indexOf(img);
}

function closeImage() {
    document.querySelector('.overlay').style.display = 'none';
}

function changeImage(step) {
    currentImgIndex += step;
    if (currentImgIndex >= images.length) currentImgIndex = 0;
    if (currentImgIndex < 0) currentImgIndex = images.length - 1;
    enlargeImage(images[currentImgIndex]);
}

document.querySelector('.overlay').onclick = function(event) {
    if (event.target.classList.contains('overlay')) closeImage();
};

document.addEventListener("keydown", function (event) {
    const overlay = document.querySelector(".overlay");
    if (overlay.style.display === "flex") {
        switch (event.key) {
            case "ArrowRight":
                changeImage(1); // sledeća slika
                break;
            case "ArrowLeft":
                changeImage(-1); // prethodna slika
                break;
            case "Escape":
                closeImage(); // zatvaranje
                break;
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const backToTopButton = document.getElementById('backToTop');

    function handleScroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    window.addEventListener('scroll', handleScroll);

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

