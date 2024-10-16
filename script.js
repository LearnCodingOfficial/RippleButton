const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (e)=>{
    // console.log(e.pageX, e.pageY);
    // console.log(btnEl.offsetLeft, btnEl.offsetTop);

    const x = e.pageX - btnEl.offsetLeft;
    const y = e.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--posX", x + "px")
    btnEl.style.setProperty("--posY", y + "px")
})