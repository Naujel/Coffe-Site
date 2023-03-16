const slides = document.querySelector(".slides")
const prevButton = document.querySelector(".prev-button")
const nextButton = document.querySelector(".next-button")

export const moverDerechaResp = (primeraImagen) => {
    nextButton.classList.add("disabled")
    slides.style.marginLeft = "-100%"
    slides.style.transition = "margin-left 1s"
     
    setTimeout(() => {
        slides.style.transition = "none"
        slides.insertAdjacentElement("beforeend", primeraImagen)
        slides.style.marginLeft = "-50%"
        nextButton.classList.remove("disabled")
    }, 1000)
}

export const moverIzquierdaResp = (ultimaImagen) => {
    prevButton.classList.add("disabled")
    slides.style.marginLeft = "0%"
    slides.style.transition = "margin-left 1s"
    
    setTimeout(() => {
        slides.style.transition = "none"
        slides.insertAdjacentElement("afterbegin", ultimaImagen)
        slides.style.marginLeft = "-50%"
        prevButton.classList.remove("disabled")
    }, 1000)
}