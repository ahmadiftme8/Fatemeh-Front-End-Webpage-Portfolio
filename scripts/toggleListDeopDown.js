// Customizable items array
const dropdownItems = [
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

// Function to populate items
function populateDropdownItems(items) {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'smooth-dropdown-item';
        li.innerHTML = `
            <span class="smooth-dropdown-item-title">${item.title}:</span>
            ${item.description}
        `;
        itemsList.appendChild(li);
    });
}

// Initialize dropdown functionality
function initializeDropdown() {
    const dropdownHeader = document.querySelector('.smooth-dropdown-header');
    const dropdownContent = document.querySelector('.smooth-dropdown-content');
    const dropdownIcon = document.querySelector('.smooth-dropdown-icon');
    
    dropdownHeader.addEventListener('click', () => {
        dropdownContent.classList.toggle('dropdown-active');
        dropdownIcon.classList.toggle('dropdown-active');
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    populateDropdownItems(dropdownItems);
    initializeDropdown();
});