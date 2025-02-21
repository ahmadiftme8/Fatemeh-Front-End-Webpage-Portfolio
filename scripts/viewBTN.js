// Define your project links in an object where keys are project titles
const projectLinks = {
    'Label Generator': '/projects/label-generator',
    'Music Player': '/projects/music-player',
    'Quote Generator': '/projects/quote-generator',
    'ToDo List': '/projects/todo-list',
    'Rock Scissors Paper': '/projects/rock-scissors-paper',
    'Fancy Count Down': '/projects/countdown',
    'Math Sprint Game': '/projects/math-sprint',
    'BookMark Keeper': '/projects/bookmark-keeper',
    'Sign Up Form': '/projects/signup-form'
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
            const svgArrow = document.createElement('span');
            svgArrow.className='spanSvgArrowContainer'
            svgArrow.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.75 16.4648C7.5625 16.4648 7.37598 16.3955 7.23047 16.2549C6.93164 15.9678 6.92188 15.4932 7.20996 15.1953L12.209 9.99803L7.22265 4.81444C6.93456 4.51659 6.94433 4.04198 7.24316 3.75487C7.53906 3.46776 8.0166 3.47557 8.30273 3.77538L13.79 9.4785C14.0703 9.76854 14.0703 10.2275 13.79 10.5176L8.29003 16.2344C8.14355 16.3877 7.94629 16.4648 7.75 16.4648Z" fill="white"></path></svg>'

            container.appendChild(button);
            button.appendChild(svgArrow)
        }
    });
}

// Run the function when the document is loaded
document.addEventListener('DOMContentLoaded', addProjectButtons);