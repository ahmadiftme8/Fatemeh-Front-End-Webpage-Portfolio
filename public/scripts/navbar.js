document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const dropdowns = document.querySelectorAll('.dropdown');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    
    // Clear all active states initially
    function clearActiveStates() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        dropdownLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // Toggle current dropdown
                if (dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active');
                } else {
                    // Close other open dropdowns
                    dropdowns.forEach(item => {
                        if (item !== dropdown) {
                            item.classList.remove('active');
                        }
                    });
                    
                    dropdown.classList.add('active');
                }
            }
        });
    });

    // Handle clicks on non-dropdown links
    navLinks.forEach(link => {
        if (!link.parentElement.classList.contains('dropdown')) {
            link.addEventListener('click', function(e) {
                // Clear all active states
                clearActiveStates();
                
                // Set this link as active
                this.classList.add('active');
                
                // Close mobile menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                // For hash links (like #social-media), handle smooth scrolling
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const navbarHeight = navbar.offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        history.pushState(null, null, targetId);
                    }
                }
            });
        }
    });
    
    // Handle clicks on dropdown links
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Clear all active states
            clearActiveStates();
            
            // Set this dropdown link as active
            this.classList.add('active');
            
            // Also set parent dropdown nav-link as active
            const parentDropdown = this.closest('.dropdown');
            if (parentDropdown) {
                const parentNavLink = parentDropdown.querySelector('.nav-link');
                if (parentNavLink) {
                    parentNavLink.classList.add('active');
                }
            }
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Clear active states from dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
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

    // Set active state based on current URL or section in view
    function setActiveState() {
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        
        // Clear all active states first
        clearActiveStates();
        
        // Handle hash links (like #social-media)
        if (currentHash && currentHash.length > 1) {
            const hashLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
            if (hashLink) {
                hashLink.classList.add('active');
                return;
            }
        }
        
        // Check for specific pages and set appropriate active states
        if (currentPath.includes('graphic-design.html')) {
            // Activate the dropdown link
            const graphicLink = document.querySelector('.dropdown-link[href="graphic-design.html"]');
            if (graphicLink) {
                graphicLink.classList.add('active');
            }
            // Also activate the parent dropdown
            const parentDropdown = document.querySelector('.dropdown .nav-link');
            if (parentDropdown) {
                parentDropdown.classList.add('active');
            }
        } 
        else if (currentPath.includes('video-editing.html')) {
            const videoLink = document.querySelector('.dropdown-link[href="video-editing.html"]');
            if (videoLink) {
                videoLink.classList.add('active');
            }
            const parentDropdown = document.querySelector('.dropdown .nav-link');
            if (parentDropdown) {
                parentDropdown.classList.add('active');
            }
        } 
        else if (currentPath.includes('coding-projects-parent.html')) {
            const codingLink = document.querySelector('.dropdown-link[href="coding-projects-parent.html"]');
            if (codingLink) {
                codingLink.classList.add('active');
            }
            const parentDropdown = document.querySelector('.dropdown .nav-link');
            if (parentDropdown) {
                parentDropdown.classList.add('active');
            }
        } 
        else if (currentPath === '/' || currentPath === '' || currentPath.includes('index.html')) {
            // Default to Home for index.html or root URL
            const homeLink = document.querySelector('.nav-link[href="index.html"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }
    
    // Set active state on page load
    setActiveState();
    
    // Handle scroll events to highlight the Contact link when scrolled to contact section
    window.addEventListener('scroll', function() {
        // Check if we're on the home page
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath === '' || currentPath.includes('index.html')) {
            const contactSection = document.querySelector('#social-media');
            if (contactSection) {
                const sectionTop = contactSection.offsetTop;
                const sectionHeight = contactSection.offsetHeight;
                const currentScroll = window.pageYOffset;
                const navbarHeight = navbar.offsetHeight;
                
                // If we're scrolled into the contact section
                if (currentScroll >= (sectionTop - navbarHeight - 100) && 
                    currentScroll < (sectionTop + sectionHeight)) {
                    clearActiveStates();
                    const contactLink = document.querySelector('.nav-link[href="#social-media"]');
                    if (contactLink) {
                        contactLink.classList.add('active');
                    }
                } else if (currentScroll < (sectionTop - navbarHeight - 100)) {
                    // If we're above the contact section, ensure home is active
                    const homeLink = document.querySelector('.nav-link[href="index.html"]');
                    const contactLink = document.querySelector('.nav-link[href="#social-media"]');
                    
                    if (homeLink && contactLink && contactLink.classList.contains('active')) {
                        clearActiveStates();
                        homeLink.classList.add('active');
                    }
                }
            }
        }
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
    window.addEventListener('popstate', setActiveState);
});