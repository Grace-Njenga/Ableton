// JavaScript to toggle the menu on click of the toggle button
const primaryNav = document.querySelector(".nav");
const navToogle = document.querySelector(".menu");
navToogle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToogle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToogle.setAttribute("aria-expanded", false);
    }
});

// JAVASCRIPT FOR THE DROPDOWN FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
    const moreToggle = document.getElementById("more-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const rotateIcon = document.querySelector(".rotate-icon");

    // Only add toggle functionality for larger screens
    if (window.innerWidth >= 1024) {
        moreToggle.addEventListener("click", function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle("visible");
            rotateIcon.classList.toggle("rotated");

            document.addEventListener("click", function outsideClick(e) {
                if (
                    !moreToggle.contains(e.target) &&
                    !dropdownMenu.contains(e.target)
                ) {
                    dropdownMenu.classList.remove("visible");
                    rotateIcon.classList.remove("rotated");
                    document.removeEventListener("click", outsideClick);
                }
            });
        });
    } else {
        // On mobile, keep dropdown always visible
        dropdownMenu.classList.add("visible");
        moreToggle.style.display = "none"; // Hide the more toggle on mobile
    }

    // Handle window resize
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 1024) {
            // Desktop behavior
            moreToggle.style.display = "";
            if (!dropdownMenu.classList.contains("visible")) {
                dropdownMenu.classList.remove("visible");
                rotateIcon.classList.remove("rotated");
            }
        } else {
            // Mobile behavior
            dropdownMenu.classList.add("visible");
            moreToggle.style.display = "none";
        }
    });
});
