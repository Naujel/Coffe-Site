export const carrusel = () => {
    const slides = document.querySelector(".slides")

    const prevButton = document.querySelector(".prev-button")
    const nextButton = document.querySelector(".next-button")

    const moverDerecha = () => {
        let primeraImagen = document.querySelectorAll(".slide-img")[0]
        nextButton.classList.add("disabled")
        slides.style.marginLeft = "-50%"
        slides.style.transition = "margin-left 1s"
        
        setTimeout(() => {
            slides.style.transition = "none"
            slides.insertAdjacentElement("beforeend", primeraImagen)
            slides.style.marginLeft = "-25%"
            nextButton.classList.remove("disabled")
        }, 1000)
    }

    const moverIzquierda = () => {
        let ultimaImagen = document.querySelectorAll(".slide-img")[document.querySelectorAll(".slide-img").length - 1]
        prevButton.classList.add("disabled")
        slides.style.marginLeft = "0%"
        slides.style.transition = "margin-left 1s"
        
        setTimeout(() => {
            slides.style.transition = "none"
            slides.insertAdjacentElement("afterbegin", ultimaImagen)
            slides.style.marginLeft = "-25%"
            prevButton.classList.remove("disabled")
        }, 1000)
    }

    let sliderInfinito = setInterval(moverDerecha, 5000)

    slides.addEventListener("mouseenter", () => {
        clearInterval(sliderInfinito)
        sliderInfinito = null
    })

    slides.addEventListener("mouseleave", () => {
        if (!sliderInfinito){
            sliderInfinito = setInterval(moverDerecha, 5000)
        }
    })
    
    document.addEventListener("click", e => {
        if (e.target === nextButton && !nextButton.classList.contains("disabled") && !prevButton.classList.contains("disabled")){
            e.preventDefault()
            clearInterval(sliderInfinito)
            sliderInfinito = setInterval(moverDerecha, 5000)
            moverDerecha()
        }

        if (e.target === prevButton && !nextButton.classList.contains("disabled") && !prevButton.classList.contains("disabled")){
            e.preventDefault()
            clearInterval(sliderInfinito)
            sliderInfinito = setInterval(moverDerecha, 5000)
            moverIzquierda()
        }
    })
}