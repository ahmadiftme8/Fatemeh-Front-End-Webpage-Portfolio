let currentPage = 1;
let isLoading = false;
let hasMore = true;

async function fetchShots(page) {
  const loadingIndicator = document.getElementById('loading');
  try {
    isLoading = true;
    loadingIndicator.style.display = 'block';
    console.log(`Fetching shots for page ${page}...`);

    const response = await fetch(`/api/shots?page=${page}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const shots = data.shots;
    hasMore = data.hasMore;

    console.log(`Page ${page}: Fetched ${shots.length} shots, hasMore: ${hasMore}`);

    const gallery = document.getElementById('gallery');

    shots.forEach(shot => {
      const shotElement = document.createElement('div');
      shotElement.className = 'shot';
      shotElement.innerHTML = `
        <a href="${shot.html_url}" target="_blank">
          <img src="${shot.images.normal}" alt="${shot.title}" loading="lazy">
        </a>
        <div class="shot-title">${shot.title}</div>
      `;
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
    isLoading = false;
    loadingIndicator.style.display = 'none';
  }
}

// Initial load
fetchShots(currentPage);

// Intersection Observer for infinite scrolling
const loadingIndicator = document.getElementById('loading');
if (!loadingIndicator) {
  console.error('Loading indicator not found in the DOM!');
}

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