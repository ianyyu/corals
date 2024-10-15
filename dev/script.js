// using d3 for convenience
var container1 = d3.select("#scroll-1");
var container2 = d3.select("#scroll-2");
var figure1 = container1.select("figure");
var figure2 = container2.select("figure");
var article1 = container1.select("article");
var article2 = container2.select("article");
var step1 = article1.selectAll(".step");
var step2 = article2.selectAll(".step");

// initialize the scrollama
var scroller1 = scrollama();
var scroller2 = scrollama();

function handleResize() {
    // 1. Update height of step elements
    var stepHeight = Math.floor(window.innerHeight * 0.75);
    step1.style("height", stepHeight + "px");
    step2.style("height", stepHeight + "px");

    // 2. Update width of step elements
    var bodyWidth = d3.select("body").node().offsetWidth;
    var stepWidth = Math.floor(bodyWidth * 0.8); // 80% of body width
    step1.style("width", stepWidth + "px");
    step2.style("width", stepWidth + "px");

    // 3. Update height of graphic elements
    var figureHeight = Math.floor(window.innerHeight * 0.5);
    figure1.style("height", figureHeight + "px");
    figure2.style("height", figureHeight + "px");

    // 4. Tell scrollama to update new element dimensions
    scroller1.resize();
    scroller2.resize();
}

function handleStepEnter1(response) {
    console.log("Scroller 1:", response);

    // add active class to current step
    d3.selectAll("#scroll-1 .step").classed("is-active", function (d, i) {
        return i === response.index;
    });

    // update dynamic text based on step
    var dynamicText = [
        "Did you know that Corals are about 1/4 of all ocean species depending on reefs for food and shelter.",
        "Did you know that Corals are estimated valued at 30 billion t0 172 billion U.S. dollars each year, providing food, protection of shorelines, jobs based on tourism, and even medicines.",
        "Did you know corals are aiding cancer research? Scientists discovered that 2 sponges from deep-sea coral ecosystems contain compounds with anti-inflammatory, anti-viral, and potent anti-tumor properties. These chemicals prevent the division and spread of lung and breast cancer cells."
    ];
    d3.select("#dynamic-text-1").text(dynamicText[response.index]);

    // You can update the sticky paragraph here if needed
    // d3.select("#scroll-1 .sticky-paragraph").text("Updated sticky text for step " + (response.index + 1));
}

function handleStepEnter2(response) {
    console.log("Scroller 2:", response);
    // response = { element, direction, index }

    // add color to current step only
    step2.classed("is-active", function (d, i) {
        return i === response.index;
    });

    // update dynamic text based on step
    var dynamicText = [
        "The ocean floor can be divided into three major zones: the shallow continental shelf, which corresponds to the epipelagic zone, the deeper mesophotic zone along the continental slope, and the vast abyssal and hadalpelagic zones of the deep ocean floor.",
        "Corals, vital to marine ecosystems, are found throughout the world's oceans, thriving in both shallow tropical waters and deeper,  darker environments",
        "Reef-building corals thrive only in shallow tropical and subtropical waters. This is because the algae in their tissues need sunlight for photosynthesis, and these corals prefer water temperatures between 70-85°F (22-29°C).",
        "In contrast, deep-sea corals thrive in cold, dark waters at depths of up to 20,000 feet (6,000 m). Unlike their shallow-water counterparts, deep-sea corals don't rely on sunlight or warm water, as they lack algae. Though they grow slowly, these corals can be found on underwater peaks called seamounts. Scientists have discovered over 3,300 species of deep-sea corals, nearly as many as shallow-water species, and the number continues to grow."
    ];
    d3.select("#dynamic-text-2").text(dynamicText[response.index]);
}

function init() {
    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scrollers passing options
    // 3. bind scrollama event handlers
    scroller1
        .setup({
            step: "#scroll-1 .step",
            debug: true,
            offset: 0.75
        })
        .onStepEnter(handleStepEnter1);

    scroller2
        .setup({
            step: "#scroll-2 .step",
            debug: true,
            offset: 0.75
        })
        .onStepEnter(handleStepEnter2);

    // setup resize event
    window.addEventListener("resize", handleResize);
}

// kick things off
init();