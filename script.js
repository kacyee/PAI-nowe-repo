const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 0;
function makeSliderMove() {
    idx++;

    if (idx > img.length - 2) {
        idx = 0;
    }
    console.log(idx);
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(makeSliderMove, 2000);