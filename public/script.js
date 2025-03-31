async function fetchShots() {
    try {
      const response = await fetch('/api/shots');
      const shots = await response.json();
      const gallery = document.getElementById('gallery');
  
      shots.forEach(shot => {
        const shotElement = document.createElement('div');
        shotElement.className = 'shot';
        shotElement.innerHTML = `
          <a href="${shot.html_url}" target="_blank">
            <img src="${shot.images.hidpi || shot.images.normal}" alt="${shot.title}">
          </a>
          <div class="shot-title">${shot.title}</div>
        `;
        gallery.appendChild(shotElement);
      });
    } catch (error) {
      console.error('Error loading shots:', error);
    }
  }
  
  // Fetch shots when the page loads
  fetchShots();