document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const dropdowns = document.querySelectorAll('.dropdown');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove all active classes initially
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't handle dropdown toggles on desktop
            if (this.parentElement.classList.contains('dropdown') && window.innerWidth > 768) {
                return;
            }
            
            // For non-dropdown links, or dropdown links on mobile
            if (!this.parentElement.classList.contains('dropdown') || window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // Set active state for non-dropdown links
            if (!this.parentElement.classList.contains('dropdown')) {
                // Clear all active states
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // Set this link as active
                this.classList.add('active');
            }
        });
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        
        dropdownLink.addEventListener('click', function(e) {
            // Only prevent default and toggle dropdown in mobile view
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // Close other open dropdowns
                dropdowns.forEach(item => {
                    if (item !== dropdown && item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Simplified active link handling - set only ONE active link based on URL
    function setActiveLinkByUrl() {
        // Get current URL parts
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        
        // First, remove all active classes
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Determine which link to set as active
        if (currentHash && currentHash.length > 1) {
            // For hash links (like #social-media)
            const hashLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
            if (hashLink) {
                hashLink.classList.add('active');
                return; // Exit early - we found our match
            }
        }
        
        // Check the pathname for direct matches (priority to specific pages)
        if (currentPath.includes('graphic-design.html')) {
            const graphicLink = document.querySelector('.dropdown-link[href="graphic-design.html"]');
            if (graphicLink) {
                graphicLink.classList.add('active');
                return;
            }
        } else if (currentPath.includes('video-editing.html')) {
            const videoLink = document.querySelector('.dropdown-link[href="video-editing.html"]');
            if (videoLink) {
                videoLink.classList.add('active');
                return;
            }
        } else if (currentPath.includes('coding-projects-parent.html')) {
            const codingLink = document.querySelector('.dropdown-link[href="coding-projects-parent.html"]');
            if (codingLink) {
                codingLink.classList.add('active');
                return;
            }
        }
        
        // Default to Home for index.html or root URL
        if (currentPath === '/' || currentPath === '' || currentPath.includes('index.html')) {
            const homeLink = document.querySelector('.nav-link[href="index.html"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }
    
    // Set active link on page load
    setActiveLinkByUrl();
    
    // Add click event listeners to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Skip portfolio dropdown toggle
            if (this.parentElement.classList.contains('dropdown') && !this.classList.contains('dropdown-link')) {
                return;
            }
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class only to clicked link
            this.classList.add('active');
            
            // For hash links, prevent default and scroll smoothly
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Reset active state when changing pages
    window.addEventListener('popstate', setActiveLinkByUrl);
});