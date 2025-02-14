// Music player features
const musicItems = [
    { title: "Play/Pause", description: "Users can play or pause the current song with a button." },
    { title: "Song Info", description: "Displays song title and artist." },
    { title: "Album Art", description: "Shows the album art of the current song." },
    { title: "Progress Bar", description: "Visualizes the playback position." },
    { title: "Time Display", description: "Shows current time and song duration." },
    { title: "Next/Previous", description: "Users can navigate to the next or previous song." },
    { title: "Playlist", description: "Manages an array of predefined songs." },
    { title: "Real-Time Progress", description: "Progress bar updates as the song plays." },
    { title: "Clickable Progress", description: "Allows jumping to a specific part of the song." },
    { title: "End of Song", description: "Automatically plays the next song when one ends." }
];

// Quote generator features
const quoteItems = [
    { title: "Random Quote Generation", description: "Provides a randomly selected quote from a vast collection using an API to fetch a variety of quotes, ensuring a diverse range of inspirations." },
    { title: "Loading Indicator", description: "Displays a loading animation while fetching new quotes, showing a loader while hiding the quote container during the fetch process." },
    { title: "Author Attribution", description: "Displays the name of the author along with the quote, ensuring that every quote comes with proper attribution." },
    { title: "New Quote Button", description: "Users can get a new random quote by clicking a button, which triggers the fetch and display of a new quote on button click." },
    { title: "Tweet Quote", description: "Allows users to share quotes on Twitter by opening a pre-filled tweet containing the quote and author." },
    { title: "Local Quotes Fallback", description: "In case of API failure, provides quotes from a local database by utilizing a local quotes array as a backup." }
];

// Function to create a dropdown
function createDropdown(containerId, items) {
    const container = document.getElementById(containerId);
    const header = container.querySelector('.smooth-dropdown-header');
    const content = container.querySelector('.smooth-dropdown-content');
    const icon = container.querySelector('.smooth-dropdown-icon');
    const list = container.querySelector('.smooth-dropdown-list');
    
    // Populate items
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'smooth-dropdown-item';
        li.innerHTML = `
            <span class="smooth-dropdown-item-title">${item.title}:</span>
            ${item.description}
        `;
        list.appendChild(li);
    });

    // Add click handler
    header.addEventListener('click', () => {
        content.classList.toggle('dropdown-active');
        icon.classList.toggle('dropdown-active');
    });
}

// Initialize both dropdowns
document.addEventListener('DOMContentLoaded', () => {
    createDropdown('musicFeatures', musicItems);
    createDropdown('quoteFeatures', quoteItems);
});