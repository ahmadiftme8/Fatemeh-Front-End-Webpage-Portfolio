document.addEventListener('DOMContentLoaded', async function () {
    // Initial video IDs (we'll fetch metadata dynamically)
    const videoIds = [
        { vimeoId: '1072815418', vimeoHash: '41ceb11e27' },
        { vimeoId: '1072815418', vimeoHash: '41ceb11e27' },
        { vimeoId: '1072815418', vimeoHash: '41ceb11e27' },
        { vimeoId: '1072815418', vimeoHash: '41ceb11e27' }
    ];

    const galleryContainer = document.getElementById('galleryContainer');
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const vimeoPlayer = document.getElementById('vimeoPlayer');

    // Debugging: Check if elements are found
    console.log('Gallery Container:', galleryContainer);
    console.log('Video Modal:', videoModal);
    console.log('Close Modal Button:', closeModal);
    console.log('Vimeo Player:', vimeoPlayer);

    if (!galleryContainer || !videoModal || !closeModal || !vimeoPlayer) {
        console.error('One or more required elements not found. Check your HTML IDs.');
        return;
    }

    // Function to fetch video metadata from Vimeo oEmbed API
    async function fetchVimeoMetadata(vimeoId) {
        try {
            const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch metadata for Vimeo ID ${vimeoId}: ${response.statusText}`);
            }
            const data = await response.json();
            return {
                thumbnail: data.thumbnail_url.replace('_640', '_200'), // Use medium thumbnail (200px wide)
                title: data.title || 'Untitled Video',
                description: data.description || 'No description available.'
            };
        } catch (error) {
            console.error(error);
            // Fallback metadata in case the API call fails
            return {
                thumbnail: '/Videos/thumbnails/01.jpg', // Fallback thumbnail
                title: 'Error: Video Title Unavailable',
                description: 'Error: Video Description Unavailable'
            };
        }
    }

    // Fetch metadata for all videos and store in an array
    const videos = await Promise.all(
        videoIds.map(async (video, index) => {
            const metadata = await fetchVimeoMetadata(video.vimeoId);
            return {
                ...video,
                ...metadata,
                index // Add index for unique identification
            };
        })
    );

    // Dynamically generate gallery items
    videos.forEach((video) => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.setAttribute('data-vimeo-id', video.vimeoId);
        videoItem.setAttribute('data-vimeo-hash', video.vimeoHash || '');
        videoItem.setAttribute('data-index', video.index);

        videoItem.innerHTML = `
            <div class="thumbnail-wrapper">
                <img src="${video.thumbnail}" alt="Video Thumbnail" class="thumbnail">
                <div class="overlay"></div>
                <div class="play-button"></div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        `;

        galleryContainer.appendChild(videoItem);
    });

    // Open modal when a video item is clicked
    const videoItems = document.querySelectorAll('.video-item');
    console.log('Video Items Found:', videoItems.length);
    if (videoItems.length === 0) {
        console.error('No video items found. Check if the gallery items are being generated correctly.');
        return;
    }

    videoItems.forEach((item) => {
        item.addEventListener('click', function () {
            const index = item.getAttribute('data-index');
            const video = videos[index];
            console.log(`Thumbnail ${parseInt(index) + 1} clicked, opening modal`);
            const vimeoId = video.vimeoId;
            const vimeoHash = video.vimeoHash;
            let embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&title=0&byline=0&portrait=0`;
            if (vimeoHash) {
                embedUrl += `&h=${vimeoHash}`;
            }
            console.log('Embed URL:', embedUrl);
            if (vimeoPlayer) {
                vimeoPlayer.src = embedUrl;
            } else {
                console.error('Vimeo player iframe not found. Check the ID "vimeoPlayer" in your HTML.');
            }
            videoModal.style.display = 'flex';
            console.log('Modal display set to flex. Current display:', videoModal.style.display);
        });
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        console.log('Close button clicked');
        videoModal.style.display = 'none';
        if (vimeoPlayer) {
            vimeoPlayer.src = '';
        }
    });

    // Close modal when clicking outside the video
    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            console.log('Clicked outside modal');
            videoModal.style.display = 'none';
            if (vimeoPlayer) {
                vimeoPlayer.src = '';
            }
        }
    });
});