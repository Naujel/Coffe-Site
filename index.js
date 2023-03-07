import { elementsScroll } from "./elements-scroll.js";
import { navbarScroll } from "./navbar-scroll.js";
import { scrollSpy } from "./scroll-spy.js";
import { carrusel } from "./carrusel.js";

const secciones = document.querySelectorAll("section")
const enlaces = document.querySelectorAll(".enlace")

window.addEventListener("DOMContentLoaded", () => {
    scrollSpy(secciones, enlaces)
    navbarScroll()
    //bannerShow()
    elementsScroll(`.img-container, .text-container, .banner, .slider, .text-container2`)
    carrusel()
})
