let count = 1;
document.getElementById("radio1").checked = true;

setInterval(nextImage, 10000);

function nextImage() {
    count = count === 1 ? 2 : 1;
    document.getElementById("radio" + count).checked = true;
}
