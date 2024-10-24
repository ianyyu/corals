


const scroll1 = document.querySelector('#scroll-1');
const scroll1Images = scroll1.querySelectorAll('.sticky-image');
const dynamicText1 = document.querySelector('#dynamic-text-1');

const scroll1Texts = [
    "about 1/4 of all ocean species depending on reefs for food and shelter",
    "estimated valued at 30 billion t0 172 billion U.S. dollars each year, providing food, protection of shorelines, jobs based on tourism, and even medicines",
    "aiding cancer research? Scientists discovered that 2 sponges from deep-sea coral ecosystems contain compounds with anti-inflammatory, anti-viral, and potent anti-tumor properties. These chemicals prevent the division and spread of lung and breast cancer cells."
];

function updateScroll1() {
    const scrollStart = scroll1.offsetTop;
    const scrollEnd = scroll1.offsetTop + document.getElementById("scroll-1").getBoundingClientRect().height;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
        const index = Math.min(Math.floor(progress * scroll1Images.length), scroll1Images.length - 1);

        scroll1Images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });

        dynamicText1.innerHTML = `<mark style="background-color: #2C2627; color: #F8F4EB; border-radius: 3px; font-style: italic;">${scroll1Texts[index]}</mark>`;   dynamicText1.style.opacity = 1;

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
const dynamicTitle2 = document.querySelector('#dynamic-title-2');  // Get the title element

const texts = [
    "The ocean floor can be divided into three major zones: the shallow continental shelf, which corresponds to the epipelagic zone, the deeper mesopelagic zone along the continental slope, and the vast abyssal and hadalpelagic zones of the deep ocean floor.",
    "Corals, vital to marine ecosystems, are found throughout the world's oceans, thriving in both shallow tropical waters and deeper, darker environments",
    "Reef-building corals thrive only in shallow tropical and subtropical waters. This is because the algae in their tissues need sunlight for photosynthesis, and these corals prefer water temperatures between 70-85°F (22-29°C).",
    "In contrast, deep-sea corals thrive in cold, dark waters at depths of up to 20,000 feet (6,000 m). Unlike their shallow-water counterparts, deep-sea corals don't rely on sunlight or warm water, as they lack algae. Though they grow slowly, these corals can be found on underwater peaks called seamounts. Scientists have discovered over 3,300 species of deep-sea corals, nearly as many as shallow-water species, and the number continues to grow."
];

const titles = [
    "Corals in different ocean depths  ",
    "Corals in different ocean depths  ",
    "Corals in the Epipelagic Zone",
    "Corals in the Bathypelagic Zone"
];

