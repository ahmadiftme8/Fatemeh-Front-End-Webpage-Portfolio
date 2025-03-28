




/*  ======view btn======= */



// Define your project links in an object where keys are project titles
const projectLinks = {
    'Label Generator': './projects.html#1',
    'Music Player': './projects.html#2',
    'Quote Generator': './projects.html#8',
    'ToDo List': './projects.html#3',
    'Rock Scissors Paper': './projects.html#4',
    'Fancy Count Down': './projects.html#5',
    'Math Sprint Game': './projects.html#7',
    'BookMark Keeper': './projects.html#6',
    'Sign Up Form': './projects.html#9'
};








// Function to add buttons to all project items
function addProjectButtons() {
    // Get all project containers
    const projectContainers = document.querySelectorAll('.p-title-and-date-container');
    
    projectContainers.forEach(container => {
        // Get the project title
        const titleElement = container.querySelector('h4');
        const projectTitle = titleElement.textContent;
        
        // Create a wrapper for title and date
        const titleDateGroup = document.createElement('div');
        titleDateGroup.className = 'title-date-group';
        
        // Move title and date into the wrapper
        const dateElement = container.querySelector('.project-date');
        titleDateGroup.appendChild(titleElement.cloneNode(true));
        titleDateGroup.appendChild(dateElement.cloneNode(true));
        
        // Clear the container
        container.innerHTML = '';
        
        // Add the title-date group back
        container.appendChild(titleDateGroup);
        
        // Create and add the button
        if (projectLinks[projectTitle]) {
            const button = document.createElement('a');
            button.href = projectLinks[projectTitle];
            button.className = 'project-link-btn';
            button.target = '_blank';
            const svgArrow = document.createElement('span');
            svgArrow.className='spanSvgArrowContainer'
            svgArrow.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.75 16.4648C7.5625 16.4648 7.37598 16.3955 7.23047 16.2549C6.93164 15.9678 6.92188 15.4932 7.20996 15.1953L12.209 9.99803L7.22265 4.81444C6.93456 4.51659 6.94433 4.04198 7.24316 3.75487C7.53906 3.46776 8.0166 3.47557 8.30273 3.77538L13.79 9.4785C14.0703 9.76854 14.0703 10.2275 13.79 10.5176L8.29003 16.2344C8.14355 16.3877 7.94629 16.4648 7.75 16.4648Z" fill="white"></path></svg>'

            container.appendChild(button);
            button.appendChild(svgArrow)
        }
    });
}


// Function to make thumbnails clickable
function makeThumbnailsClickable() {
    // Get all project items (thumbnails)
    const projectItems = document.querySelectorAll('.p-item');

    projectItems.forEach(item => {
        // Add click event listener to each p-item
        item.addEventListener('click', function() {
            // Get the project title from the h4 inside this p-item
            const titleElement = item.querySelector('h4');
            const projectTitle = titleElement.textContent;

            // Get the corresponding URL from projectLinks
            const destinationUrl = projectLinks[projectTitle];

            // Navigate to the URL if it exists
            if (destinationUrl) {
                window.location.href = destinationUrl;
            } else {
                console.log(`No link found for project: ${projectTitle}`);
            }
        });
    });
}

// Run the function when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    addProjectButtons(); // Your existing function
    makeThumbnailsClickable(); // New function
});






