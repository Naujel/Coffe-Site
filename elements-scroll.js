export const elementsScroll = (selectores) => {
    const elementos = document.querySelectorAll(selectores)
    
    const revisarElementos = (arregloElementos) => {
        arregloElementos.forEach(elemento => {
            if (elemento.isIntersecting){
                elemento.target.classList.add("show")
            }
        })
    }
    const observador = new IntersectionObserver(revisarElementos, {
        root: null,
        threshold: 0.7
    })

    elementos.forEach(elemento => {
        observador.observe(elemento)
    })
}