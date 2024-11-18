// --------------------------------------------------------------

const container = document.querySelector('.testimonial-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const progressBar = document.querySelector('.progress-bar');

// Update progress bar based on scroll position
function updateProgressBar() {
  const scrollWidth = container.scrollWidth - container.clientWidth;
  const scrollLeft = container.scrollLeft;
  const progress = (scrollLeft / scrollWidth) * 100;
  progressBar.style.width = `${progress}%`;
  
  // Check if the user has scrolled to the end
  if (scrollLeft >= scrollWidth - 1) {
    // Smoothly scroll back to the first testimonial
    setTimeout(() => {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }, 2500); // Small delay for a better user experience
  }
}

// Scroll event to update progress bar and check scroll end
container.addEventListener('scroll', updateProgressBar);

// Left and right button functionality
leftBtn.addEventListener('click', () => {
  container.scrollBy({ left: -container.offsetWidth / 3, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  container.scrollBy({ left: container.offsetWidth / 3, behavior: 'smooth' });
});

// Initialize progress bar on page load
updateProgressBar();

// --------------------------------------------------------------

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

// --------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider-bg");
  const progressBars = document.querySelectorAll(".timeline-progress");
  const navbar = document.getElementById("navbar");

  let currentIndex = 0;
  let lastScrollY = window.scrollY;

  // Add active class to the first image after a delay to trigger animation
  setTimeout(() => {
    images[currentIndex].classList.add("active");
    progressBars[currentIndex].style.transition = "width 3s linear";
    progressBars[currentIndex].style.width = "100%";
  }, 100); // Slight delay to ensure animation works

  function changeBackground() {
    images[currentIndex].classList.remove("active");
    progressBars[currentIndex].style.width = "0%";

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add("active");
    progressBars[currentIndex].style.transition = "none";
    progressBars[currentIndex].style.width = "0%";

    setTimeout(() => {
      progressBars[currentIndex].style.transition = "width 3s linear";
      progressBars[currentIndex].style.width = "100%";
    }, 50);
  }

  setInterval(changeBackground, 3000); // Change image every 3 seconds

  // Navbar hide/show on scroll with animation
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      navbar.classList.add("hidden"); // Hide navbar
    } else {
      navbar.classList.remove("hidden"); // Show navbar
    }

    lastScrollY = currentScrollY;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  let lastScrollY = window.scrollY;
  const scrollThreshold = 100; // Threshold for showing the navbar

  // Show the navbar with animation on page load
  setTimeout(() => {
    nav.classList.add("show");
  }, 100);

  // Navbar visibility on scroll
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
      // Hide navbar on scroll down after crossing the threshold
      nav.classList.add("hide");
      nav.classList.remove("show");
    } else if (currentScrollY < lastScrollY) {
      // Show navbar on scroll up
      nav.classList.add("show");
      nav.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  });
});


// Function to animate numbers
function animateNumbers() {
  const counters = document.querySelectorAll('.stroke-font');
  const speed = 50; // Adjust speed (higher is slower)

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target'); // Get the target number
      const count = +counter.innerText; // Current number in the counter
      const increment = Math.ceil(target / speed); // Calculate increment

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20); // Call the function recursively
      } else {
        counter.innerText = target; // Set to target once complete
      }
    };

    updateCount(); // Start animation
  });
}

// Observer to trigger animation when section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers(); // Start number animation
        observer.disconnect(); // Run only once
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

const section = document.querySelector('.about-section-left');
observer.observe(section); // Observe the section


// --------------------------------------------------------------

const dots = document.querySelectorAll('.dot');
const slideContainer = document.getElementById('slideContainer');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
     // Remove active class from all dots
     dots.forEach(d => d.classList.remove('active'));

    // Add active class to the clicked dot
    dot.classList.add('active');

    // Get the index of the clicked dot
    const index = dot.getAttribute('data-index');

    // Move the slide container
    slideContainer.style.transform = `translateX(-${index * 100}%)`;
  });
});



