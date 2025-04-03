// File: public/scripts/dribbble-fetch.js
let currentPage = 1;
let isLoading = false;
let hasMore = true;

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
    
    // Validate data structure
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
      
      // Check if shot has the expected structure
      if (!shot.images || !shot.images.normal) {
        console.warn('Shot missing image data:', shot);
        // Provide fallback display
        shotElement.innerHTML = `
          <div class="shot-title">${shot.title || 'Untitled Shot'}</div>
        `;
      } else {
        shotElement.innerHTML = `
          <a href="${shot.html_url || '#'}" target="_blank" class="shot-link">
            <img src="${shot.images.normal}" alt="${shot.title || 'Dribbble Shot'}" class="shot-image">
            <div class="shot-title">${shot.title || 'Untitled Shot'}</div>
          </a>
        `;
      }
      
      gallery.appendChild(shotElement);
    });

    isLoading = false;
    // Only hide the loading indicator if there are no more shots
    if (!hasMore) {
      console.log('No more shots to load. Stopping observer.');
      loadingIndicator.style.display = 'none';
      observer.unobserve(loadingIndicator);
    }
  } catch (error) {
    console.error('Error loading shots:', error);
    
    // Show error message to user
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

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('gallery');
  const loadingIndicator = document.getElementById('loading');
  
  if (!gallery) {
    console.error('Gallery element (#gallery) not found in DOM!');
    return;
  }
  
  if (!loadingIndicator) {
    console.error('Loading indicator (#loading) not found in DOM!');
    return;
  }
  
  // Initial load
  fetchShots(currentPage);
  
  // Intersection Observer for infinite scrolling
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        console.log('Intersection Observer triggered:', {
          isIntersecting: entry.isIntersecting,
          isLoading: isLoading,
          hasMore: hasMore
        });

        if (entry.isIntersecting && !isLoading && hasMore) {
          console.log('Loading indicator is visible. Fetching next page...');
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
});