document.addEventListener('contextmenu', event => event.preventDefault());

function toggleElementVisibility(objectId) {
    var startMenu = document.getElementById(objectId);
    if (startMenu.style.display === "none") {
        startMenu.style.display = "block";
    } else {
        startMenu.style.display = "none";
    }
}

