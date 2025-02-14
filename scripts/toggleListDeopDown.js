// count down project
const countDownItems = [
    { title: "User-Friendly Input", description: "Simple form for entering event title and date, with an intuitive date picker for easy selection." },
    { title: "Real-Time Countdown", description: "Dynamically updates and displays days, hours, minutes, and seconds until the event." },
    { title: "Reset Option", description: "Allows users to start a new countdown instantly with a reset button." },
    { title: "Completion Message", description: "Displays a message once the countdown reaches zero, indicating the event has arrived." },
    { title: "Date Validation", description: "Only future dates can be selected, preventing user errors." },
    { title: "Session Persistence", description: "Uses localStorage to save and restore countdowns across browser sessions." },
    { title: "Responsive Design", description: "Adapts smoothly to different screen sizes for an optimal user experience on all devices." },
    { title: "Optional Background Video", description: "Supports a dynamic video background for a modern aesthetic (optional feature)." },
    { title: "Error Handling", description: "Alerts users if no date is selected, preventing submission mistakes." },
    { title: "Seamless Transitions", description: "Smooth UI transitions between the form, countdown, and completion states." },
    { title: "Custom Time Units", description: "Calculates time accurately in days, hours, minutes, and seconds, using clear, reusable logic." },
    { title: "Modular Code", description: "Event listeners and logic are modular, making the code easy to maintain and extend." }
 ];



// rock sessiors paper game
const rspGameFeatureItems = [
    { title: "Player Choices", description: "Users can select rock, paper, or scissors by clicking buttons with corresponding emojis." },
    { title: "Computer Move", description: "The computer randomly selects its move (rock, paper, or scissors)." },
    { title: "Game Result", description: "The game compares the player's choice with the computer's move and displays the result (win, lose, or tie)." },
    { title: "Score Tracking", description: "The game tracks the number of wins, losses, and ties for the player." },
    { title: "Score Persistence", description: "The score is saved in the browser's local storage, so it persists even after page refreshes." },
    { title: "Audio Feedback", description: "An audio sound plays when the player selects a move (e.g., click sound on selecting rock, paper, or scissors)." },
    { title: "Auto Play Feature", description: "An 'Auto Play' button starts an automatic sequence where the computer selects a move every second, with the ability to stop at any time." },
    { title: "Reset Functionality", description: "A 'Reset Scores' button resets the win, loss, and tie counters to zero and updates the score display." },
    { title: "Live Score Display", description: "Shows current score with color-coded results - green for wins, red for losses, and white for ties." },
    { title: "Responsive Design", description: "Features a responsive layout that adjusts to different screen sizes with styled buttons and emoji images." },
    { title: "Interactive Elements", description: "Includes click-to-play functionality, move display using emojis, and result visibility toggling." },
    { title: "Local Storage", description: "Implements local storage for score persistence across sessions and page reloads." },
    { title: "Game Logic", description: "Handles move comparison based on traditional rules and updates results dynamically." },
    { title: "Visual Feedback", description: "Provides color changes and animations for enhanced user experience with a clean, responsive layout." }
];





// todo list features
const todoListItems = [
    { title: "Task Creation", description: "Easily add tasks with specific due dates and times." },
    { title: "Task Sorting", description: "Automatically sorts tasks by date and time for clear organization." },
    { title: "Completion Checkbox", description: "Mark tasks as complete with a simple checkbox, applying a strikethrough effect to checked tasks." },
    { title: "Task Deletion", description: "Quickly remove tasks with a one-click delete button." },
    { title: "Clear All Tasks", description: "Remove all tasks at once with a clear-all button." },
    { title: "Persistent Storage", description: "Saves tasks in local storage for consistency across sessions, ensuring data is retained even after a page refresh." },
    { title: "Date Restrictions", description: "Disables the selection of past dates to ensure tasks are scheduled appropriately." },
    { title: "Dark Mode and Light Mode", description: "Switch between dark and light modes for a comfortable viewing experience." },
    { title: "Responsive Design", description: "Works seamlessly across different devices and screen sizes." },
    { title: "Enter Key Addition", description: "Allows pressing the Enter key to add tasks quickly." }
];





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
    createDropdown('todoListFeatures', todoListItems);
    createDropdown('rspGameFeatures', rspGameFeatureItems);
    createDropdown('countDownFeatures', countDownItems);
});