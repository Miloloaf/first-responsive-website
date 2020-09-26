

function firstImageDown() {
    document.getElementById("grid-cell-1-description").style.opacity = "1";

}

function firstImageUp() {
    document.getElementById("grid-cell-1-description").style.opacity = "0";
}

document.getElementById("grid-cell-1-description").addEventListener("mousedown", firstImageDown);
document.getElementById("grid-cell-1-description").addEventListener("mouseup", firstImageUp);
document.getElementById("grid-cell-1-description").addEventListener("touchstart", firstImageDown);
document.getElementById("grid-cell-1-description").addEventListener("touchend", firstImageUp);