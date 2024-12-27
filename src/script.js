const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Counter animation function
function animateCounter(element, target, isDecimal = false) {
  let current = 0;
  const increment = isDecimal ? 0.1 : 1;
  const duration = 2000; // 2 seconds
  const steps = isDecimal ? target * 10 : target;
  const stepTime = duration / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current > target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = isDecimal
        ? current.toFixed(1)
        : Math.floor(current);
    }
  }, stepTime);
}

// Intersection Observer for counter animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Regular counters
        entry.target.querySelectorAll(".counter-number").forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target"));
          animateCounter(counter, target);
        });

        // Decimal counter (rating)
        entry.target.querySelectorAll(".counter-decimal").forEach((counter) => {
          const target = parseFloat(counter.getAttribute("data-target"));
          animateCounter(counter, target, true);
        });

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observe the hero section
observer.observe(document.querySelector("#home"));
