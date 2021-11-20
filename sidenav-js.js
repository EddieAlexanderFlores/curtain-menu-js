// ==========   Sidenav   ==========
/**
 * Adds click events to menu icons (hamburger and close) and to all side navigation menu links.
 */
 function addSidenavClickEvents() {
    // Get element objects and save them to respective variables.
    const sidenav = document.getElementById("sidenav-container");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const links = document.getElementsByClassName("sidenav-links");

    // Add click events to menu icons (hamburger and close).
    menuIcon.addEventListener("click", () => openSidenav(sidenav));    // When clicked, open side navigation.
    closeIcon.addEventListener("click", () => closeSidenav(sidenav));  // When clicked, close side navigation.

    // All click events to all the side navigation menu links.
    for (const element of links) {
        element.addEventListener("click", () => closeSidenav(sidenav));  // When clicked, close side navigation.
    }
}

/**
 * Opens the side navigation with curtain animation.
 * @param sidenav The sidenav element object.
 */
function openSidenav(sidenav) {
    // When sidenav is visible, set non-scrolling capabalities to body element.
    document.getElementById("body").style.overflowY = "hidden";

    // Animate sidenav.
    sidenav.style.visibility = "visible";
    sidenav.style.transform = "translateX(0vw)";
    sidenav.style.transition = ".3s";
}

/**
 * Closes the side navigation with curtain animation.
 * @param sidenav The sidenav element object.
 */
function closeSidenav(sidenav) {
    // When sidenav is hidden, set scrolling capabilities to body element.
    document.getElementById("body").style.overflowY = "scroll";

    // Animate sidenav.
    sidenav.style.visibility = "hidden";
    sidenav.style.transform = "translateX(100vw)";
}

// Call this function to add click events to menu icons and sidenav menu links.
addSidenavClickEvents();
