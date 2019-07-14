'use strict'
document.querySelector(".boton").addEventListener("mouseout", () => {
    setTimeout(() => {
        document.querySelector(".boton img").classList.add("imgblanco");
    }, 400);
});
document.querySelector(".boton").addEventListener("mouseover", () => {
   document.querySelector(".boton img").classList.remove("imgblanco");
});


