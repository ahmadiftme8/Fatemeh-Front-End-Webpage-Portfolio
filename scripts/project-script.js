


const projectsData = [
    {
        id: 1,
        name: "Label Generator",
        date: "2024-10-19",
        author: "Fatemeh",
        image: "./images/projects/labelgenerator.jpg",
        viewLink: "https://github.com/ahmadiftme8/LabelGenerator/blob/main/.github/workflows/static.yml",
        codeLink: "https://github.com/ahmadiftme8/LabelGenerator",
        technologies: ["Python", "Pdl", "Panda"],
        features: [
            { title: "Excel Data Integration", description: "Integration with pandas for Excel data processing, enabling bulk label generation from structured spreadsheet input." },
            { title: "Error Management System", description: "Robust error handling and logging system using Python's logging module for production-ready operation." },
            { title: "Modular Architecture", description: "Modular class-based architecture with clear separation of concerns and initialization phases." },
            { title: "RTL Text Support", description: "Support for right-to-left (RTL) text rendering using arabic-reshaper and bidi libraries for Persian language compatibility." },
            { title: "High-Resolution Output", description: "High-resolution image generation using PIL (Python Imaging Library) with configurable DPI settings." },
            { title: "Dynamic Text Layout", description: "Dynamic text wrapping and centering algorithms for optimal multiline text layout." },
            { title: "File Management", description: "Clean file handling with automatic directory creation and input validation." },
            { title: "Font Resource Handling", description: "Resource management for font loading with appropriate error handling." },
            { title: "Batch Processing", description: "Efficient batch processing capabilities for generating multiple labels from Excel data." },
            { title: "Configurable Dimensions", description: "Configurable image dimensions and text positioning using DPI-aware measurements." },
            { title: "Input Sanitization", description: "Input sanitization and filename cleaning for safe file operations." }
        ]
    },
    {
        id: 2,
        name: "Music Player",
        date: "2024-05-01",
        author: "Fatemeh",
        image: "./images/projects/testpic.jpg",
        viewLink: "https://ahmadiftme8.github.io/music-player/",
        codeLink: "https://github.com/ahmadiftme8/music-player",
        technologies: ["HTML & CSS", "Javascript"],
        features: [
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
        ]
    },
    {
        id: 3,
        name: "ToDo List",
        date: "2024-04-12",
        author: "Fatemeh",
        image: "./images/projects/03.jpg",
        viewLink: "https://ahmadiftme8.github.io/theToDoList/",
        codeLink: "https://github.com/ahmadiftme8/theToDoList",
        technologies: ["HTML & CSS", "Javascript"],
        features: [
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
        ]
    },
    {
        id: 4,
        name: "Rock Scissors Paper Game",
        date: "2024-03-12",
        author: "Fatemeh",
        image: "./images/projects/04.jpg",
        viewLink: "https://ahmadiftme8.github.io/rspgame/",
        codeLink: "https://github.com/ahmadiftme8/rspgame",
        technologies: ["HTML & CSS", "Javascript"],
        features: [
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
        ]
    },
    {
        id: 5,
        name: "Countdown",
        date: "2024-05-02",
        author: "Fatemeh",
        image: "./images/projects/countdown.jpg",
        viewLink: "https://ahmadiftme8.github.io/custom-countdown/",
        codeLink: "https://github.com/ahmadiftme8/custom-countdown?tab=readme-ov-file",
        technologies: ["HTML & CSS", "Javascript"],
        features: [
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
        ]
    },
    {
        id: 6,
        name: "Bookmark Keeper",
        date: "2024-05-05",
        author: "Fatemeh",
        image: "./images/projects/bookkeeper.jpg",
        viewLink: "https://ahmadiftme8.github.io/book-keeper/",
        codeLink: "https://github.com/ahmadiftme8/book-keeper",
        technologies: ["HTML & CSS", "Javascript"],
        features: [
            { title: "Modal for Adding Bookmarks", description: "Features a modal window for entering website details, with focus management and click-outside closing functionality." },
            { title: "Form Validation", description: "Implements comprehensive validation for website names and URLs, using regular expressions to ensure valid URL formats." },
            { title: "LocalStorage Integration", description: "Stores and retrieves bookmarks from browser's localStorage, maintaining data persistence across sessions." },
            { title: "Bookmark Display", description: "Shows bookmarks in a list format with favicons and clickable links that open in new tabs." },
            { title: "Bookmark Creation", description: "Dynamically creates and appends bookmarks to the container while simultaneously updating localStorage." },
            { title: "Delete Functionality", description: "Provides delete icons for each bookmark with click handlers to remove entries from both display and storage." },
            { title: "Responsive Design", description: "Features a mobile-optimized layout that adapts seamlessly to different screen sizes." },
            { title: "Dynamic Building", description: "Constructs bookmark entries dynamically using JavaScript DOM manipulation for efficient updates." },
            { title: "Quick Add Button", description: "Includes a prominent '+' button for rapid access to the bookmark creation modal." },
            { title: "Accessibility Features", description: "Incorporates screen reader support with appropriate title attributes for SVG elements." },
            { title: "Icon Management", description: "Handles favicon loading from bookmarked websites' URLs for visual recognition." },
            { title: "Precise Deletion", description: "Implements URL-based bookmark deletion for accurate removal of specific entries." }
        ]
    },
    {
        id: 7,
        name: "Math Sprint Game",
        date: "2024-05-20",
        author: "Fatemeh",
        image: "./images/projects/mathspinnergame.jpg",
        viewLink: "https://ahmadiftme8.github.io/math-sprint-game/",
        codeLink: "https://github.com/ahmadiftme8/math-sprint-game",
        technologies: ["HTML & CSS", "Javascript"],
        features: [
            { title: "Responsive UI", description: "Optimized for mobile-first design, ensuring smooth gameplay on various screen sizes." },
            { title: "Dynamic Equation Generation", description: "Randomized math equations challenge users, maintaining engagement." },
            { title: "Timer and Scoring System", description: "Accurate timer tracks responses; wrong answers add penalty seconds, impacting scores." },
            { title: "Local Storage", description: "Stores the best score locally for persistent progress tracking." },
            { title: "Game State Transitions", description: "Smooth transitions between splash screen, gameplay, and results." },
            { title: "Penalty Handling", description: "Incorrect answers increase difficulty with penalty time added to the timer." },
            { title: "UI Feedback", description: "Real-time feedback on user responses, enhancing the interactive experience." },
            { title: "Modular Code Structure", description: "Clean, reusable functions for easy scalability and maintenance." },
            { title: "Progressive Difficulty", description: "Gradually increasing challenges to keep users engaged and motivated." }
        ]
    },
    {
        id: 8,
        name: "Quote Generator",
        date: "2024-04-24",
        author: "Fatemeh",
        image: "./images/projects/02.jpg",
        viewLink: "https://ahmadiftme8.github.io/quote-generator/",
        codeLink: "https://github.com/ahmadiftme8/quote-generator",
        technologies: ["HTML & CSS", "Javascript"],
        features: [
            { title: "Random Quote Generation", description: "Provides a randomly selected quote from a vast collection using an API to fetch a variety of quotes, ensuring a diverse range of inspirations." },
            { title: "Loading Indicator", description: "Displays a loading animation while fetching new quotes, showing a loader while hiding the quote container during the fetch process." },
            { title: "Author Attribution", description: "Displays the name of the author along with the quote, ensuring that every quote comes with proper attribution." },
            { title: "New Quote Button", description: "Users can get a new random quote by clicking a button, which triggers the fetch and display of a new quote on button click." },
            { title: "Tweet Quote", description: "Allows users to share quotes on Twitter by opening a pre-filled tweet containing the quote and author." },
            { title: "Local Quotes Fallback", description: "In case of API failure, provides quotes from a local database by utilizing a local quotes array as a backup." }
        ]
    },
    {
        id: 9,
        name: "Form Validator",
        date: "2024-05-18",
        author: "Fatemeh",
        image: "./images/projects/signupForm.jpg",
        viewLink: "https://ahmadiftme8.github.io/ftme-form-validator/",
        codeLink: "https://github.com/ahmadiftme8/ftme-form-validator",
        technologies: ["HTML & CSS", "Javascript"],
        features: [
            { title: "Full Name Input Field", description: "Requires users to input a name with a minimum of 3 characters and a maximum of 100 characters." },
            { title: "Phone Number Input Field", description: "Accepts phone numbers following a specific pattern (Iranian phone numbers starting with '09' or '+989') and validates the input format." },
            { title: "Email Input Field", description: "Users must enter a valid email address, and the input field uses HTML's email validation." },
            { title: "Website URL Input Field", description: "Requires users to input a valid URL with the necessary format (e.g., 'http://example.com')." },
            { title: "Password Field", description: "Validates password strength with the requirement of at least 8 characters, including one uppercase letter, one lowercase letter, and one number." },
            { title: "Confirm Password Field", description: "Ensures that the confirmation password matches the original password and performs the same validation as the password field." },
            { title: "Form Validation Using Constraint API", description: "Validates all form inputs before submission to check if fields are correctly filled out." },
            { title: "Password Match Validation", description: "Compares the 'Password' and 'Confirm Password' fields to ensure they match, with visual error indicators when they don't match." },
            { title: "Error and Success Messages", description: "Displays color-coded messages with corresponding border colors to indicate form validation status." },
            { title: "Submit Button", description: "The form includes a 'Register' button that triggers form validation and processes form data submission if all fields are correctly filled out." },
            { title: "Form Data Handling", description: "Upon successful form submission, the user's information (name, phone, email, website, password) is logged to the console." },
            { title: "Event Handling", description: "Prevents the default form submission behavior using an event listener, and processes form data only if the form is valid." }
        ]
    }
];


