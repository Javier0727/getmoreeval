'use strict'
document.querySelector(".boton").addEventListener("mouseout", () => {
    setTimeout(() => {
        document.querySelector(".boton img").classList.add("imgblanco");
    }, 400);
});
document.querySelector(".boton").addEventListener("mouseover", () => {
    document.querySelector(".boton img").classList.remove("imgblanco");
});
document.querySelector(".botonn").addEventListener("mouseout", () => {
    setTimeout(() => {
        document.querySelector(".botonn img").classList.remove("imgblanco");
    }, 400);
});
document.querySelector(".botonn").addEventListener("mouseover", () => {
    document.querySelector(".botonn img").classList.add("imgblanco");
});


