// Initialize Scrollama
const scroller = scrollama();

// Setup scroller
scroller
  .setup({
    step: ".scroll-section",   // Step elements
    offset: 0.5,               // Trigger point
    debug: true                // Debugger
  })
  .onStepEnter((response) => {
    const { element } = response;
    console.log(`Entering step: ${element.id}`);
  })
  .onStepExit((response) => {
    console.log(`Exiting step: ${response.element.id}`);
  });
