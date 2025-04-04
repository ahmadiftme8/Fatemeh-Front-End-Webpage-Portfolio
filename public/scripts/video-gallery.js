document.addEventListener('DOMContentLoaded', function () {
    // Video data array (add new videos here)
    const videos = [
        {
            thumbnail: 'thumbnail1.jpg',
            title: 'Cinematic Travel Montage',
            description: 'Video Editing • Motion Graphics',
            videoId: '6057428475001' // Replace with actual video ID
        },
        {
            thumbnail: 'thumbnail2.jpg',
            title: 'Cinematic Travel Montage',
            description: 'Video Editing • Motion Graphics',
            videoId: '6057428475002' // Replace with actual video ID
        },
        {
            thumbnail: 'thumbnail3.jpg',
            title: 'Cinematic Travel Montage',
            description: 'Video Editing • Motion Graphics',
            videoId: '6057428475003' // Replace with actual video ID
        },
        {
            thumbnail: 'thumbnail4.jpg',
            title: 'Cinematic Travel Montage',
            description: 'Video Editing • Motion Graphics',
            videoId: '6057428475004' // Replace with actual video ID
        }
        // Add more videos here as needed
    ];

    const galleryContainer = document.getElementById('galleryContainer');
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const player = videojs.getPlayer('myPlayerID');

    // Dynamically generate gallery items
    videos.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.setAttribute('data-video-id', video.videoId);

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

    // Initialize the player
    player.ready(function () {
        const playerContainer = document.getElementById('videoContainer');
        const isMobile = (/Android|webOS|iPhone|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) ? true : false;

        if (isMobile) {
            // Define a modal close button
            const CloseModal = videojs.getComponent('button');
            const CloseModal_ = videojs.extend(CloseModal, {
                constructor: function () {
                    CloseModal.apply(this, arguments);
                    this.addClass('vjs-close-modal');
                    this.controlText('Close video');
                },
                handleClick: function () {
                    playerContainer.style.maxWidth = '286px';
                    videoModal.style.display = 'none';
                    player.pause();
                }
            });

            videojs.registerComponent('CloseModal', CloseModal_);
            player.addChild('CloseModal', {});

            // When playback begins, enter full width mode
            player.on('play', function () {
                playerContainer.style.width = '100%';
                playerContainer.style.maxWidth = '';
            });
        }

        // When playback ends, reset
        player.on('ended', function () {
            playerContainer.style.maxWidth = '286px';
            player.currentTime(0);
            videoModal.style.display = 'none';
        });
    });

    // Open modal when a video item is clicked
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        item.addEventListener('click', function () {
            const videoId = item.getAttribute('data-video-id');
            // Dynamically update the video ID in the player
            player.src({ type: 'video/mp4', src: `https://players.brightcove.net/1752604059001/tUnbGgd07_default/index.html?videoId=${videoId}` });
            videoModal.style.display = 'flex';
            player.play();
        });
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        videoModal.style.display = 'none';
        player.pause();
    });

    // Close modal when clicking outside the video
    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            player.pause();
        }
    });
});