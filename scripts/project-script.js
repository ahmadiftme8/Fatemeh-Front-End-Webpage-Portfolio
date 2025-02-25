
// Sample project data that could be loaded from a JSON file
const projectsData = [
    {
        id: 1,
        name: "Project Name",
        date: "2024 03 May",
        author: "Fatemeh",
        image: "M:\MY CODES\Fatemeh-Front-End-Webpage-Portfolio\images\projects\labelgenerator.jpg",
        viewLink: "#",
        codeLink: "#",
        technologies: ["Javascript", "pythone", "html and css"],
        features: [
            "Integration with pandas for Excel data processing, enabling bulk label generation from structured spreadsheet input",
            "Robust error handling and logging system using Python's logging module for production-ready operation",
            "Modular class-based architecture with clear separation of concerns and initialization phases",
            "Support for right-to-left (RTL) text rendering using arabic-reshaper and bidi libraries for Persian language compatibility",
            "High-resolution image generation using PIL (Python Imaging Library) with configurable DPI settings",
            "Dynamic text wrapping and centering algorithms for optimal multiline text layout",
            "Clean file handling with automatic directory creation and input validation",
            "Resource management for font loading with appropriate error handling",
            "Efficient batch processing capabilities for generating multiple labels from Excel data",
            "Configurable image dimensions and text positioning using DPI-aware measurements",
            "Input sanitization and filename cleaning for safe file operations"
        ]
    }
    // More projects can be added here
    
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
                            <button onclick="window.location.href='${project.viewLink}'">view</button>
                            <button onclick="window.location.href='${project.codeLink}'">code</button>
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
                    <div class="features-title">features</div>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
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

