if (window.matchMedia("(min-width: 768px)").matches) {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById("mouse-circle");

    document.onmousemove = (x) => {
        mousePosX = x.pageX;
        mousePosY = x.pageY;
    };

    let delay = 5,
        CercleMousePosX = 0,
        CercleMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        CercleMousePosX += (mousePosX - CercleMousePosX) / delay;
        CercleMousePosY += (mousePosY - CercleMousePosY) / delay;

        mouseCircle.style.top = CercleMousePosY + "px";
        mouseCircle.style.left = CercleMousePosX + "px";
    }
    delayMouseFollow();
}
