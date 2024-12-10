// const productSlides = document.querySelector('.product-image-slides');
// const productDots = document.querySelectorAll('.product-image-dot');
// const productSlideCount = productDots.length;

// let currentIndex = 0;
// let timer;

// // Show the current slide and highlight the corresponding dot
// function updateSlider(index) {
// productSlides.style.transform = `translateX(-${index * 100}%)`;
//   productDots.forEach(dot => dot.classList.remove('active'));
//   productDots[index].classList.add('active');
// }

// // Move to the next slide
// function showNextSlide() {
//   currentIndex = (currentIndex + 1) % productSlideCount;
//   updateSlider(currentIndex);
// }

// // Go to a specific slide
// productDots.forEach(dot => {
//   dot.addEventListener('click', () => {
//     currentIndex = parseInt(dot.getAttribute('data-index'));
//     updateSlider(currentIndex);
//     resetTimer();
//   });
// });

// // Reset the automatic sliding timer
// function resetTimer() {
//   clearInterval(timer);
//   timer = setInterval(showNextSlide, 3000); // Change slide every 3 seconds
// }

// // Initialize the slider
// updateSlider(currentIndex);
// timer = setInterval(showNextSlide, 3000);

// -----------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//     const productFaqQuestions = document.querySelectorAll(".product-faq-question");

//     productFaqQuestions.forEach((question) => {
//         question.addEventListener("click", () => {
//             // Close all other answers
//             document.querySelectorAll(".product-faq-answer").forEach((answer) => {
//                 answer.style.maxHeight = null;
//                 answer.classList.remove("visible");
//             });

//             // Close other questions
//             productFaqQuestions.forEach((q) => {
//                 if (q !== question) {
//                     q.classList.remove("active");
//                 }
//             });

//             // Toggle current question
//             const answer = question.nextElementSibling;
//             if (!question.classList.contains("active")) {
//                 answer.style.maxHeight = answer.scrollHeight + "px";
//                 answer.classList.add("visible");
//                 question.classList.add("active");
//             } else {
//                 answer.style.maxHeight = null;
//                 answer.classList.remove("visible");
//                 question.classList.remove("active");
//             }
//         });
//     });
// });

const faqs = document.querySelectorAll('.faq');
        
faqs.forEach((faq) => {
  faq.querySelector('.faq-question').addEventListener('click', () => {
    // Close all FAQs except the clicked one
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove('open');
      }
    });
    // Toggle the clicked FAQ
    faq.classList.toggle('open');
  });
});