// Function to generate HTML for each project
function generateProjectHTML(project) {
    return `
        <section class="project-container">
            <div class="project-header">
                <span class="project-name">${project.name}</span>
                <div>
                    <span class="project-date">${project.date}</span>
                    <span class="project-auther">auther: ${project.author}</span>
                </div>
            </div>
            <div class="project-whole-content">
                <div class="image-and-tech-part">
                    <div class="project-img-and-btn-container">
                        <img src="${project.image}" alt="${project.name}">
                        <div class="project-btn-container">
                            <button onclick="window.open('${project.viewLink}', '_blank')">View</button>
                            <button  onclick="window.open('${project.codeLink}', '_blank')" >code</button>
                        </div>
                    </div>
                    <div class="project-tech-container">
                        <span class="project-tech-title">technologies that used...</span>
                        <ul class="project-tech-list">
                            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="features-part">
                    <div class="features-title">Features</div>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li><span class="project-feature-title">${feature.title} : </span> ${feature.description}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </section>
    `;
}

// Function to render all projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = projectsData.map(project => generateProjectHTML(project)).join('');
}

// Call the render function when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);

// Example of how to load data from a JSON file
// This can be used instead of the hardcoded projectsData

/* async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading projects:', error);
        return [];
    }
}

async function initProjects() {
    const projectsData = await loadProjects();
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = projectsData.map(project => generateProjectHTML(project)).join('');
}

document.addEventListener('DOMContentLoaded', initProjects); */

