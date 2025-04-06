// File: public/scripts/dribbble-fetch.js
let currentPage = 1;
let isLoading = false;
let hasMore = true;

// Function to check if device is mobile
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

async function fetchShots(page) {
    const loadingIndicator = document.getElementById('loading');
    if (!loadingIndicator) {
        console.error('Loading indicator not found!');
        return;
    }
    
    try {
        isLoading = true;
        loadingIndicator.style.display = 'block';
        console.log(`Fetching shots for page ${page}...`);

        const response = await fetch(`/api/shots?page=${page}`);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error(`API Error (${response.status}):`, errorData);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.shots || !Array.isArray(data.shots)) {
            console.error('Invalid data format:', data);
            throw new Error('Invalid data format received from API');
        }
        
        const shots = data.shots;
        hasMore = data.hasMore;

        console.log(`Page ${page}: Fetched ${shots.length} shots, hasMore: ${hasMore}`);
        
        const gallery = document.getElementById('gallery');
        if (!gallery) {
            console.error('Gallery element not found!');
            return;
        }

        shots.forEach(shot => {
            const shotElement = document.createElement('div');
            shotElement.className = 'shot';
            
            if (!shot.images || !shot.images.normal) {
                console.warn('Shot missing image data:', shot);
                shotElement.innerHTML = `
                    <div class="shot-title">${shot.title || 'Untitled Shot'}</div>
                `;
            } else {
                // Choose image source based on device size
                const imageSrc = isMobile() && shot.images.hidpi 
                    ? shot.images.hidpi 
                    : shot.images.normal;
                
                shotElement.innerHTML = `
                    <a href="${shot.html_url || '#'}" target="_blank" class="shot-link">
                        <img src="${imageSrc}" 
                             srcset="${shot.images.normal} 1x, ${shot.images.hidpi || shot.images.normal} 2x"
                             alt="${shot.title || 'Dribbble Shot'}" 
                             class="shot-image">
                        <div class="shot-title">${shot.title || 'Untitled Shot'}</div>
                    </a>
                `;
            }
            
            gallery.appendChild(shotElement);
        });

        isLoading = false;
        if (!hasMore) {
            console.log('No more shots to load. Stopping observer.');
            loadingIndicator.style.display = 'none';
            observer.unobserve(loadingIndicator);
        }
    } catch (error) {
        console.error('Error loading shots:', error);
        
        const gallery = document.getElementById('gallery');
        if (gallery && page === 1) {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.innerHTML = `
                <p>Sorry, we couldn't load the shots. Please try again later.</p>
                <p>Error: ${error.message}</p>
            `;
            gallery.appendChild(errorElement);
        }
        
        isLoading = false;
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const loadingIndicator = document.getElementById('loading');
    
    if (!gallery || !loadingIndicator) {
        console.error('Required DOM elements not found!');
        return;
    }
    
    // Initial load
    fetchShots(currentPage);
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isLoading && hasMore) {
                    console.log('Loading next page...');
                    currentPage++;
                    fetchShots(currentPage);
                }
            });
        },
        {
            root: null,
            rootMargin: '200px',
            threshold: 0
        }
    );

    observer.observe(loadingIndicator);

    // Optional: Update images on window resize
    window.addEventListener('resize', debounce(() => {
        const images = document.querySelectorAll('.shot-image');
        images.forEach(img => {
            const shot = img.closest('.shot');
            const normalSrc = img.getAttribute('srcset').split(',')[0].split(' ')[0];
            const hidpiSrc = img.getAttribute('srcset').split(',')[1].split(' ')[0];
            img.src = isMobile() && hidpiSrc ? hidpiSrc : normalSrc;
        });
    }, 250));
});

// Debounce function to limit resize event frequency
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}