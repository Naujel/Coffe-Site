export const bannerShow = () => {
    const banner = document.querySelector(".banner")
    const observador = new IntersectionObserver((arreglo) => {
        if (arreglo[0].isIntersecting){
            banner.classList.add("show")
        }
    }, {
        threshold: 0
    })

    observador.observe(banner)
}