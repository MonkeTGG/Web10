document.addEventListener('contextmenu', event => event.preventDefault());
startMenu.style.display = "block";
window.style.display = "block";

function toggleElementVisibility(objectId) {
    var startMenu = document.getElementById(objectId);
    if (startMenu.style.display === "none") {
        startMenu.style.display = "block";
    } else {
        startMenu.style.display = "none";
    }
}

function makeWindowDraggable(objectId) {
    var objectTitleBar = document.getElementById(objectId.concat("TitleBar"));
    var window = document.getElementById(objectId);
    let windowMoving = false;
    let offsetX, offsetY;
    let startX, startY
    window.style.left = "20px";
    window.style.top = "20px";
    
    objectTitleBar.addEventListener("mousedown", function(event) {
        windowMoving = true;
        offsetX = event.clientX;
        offsetY = event.clientY;
        startX = parseInt(window.style.left);
        startY = parseInt(window.style.top);
    });

    objectTitleBar.addEventListener("mousemove", function(event) {
        if (windowMoving === true) {
            window.style.left = startX + event.clientX - offsetX + "px";
            window.style.top = startY + event.clientY + - offsetY + "px";
        }
    });

    objectTitleBar.addEventListener("mouseup", function(event) {
        windowMoving = false;
    });
}