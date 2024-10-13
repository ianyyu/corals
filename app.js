import scrollama from "scrollama"; // or...
const scrollama = require("scrollama");
// Initialize Scrollama
const scroller = scrollama();

// Setup scroller
scroller
  .setup({
    step: ".step", // Class of the step elements
    offset: 0.5,   // The trigger point is when step reaches the middle of the viewport
    debug: true,   // Shows trigger points while developing
  })
  .onStepEnter((response) => {
    // Actions when step enters view
    const { element } = response;
    element.style.backgroundColor = '#add8e6'; // Change background color on enter
    console.log(`Entered step: ${element.dataset.step}`);
  })
  .onStepExit((response) => {
    // Actions when step leaves view
    const { element } = response;
    element.style.backgroundColor = '#f4f4f4'; // Reset background color on exit
    console.log(`Exited step: ${element.dataset.step}`);
  });
