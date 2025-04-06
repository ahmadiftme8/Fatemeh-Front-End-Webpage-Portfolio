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
    const loader = document.getElementById('loader');
    const vpnPopup = document.getElementById('vpnPopup');
    const vpnCloseButton = document.getElementById('vpnCloseButton');

    // Debugging: Check if elements are found
    console.log('Gallery Container:', galleryContainer);
    console.log('Video Modal:', videoModal);
    console.log('Close Modal Button:', closeModal);
    console.log('Vimeo Player:', vimeoPlayer);
    console.log('Loader:', loader);
    console.log('VPN Popup:', vpnPopup);
    console.log('VPN Close Button:', vpnCloseButton);

    if (!galleryContainer || !videoModal || !closeModal || !vimeoPlayer || !loader || !vpnPopup || !vpnCloseButton) {
        console.error('One or more required elements not found. Check your HTML IDs.');
        return;
    }

    // Show loader initially
    loader.classList.remove('hidden');

    // Function to fetch video metadata from Vimeo oEmbed API with timeout
    async function fetchVimeoMetadata(vimeoId) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout
            const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`, {
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`Failed to fetch metadata for Vimeo ID ${vimeoId}: ${response.statusText}`);
            }
            const data = await response.json();
            return {
                thumbnail: data.thumbnail_url.replace('_640', '_200'),
                title: data.title || 'Untitled Video',
                description: data.description || 'No description available.'
            };
        } catch (error) {
            console.error(error);
            return {
                thumbnail: '/Videos/thumbnails/01.jpg',
                title: 'Error: Video Title Unavailable',
                description: 'Error: Video Description Unavailable',
                failed: true // Flag to indicate failure
            };
        }
    }

    // Check Vimeo availability
    let vimeoBlocked = false;
    const testMetadata = await fetchVimeoMetadata(videoIds[0].vimeoId);
    if (testMetadata.failed) {
        vimeoBlocked = true;
        loader.classList.add('hidden');
        vpnPopup.style.display = 'flex';
    } else {
        // Fetch metadata for all videos and store in an array
        const videos = await Promise.all(
            videoIds.map(async (video, index) => {
                const metadata = await fetchVimeoMetadata(video.vimeoId);
                return {
                    ...video,
                    ...metadata,
                    index
                };
            })
        );

        // Hide loader once content is loaded
        loader.classList.add('hidden');

        // Dynamically generate gallery items with white SVG play button
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
                    <div class="play-button">
                        <svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                             width="50px" height="50px" viewBox="0 0 408.221 408.221">
                            <path d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11
                                C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012
                                c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z"/>
                        </svg>
                    </div>
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
                let embedUrl = `https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1`;
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
    }

    // Close VPN popup (moved outside async block to ensure it’s always attached)
    vpnCloseButton.addEventListener('click', function () {
        console.log('VPN popup closed');
        vpnPopup.style.display = 'none';
        // Uncomment the next line if you want to auto-reload the page
        // window.location.reload();
    });
});