/*
 * Main JavaScript for Sight Studio Website
 *
 * Handles mobile navigation toggling, current year insertion,
 * smooth scrolling for on‑page anchors, and placeholder booking
 * button functionality. Feel free to extend this script with
 * additional interactivity as the site evolves.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile navigation
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      // animate hamburger bars
      hamburger.classList.toggle('is-active');
    });
  }

  // Insert current year into footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for same‑page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // ignore external links
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Booking button placeholder
  const bookingButtons = document.querySelectorAll('.btn-primary, .btn-cta');
  bookingButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      // Only intercept clicks that lead to booking; if link is
      // within the site (e.g., contact page) then allow default behavior.
      if (btn.dataset.booking === 'true') {
        e.preventDefault();
        alert('Online booking integration coming soon! Please call (860) 394‑2004 to schedule.');
      }
    });
  });
});

// Image loading optimization
document.addEventListener('DOMContentLoaded', () => {
  // Add loaded class to images once they're loaded
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });

  // Intersection Observer for lazy loading (for browsers that don't support native lazy loading)
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }
});