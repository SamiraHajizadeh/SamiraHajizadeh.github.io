// Enhanced smooth scrolling functionality
(function() {
  'use strict';

  // Smooth scroll for all internal links
  document.addEventListener('DOMContentLoaded', function() {
    // Get all links that point to internal anchors
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Smooth scroll for navigation menu items
    const navLinks = document.querySelectorAll('.masthead__menu-item a');
    
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Add smooth transition effect
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '0.7';
        
        setTimeout(function() {
          document.body.style.opacity = '1';
        }, 300);
      });
    });

    // Add scroll behavior to page
    if ('scrollBehavior' in document.documentElement.style) {
      // Browser supports smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    // Detect scroll direction and add class to body
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
      } else {
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
  });
})();