function updateScroll2() {
    const scrollStart = scroll2.offsetTop;
    const scrollEnd = scroll2.offsetTop + document.getElementById("scroll-2").getBoundingClientRect().height;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
        const index = Math.min(Math.floor(progress * images.length), images.length - 1);

        // Toggle active images
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });

        // Update the text and title dynamically
        dynamicText2.textContent = texts[index];
        dynamicTitle2.textContent = titles[index];

        dynamicText2.style.opacity = 1;
        scroll2.querySelector('.fixed-viewport').style.visibility = 'visible';
    } else {
        scroll2.querySelector('.fixed-viewport').style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', updateScroll2);
window.addEventListener('resize', updateScroll2);
updateScroll2(); // Initial call to set correct state

const scroll3 = document.querySelector('#scroll-3');
const carouselTrack = scroll3.querySelector('.carousel-track');
const textTrack = scroll3.querySelector('.text-track');
const slides = scroll3.querySelectorAll('.carousel-slide');
const slideCount = slides.length;

function updateScroll3() {
    const scrollStart = scroll3.offsetTop;
    const scrollEnd = scroll3.offsetTop + scroll3.querySelector('.scroll-space').offsetHeight;
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const progress = Math.min((scrollPosition - scrollStart) / (scrollEnd - scrollStart), 0.999);
        const slideIndex = Math.min(Math.floor(progress * slideCount), slideCount - 1);
        const slideProgress = (progress * slideCount) % 1;
        
        // Base translateX for the track
        const translateX = -(slideIndex * 100);
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        textTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update each slide
        slides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            const text = textTrack.children[index];
            
            // Calculate how many positions this slide is behind the current slide
            const positionsBehind = slideIndex - index;
            
            if (index === slideIndex) {
                // Current slide
                img.style.opacity = '1';
                img.style.transform = 'translateX(0)';
                text.style.opacity = '1';
            } else if (index === slideIndex + 1) {
                // Next slide (sliding in)
                const peakOpacity = Math.max(0, slideProgress);
                img.style.opacity = `${peakOpacity * 0.5}`;
                img.style.transform = 'translateX(0)';
                text.style.opacity = '0';
            } else if (positionsBehind === 1) {
                // Previous slide (sliding out)
                const exitOpacity = Math.max(0, 1 - slideProgress);
                img.style.opacity = `${exitOpacity * 0.3}`;
                img.style.transform = `translateX(-${slideProgress * 50}px)`;
                text.style.opacity = '0';
            } else if (positionsBehind === 2) {
                // Two slides behind (fading out completely)
                const exitOpacity = Math.max(0, 0.3 - slideProgress);
                img.style.opacity = `${exitOpacity}`;
                img.style.transform = 'translateX(-50px)';
                text.style.opacity = '0';
            } else {
                // Other slides
                img.style.opacity = '0';
                img.style.transform = 'translateX(-50px)';
                text.style.opacity = '0';
            }
        });
        
        scroll3.querySelector('.fixed-viewport').style.visibility = 'visible';
    } else {
        scroll3.querySelector('.fixed-viewport').style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', updateScroll3);
window.addEventListener('resize', updateScroll3);
updateScroll3(); // Initial call

// Add this to your JavaScript file after the existing scroll handlers
const scroll4 = document.querySelector('#scroll-4');
const dynamicTitle4 = document.querySelector('#dynamic-title-4');
const dynamicText4 = document.querySelector('#dynamic-text-4');

const content4 = [
    {
        title: "Threats to Coral Reefs",
        text: "Coral reefs face numerous threats, primarily from rising ocean acidification caused by increased CO2 levels, which hinders coral growth and can dissolve existing structures. Global warming, overfishing, physical damage from boats and divers, invasive species like lion fish, and harmful chemicals in sunscreen further endanger these delicate ecosystems. "
    },
    {
        title: "How You Can Help",
        text: "To help protect coral reefs, individuals can reduce their carbon footprint, support sustainable fishing practices, practice responsible diving and boating, use reef-safe sunscreen, advocate for marine protected areas, and educate others about coral reef conservation. "
    },
    {
        title: "The Smithsonian's Scientific Treasure",
        text: "The Smithsonian's National Museum of Natural History houses one of the world's largest and best-documented coral collections, featuring specimens from the historic U.S. South Seas Exploring Expedition of 1838-1842. This collection, which includes about 4,820 coral species with 65% from deep waters, serves as a crucial scientific resource for understanding and preserving these biodiversity-rich habitats that play a critical ecological role and hold valuable historical climate data."
    }
];

function updateScroll4() {
    const scrollStart = scroll4.offsetTop;
    const scrollEnd = scroll4.offsetTop + document.getElementById("scroll-4").getBoundingClientRect().height;
    const scrollPosition = window.pageYOffset;

    const snappersImage = document.querySelector('#snappers');
    const groupersImage = document.querySelector('#groupers');
    const crabsImage = document.querySelector('#crabs');

    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
        const index = Math.min(Math.floor(progress * content4.length), content4.length - 1);

        dynamicTitle4.textContent = content4[index].title;
        dynamicText4.textContent = content4[index].text;

        scroll4.querySelector('.fixed-viewport').style.visibility = 'visible';

        // Image fade-in/out logic for sections
        if (index === 0) {  // "Threats to Coral Reefs"
            snappersImage.style.opacity = '0';   // Fade out "snappers.png"
            groupersImage.style.opacity = '0';   // Fade out "groupers.png"
            crabsImage.style.opacity = '0';      // Fade out "crabs.png"
        } else if (index === 1) {  // "How You Can Help"
            snappersImage.style.opacity = '1';   // Fade in "snappers.png"
            groupersImage.style.opacity = '0';   // Keep "groupers.png" hidden
            crabsImage.style.opacity = '0';      // Keep "crabs.png" hidden
        } else if (index === 2) {  // "The Smithsonian's Scientific Treasure"
            snappersImage.style.opacity = '1';   // Keep "snappers.png" visible
            groupersImage.style.opacity = '1';   // Fade in "groupers.png"
            crabsImage.style.opacity = '1';      // Fade in "crabs.png"
        }
    } else {
        scroll4.querySelector('.fixed-viewport').style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', updateScroll4);
window.addEventListener('resize', updateScroll4);
updateScroll4(); // Initial call to set the correct state





// Add this with your other scroll handlers
const scroll5 = document.querySelector('#scroll-5');

function updateScroll5() {
    const scrollStart = scroll5.offsetTop;
    const scrollEnd = scroll5.offsetTop + scroll5.getBoundingClientRect().height;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        scroll5.querySelector('.fixed-viewport').style.visibility = 'visible';
    } else {
        scroll5.querySelector('.fixed-viewport').style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', updateScroll5);
window.addEventListener('resize', updateScroll5);
updateScroll5(); // Initial call to set correct state


function createLoadingBar() {
    const loadingBar = document.createElement('div');
    loadingBar.id = 'loading-bar';
    document.body.appendChild(loadingBar);

    const style = document.createElement('style');
    style.innerHTML = `
        #loading-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 8px;
            background-color: #2C2627;
            z-index: 100;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', updateLoadingBar);
    window.addEventListener('resize', updateLoadingBar);
    updateLoadingBar(); // Initial call to set correct state
}

function updateLoadingBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('loading-bar').style.width = scrolled + '%';
}

// Call the function to create the loading bar
createLoadingBar();