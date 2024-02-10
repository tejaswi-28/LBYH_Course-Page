// Function to handle subscription
function subscribe() {
  var email = document.getElementById('emailInput').value;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email && emailRegex.test(email)) {
    document.getElementById('success').style.display = 'block';
    setTimeout(function() {
      document.getElementById('success').style.display = 'none';
    }, 3000);
  }
}

// Function to handle dropdown menu behavior
document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function(element) {
  element.addEventListener('click', function(e) {
    var parentDropdown = this.closest('.dropdown-submenu');
    if (parentDropdown) {
      e.preventDefault();
      parentDropdown.querySelector('.dropdown-menu').classList.toggle('show');
    }
  });
});

// Function to update button content based on screen width
function updateButtonContent() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const mobileBreakpoint = 768;
  const button = document.querySelector('.cus_input-container button');

  if (screenWidth < mobileBreakpoint) {
    button.innerHTML = '<i class="fas fa-bell"></i>';
  } else {
    button.innerHTML = '<i class="fas fa-bell px-2"></i>Subscribe';
  }
}
// code to add extra subjects
document.addEventListener("DOMContentLoaded", function() {
  // Initialize Bootstrap carousel
  var carousel = document.querySelector("#carouselTutorsIndicators");
  var carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 5000, // Set the interval for sliding to the next item
      wrap: true, // Enable continuous looping of slides
      keyboard: true // Enable keyboard navigation
  });
});


// Call the updateButtonContent function on page load and resize events
window.onload = window.onresize = updateButtonContent;

// Function to handle toggle behavior of cus_col elements
document.addEventListener("DOMContentLoaded", function() {
  const cusCols = document.querySelectorAll(".cus_col");

  cusCols.forEach((col) => {
    const heading = col.querySelector("h3");
    const content = col.querySelector(".links");

    if (heading && content) {
      heading.addEventListener("click", function() {
        col.classList.toggle("active");
        content.classList.toggle("active");
      });
    }
  });
});
