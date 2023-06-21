let num = 0

const setWebFull = e => {
    console.log(e);
    const dom = document.createElement("div")
    dom.style = 'overflow:auto;height:100vh;color:white'
    const resizeObserver = new ResizeObserver(entries => {
        num++
        if (num >3) {

            console.log(num);
            dom.innerHTML=num
            if (!document.webkitIsFullScreen) {
                num = 0
                setTimeout(() => {
                    resizeObserver.disconnect()
                }, 50)
            }
        }
    });
    dom.appendChild(e)
    resizeObserver.observe(dom)
    document.body.appendChild(dom)
    if (e.requestFullscreen) {
        dom.requestFullscreen();
    } else if (e.mozRequestFullScreen) {
        dom.mozRequestFullScreen();
    } else if (e.webkitRequestFullscreen) {
        dom.webkitRequestFullscreen();
    } else if (e.msRequestFullscreen) {
        dom.msRequestFullscreen();
    }
};

export {
    setWebFull
}
