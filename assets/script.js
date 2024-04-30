document.addEventListener("DOMContentLoaded", function () {
    // Image transition for the transitioning image section only
    const transitioningImageSection = document.getElementById("transitioning-image");
    const images = ['./assets/snow.jpg', './assets/winter.jpg'];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        transitioningImageSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 5000);

    // Typing effect for the about paragraph
    const aboutParagraph = document.getElementById("about-paragraph");
    const paragraphs = [
        "🌸 Nestled amidst the serene landscapes of Lindsay, Ontario, I am an aspiring web developer embarking on a transformative journey. Currently enrolled in a rigorous boot camp course at the esteemed University of Toronto, I am honing my skills and expanding my horizons in the ever-evolving realm of web development.",
        "🌱 With a fervent passion for crafting immersive digital experiences, I find joy in designing websites that not only captivate the senses but also resonate with the soul. Harnessing the power of creativity, I have meticulously crafted a portfolio of interactive and visually stunning websites, each a testament to my dedication and ingenuity.",
        "💻 If you're in search of a dedicated and hardworking web developer to bring your digital dreams to life, look no further. Let's collaborate and transform your vision into reality. Get in touch with me, and together, we'll embark on an exhilarating adventure through the boundless realms of web development."
    ];

    let index = 0;
    let charIndex = 0;
    let currentParagraph = 0;

    function type() {
        if (currentParagraph < paragraphs.length) {
            const paragraph = paragraphs[currentParagraph];
            if (charIndex < paragraph.length) {
                aboutParagraph.innerHTML += paragraph.charAt(charIndex);
                charIndex++;
                setTimeout(type, 50);
            } else {
                // Move to the next paragraph
                charIndex = 0;
                currentParagraph++;
                aboutParagraph.innerHTML += "<br><br>"; // Add line breaks between paragraphs
                setTimeout(type, 1000); // Wait for 1 second between paragraphs
            }
        }
    }

    type();

    // Projects Transitioning Images
    // Define image URLs for each project
    const projectImages = {
        project1: ['./assets/challenge1a.png', './assets/challenge1b.png', './assets/challenge1c.png'],
        project2: ['./assets/challenge2a.png', './assets/challenge2b.png', './assets/challenge2c.png', './assets/challenge2c.png'],
        project3: ['./assets/challenge3a.png', './assets/challenge3b.png'],
        project4: ['./assets/challenge4a.png', './assets/challenge4b.png', './assets/challenge4c.png'],
        project5: ['./assets/challenge5a.png', './assets/challenge5b.png'],
        project6: ['./assets/challenge6a.png', './assets/challenge6b.png'],
        // Add more projects with their respective image URLs
    };

    // Image transition for each project
    for (let project in projectImages) {
        if (projectImages.hasOwnProperty(project)) {
            const projectBox = document.getElementById(project);
            const images = projectImages[project];
            let currentIndex = 0;

            function changeImage() {
                projectBox.querySelector('.project-image').src = images[currentIndex];
                currentIndex = (currentIndex + 1) % images.length;
            }

            setInterval(changeImage, 5000);
        }
    }
});
