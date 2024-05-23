const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter = (counter - 1 + slides.length) % slides.length;
    slideImage();
};

const goNext = () => {
    counter = (counter + 1) % slides.length;
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide, index) => {
        slide.style.left = `${(index - counter) * 100}%`;
    });
};



document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    // Fetching form input values
    const name = document.querySelector('.name').value;
    const message = document.querySelector('.message').value;
    
    // Logging the form data to the console
    console.log("Name: ", name);
    console.log("Message: ", message);
    
    // Clearing the form fields
    document.querySelector('.name').value = '';
    document.querySelector('.message').value = '';
  });