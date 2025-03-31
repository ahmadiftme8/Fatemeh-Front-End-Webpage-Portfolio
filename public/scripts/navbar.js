// navbar.js
document.addEventListener("DOMContentLoaded", () => {
    // Find the navbar element
    const navbar = document.getElementById("navbar");
    if (!navbar) return; // Exit if navbar element is not found

    // Generate the navbar HTML
    navbar.innerHTML = `
        <div class="hamburger" id="hamburger">☰</div>
        <div class="item-container" id="item-container">
            <div class="n-item">
                <a href="index.html">Home</a>
            </div>
            <div class="n-item">
                <a href="#social-media">Contact</a>
            </div>
            <div class="n-item dropdown">
                <a href="#" class="dropbtn">Portfolios</a>
                <div class="dropdown-content" id="dropdown-content">
                    <a href="coding-projects-parent.html">Coding</a>
                    <a target="_blank" href="graphic-design.html">Graphics</a>
                    <a target="_blank" href="video-editing.html">Videos</a>
                </div>
            </div>
        </div>
    `;

    // Highlight active page
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".n-item a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === currentPath) {
            link.parentElement.classList.add("active");
        }
    });

    // Add interactivity for the hamburger menu
    const hamburger = document.getElementById("hamburger");
    const itemContainer = document.getElementById("item-container");

    hamburger.addEventListener("click", () => {
        itemContainer.classList.toggle("active");
        hamburger.classList.toggle("active");
        hamburger.textContent = itemContainer.classList.contains("active") ? "✕" : "☰";
    });

    // Add interactivity for the dropdown on mobile
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.getElementById("dropdown-content");

    dropbtn.addEventListener("click", (e) => {
        if (window.innerWidth <= 480) { // Only on mobile
            e.preventDefault();
            dropdownContent.classList.toggle("active");
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && itemContainer.classList.contains("active")) {
            itemContainer.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.textContent = "☰";
            dropdownContent.classList.remove("active"); // Close dropdown as well
        }
    });

    // Close mobile menu when resizing to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 480 && itemContainer.classList.contains("active")) {
            itemContainer.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.textContent = "☰";
            dropdownContent.classList.remove("active");
        }
    });
});