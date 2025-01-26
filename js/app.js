// -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider-bg");
  const contentItems = document.querySelectorAll(".content-item");
  const progressBars = document.querySelectorAll(".timeline-progress");
  const navbar = document.getElementById("navbar");

  let currentIndex = 0;
  let lastScrollY = window.scrollY;

  // Initialize first slide
  setTimeout(() => {
    images[currentIndex].classList.add("active");
    contentItems[currentIndex].classList.add("active");
    progressBars[currentIndex].style.transition = "width 4s linear";
    progressBars[currentIndex].style.width = "100%";
  }, 100);

  function changeSlide() {
    // Deactivate current slide
    images[currentIndex].classList.remove("active");
    contentItems[currentIndex].classList.remove("active");
    progressBars[currentIndex].style.width = "0%";

    // Move to the next slide
    currentIndex = (currentIndex + 1) % images.length;

    // Activate next slide
    images[currentIndex].classList.add("active");
    contentItems[currentIndex].classList.add("active");
    progressBars[currentIndex].style.transition = "none";
    progressBars[currentIndex].style.width = "0%";

    setTimeout(() => {
      progressBars[currentIndex].style.transition = "width 5s linear";
      progressBars[currentIndex].style.width = "100%";
    }, 50);
  }

  setInterval(changeSlide, 5000);

  // Navbar hide/show on scroll
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
  });
});

// -----------------------------------------------------------------------

// const menuBtn = document.querySelector('.phone-menu-button')
// const navCloseBtn = document.querySelector('.phone-nav-close-btn');
// const phoneNav = document.querySelector('.phone-nav-box');

// menuBtn.addEventListener('click',()=>{
//   phoneNav.style.display = 'block';
// })

// navCloseBtn.addEventListener('click',()=>{
//   phoneNav.style.display = 'none';
// })

// -----------------------------------------------------------------------

const backToTopButton = document.getElementById('backToTop');

// Function to show or hide the button
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1.6) { // 160vh equivalent
        backToTopButton.style.display = 'block'; // Show the button
    } else {
        backToTopButton.style.display = 'none'; // Hide the button
    }
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const logo = document.getElementById("logo");
  let lastScrollY = window.scrollY;
  const scrollThreshold = 100; // Threshold for hiding/showing navbar
  const colorChangeThreshold = window.innerHeight * 0.2; // 20% of viewport height

  // Show the navbar with animation on page load
  setTimeout(() => {
    nav.classList.add("show");
  }, 100);

  // Navbar visibility, background color, and logo change on scroll
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Hide/show navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
      nav.classList.add("hide");
      nav.classList.remove("show");
    } else if (currentScrollY < lastScrollY) {
      nav.classList.add("show");
      nav.classList.remove("hide");
    }

    // Change navbar background color and logo after scrolling 90vh
    if (currentScrollY > colorChangeThreshold) {
      nav.classList.add("scrolled");
      logo.src = "../logo/mangal-logo-without-bg.png"; // Change to scrolled logo
    } else {
      nav.classList.remove("scrolled");
      logo.src = "../logo/logo-white.svg"; // Change back to default logo
    }
    
    lastScrollY = currentScrollY;
  });
});

// -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const dropdownContainers = document.querySelectorAll(".phone-nav-link-container > li");

  dropdownContainers.forEach(container => {
    container.addEventListener("click", function (event) {
      const dropdown = this.querySelector(".phone-dropdown");

      if (dropdown) {
        // Toggle visibility of the clicked dropdown
        dropdown.classList.toggle("show-dropdown");

        // Hide other open dropdowns
        document.querySelectorAll(".phone-dropdown").forEach(dd => {
          if (dd !== dropdown) {
            dd.classList.remove("show-dropdown");
          }
        });

        event.stopPropagation(); // Prevent event from bubbling up
      }
    });
  });

  // Hide dropdown if clicked outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".phone-dropdown").forEach(dd => {
      dd.classList.remove("show-dropdown");
    });
  });
});

// -----------------------------------------------------------------------

// Function to animate numbers
// function animateNumbers() {
//   const counters = document.querySelectorAll('.stroke-font');
//   const speed = 50; // Adjust speed (higher is slower)

//   counters.forEach(counter => {
//     const updateCount = () => {
//       const target = +counter.getAttribute('data-target'); // Get the target number
//       const count = +counter.innerText; // Current number in the counter
//       const increment = Math.ceil(target / speed); // Calculate increment

//       if (count < target) {
//         counter.innerText = count + increment;
//         setTimeout(updateCount, 20); // Call the function recursively
//       } else {
//         counter.innerText = target; // Set to target once complete
//       }
//     };

//     updateCount(); // Start animation
//   });
// }

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


// -----------------------------------------------------------------------

function showContent(buttonNumber, buttonElement) {
  // Hide all content
  document.querySelectorAll('#content > div').forEach(div => div.style.display = 'none');
  // Show the selected content
  document.getElementById(`content${buttonNumber}`).style.display = 'block';

  // Remove 'active' class from all buttons
  document.querySelectorAll('button').forEach(button => button.classList.remove('active'));
  // Add 'active' class to the clicked button
  buttonElement.classList.add('active');
}

// -----------------------------------------------------------------------

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

// -----------------------------------------------------------------------

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

// -----------------------------------------------------------------------



