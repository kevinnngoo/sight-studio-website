// Main JavaScript file for Sight Studio Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle (if needed later)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-nav-open');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Book appointment button functionality
    const bookingButtons = document.querySelectorAll('.btn-primary, .btn-cta');
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // For now, just alert - replace with actual booking system
            if (this.textContent.includes('Book')) {
                // Replace this with your actual booking system integration
                // Examples: Calendly, Acuity Scheduling, etc.
                alert('Booking system integration coming soon! Please call (860) 394-2004 to schedule.');
                
                // Example for future Calendly integration:
                // Calendly.initPopupWidget({url: 'https://calendly.com/your-link'});
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('form[netlify]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Netlify will handle the form submission
            // You can add custom validation or success messaging here
            console.log('Form submitted to Netlify');
        });
    }
    
    // Add active class to current page navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
            link.classList.add('active');
        }
    });
    
});

// Utility function for future use
function showNotification(message, type = 'info') {
    // Simple notification system for future enhancements
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}
