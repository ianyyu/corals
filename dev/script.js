const scroll1 = document.querySelector('#scroll-1');
const scroll1Images = scroll1.querySelectorAll('.sticky-image');
const dynamicText1 = document.querySelector('#dynamic-text-1');

const scroll1Texts = [
    "Did you know that Corals are about 1/4 of all ocean species depending on reefs for food and shelter",
    "Did you know that Corals are estimated valued at 30 billion t0 172 billion U.S. dollars each year, providing food, protection of shorelines, jobs based on tourism, and even medicines",
    "Did you know corals are aiding cancer research? Scientists discovered that 2 sponges from deep-sea coral ecosystems contain compounds with anti-inflammatory, anti-viral, and potent anti-tumor properties. These chemicals prevent the division and spread of lung and breast cancer cells."
];

function updateScroll1() {
    const scrollStart = scroll1.offsetTop;
    const scrollEnd = scrollStart + scroll1.querySelector('.scroll-space').offsetHeight - window.innerHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
        const index = Math.min(Math.floor(progress * scroll1Images.length), scroll1Images.length - 1);

        scroll1Images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });

        dynamicText1.textContent = scroll1Texts[index];
        dynamicText1.style.opacity = 1;

        scroll1.querySelector('.fixed-viewport').style.visibility = 'visible';
    } else {
        scroll1.querySelector('.fixed-viewport').style.visibility = 'hidden';
    }
}

// Add these event listeners with your other event listeners
window.addEventListener('scroll', updateScroll1);
window.addEventListener('resize', updateScroll1);
updateScroll1(); // Initial call to set correct state

const scroll2 = document.querySelector('#scroll-2');
const images = scroll2.querySelectorAll('.sticky-image');
const dynamicText2 = document.querySelector('#dynamic-text-2');

const texts = [
    "The ocean floor can be divided into three major zones: the shallow continental shelf, which corresponds to the epipelagic zone, the deeper mesophotic zone along the continental slope, and the vast abyssal and hadalpelagic zones of the deep ocean floor.",
    "Corals, vital to marine ecosystems, are found throughout the world's oceans, thriving in both shallow tropical waters and deeper, darker environments",
    "Reef-building corals thrive only in shallow tropical and subtropical waters. This is because the algae in their tissues need sunlight for photosynthesis, and these corals prefer water temperatures between 70-85°F (22-29°C).",
    "In contrast, deep-sea corals thrive in cold, dark waters at depths of up to 20,000 feet (6,000 m). Unlike their shallow-water counterparts, deep-sea corals don't rely on sunlight or warm water, as they lack algae. Though they grow slowly, these corals can be found on underwater peaks called seamounts. Scientists have discovered over 3,300 species of deep-sea corals, nearly as many as shallow-water species, and the number continues to grow."
];

function updateScroll2() {
    const scrollStart = scroll2.offsetTop;
    const scrollEnd = scrollStart + scroll2.querySelector('.scroll-space').offsetHeight - window.innerHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
        const index = Math.min(Math.floor(progress * images.length), images.length - 1);

        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });

        dynamicText2.textContent = texts[index];
        dynamicText2.style.opacity = 1;

        scroll2.querySelector('.fixed-viewport').style.visibility = 'visible';
    } else {
        scroll2.querySelector('.fixed-viewport').style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', updateScroll2);
window.addEventListener('resize', updateScroll2);
updateScroll2(); // Initial call to set correct state


// Update this in your JavaScript file
// Add this to your JavaScript file after your existing scroll handlers
const scroll3 = document.querySelector('#scroll-3');
const carouselTrack = scroll3.querySelector('.carousel-track');
const slides = scroll3.querySelectorAll('.carousel-slide');
const slideCount = slides.length;

function updateScroll3() {
    const scrollStart = scroll3.offsetTop;
    const scrollEnd = scrollStart + scroll3.querySelector('.scroll-space').offsetHeight - window.innerHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
        const slideIndex = Math.min(Math.floor(progress * slideCount), slideCount - 1);
        const translateX = -(slideIndex * 100);
        
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        scroll3.querySelector('.fixed-viewport').style.visibility = 'visible';
    } else {
        scroll3.querySelector('.fixed-viewport').style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', updateScroll3);
window.addEventListener('resize', updateScroll3);
updateScroll3(); // Initial call to set correct state