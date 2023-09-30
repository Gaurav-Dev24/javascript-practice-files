const slides  = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach(
    // the slide var will hold the img & index will hold the key
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
        // slide.style.bottom = `${index * 100}%`;
    }
)

// handler function to move image prev and next
const goPrev = () => {
    counter--;
    slideImage()
}
const goNext = () => {
    counter++;
    slideImage()
}

// handler function for slide the image
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            // slide.style.transform = `translateY(${counter * 100}%)`
        }
    )
}