// Ensure the DOM is fully loaded before initializing the sliders
document.addEventListener('DOMContentLoaded', () => {
	// Initialize slideshows
	const sliders = document.querySelectorAll(".testimonial-slider__wrapper");
  
	// Loop through each testimonial slider in html
	sliders.forEach((slider) => {
	  // Get the autoplay value from html data attribute in liquid
	  let autoPlayValue = Number(slider.dataset.autoplay);

	  // Initialize Flickity for each slider
	  new Flickity(slider, {
		// Options
		cellAlign: "left",
		wrapAround: true,
		autoPlay: autoPlayValue > 0 ? autoPlayValue : false, // No autoplay as per config
		pageDots: false,
		fullscreen: true,
		pauseAutoPlayOnHover: false,
		// Events can be added here if needed
	  });
	});
  });
  
  // Config:
  // - Supports multiple sliders on the page
  // - Navigation dots are disabled
  // - No autoplay
  // - Infinite loop (wrapAround: true)
  // - The slides or cells are aligned to the left side on initialization
  // - pauseAutoPlayOnHover: false (although this has no effect when autoPlay is false)