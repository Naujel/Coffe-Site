export const scrollSpy = (secciones, enlaces) => {
    const navbarHeight = document.querySelector(".nav-container").offsetHeight
    
    const revisarSecciones = (arregloSecciones => {
        arregloSecciones.forEach(elemento => {
            const elementoId = elemento.target.getAttribute("id")
            if (elemento.isIntersecting){
                document.querySelector(`a[href="#${elementoId}"]`).classList.add("active")
            } else {
                document.querySelector(`a[href="#${elementoId}"]`).classList.remove("active")
            }
        })
    })
    
    let observador = new IntersectionObserver(revisarSecciones, {
        threshold: 0.4
    })

    secciones.forEach(seccion => observador.observe(seccion))

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", e => {
            e.preventDefault()
            const enlaceId = enlace.getAttribute("href")
            const seccion = document.querySelector(`${enlaceId}`)

            window.scrollTo({
                top: seccion.offsetTop - navbarHeight,
                behavior:"smooth",
            })
        })
    })
}