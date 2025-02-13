
// initialize slideshow
const slider_html = document.querySelector(".testimonial-slider__wrapper");

const slider = new Flickity(slider_html, {
	// options
	cellAlign: "left",
	wrapAround: true,
	autoPlay: false,
	pageDots: false,
	fullscreen: true,
    pauseAutoPlayOnHover: false,
    // events
});

// config:
// assume there is just one single slider on the page
// navigation dots should be disabled
// no autoplay
// infinite loop
// the slides or cells should be aligned to the left side on initialization.
// pauseAutoPlayOnHover: false
