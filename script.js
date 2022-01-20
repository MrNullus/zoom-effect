const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove", onZoom);
container.addEventListener("mouseover", onZoom);
container.addEventListener("mouseleave", offZoom);

function onZoom(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    // console.log(x, y)

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2.5)";
}

function offZoom(e) {
    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)";
}

