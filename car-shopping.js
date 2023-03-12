export const carritoDeCompras = () => {
    let carrito = {}
    window.addEventListener("DOMContentLoaded", () => {
        if (localStorage.getItem("carrito")){
            carrito = JSON.parse(localStorage.getItem("carrito"))
            pintarCarrito()
        }
    })
    
    const modalContainer = document.querySelector(".modal-container")
    document.addEventListener("click", e => {
        if (e.target.matches(".boton-compra")){
            addCarrito(e)
        }

        if (e.target.matches(".clear-button")){
            carrito = {}
            pintarCarrito()
            carCounter.classList.remove("added")
        }

        if (e.target.matches(".buy-button")){
            modalContainer.classList.add("show")
        }

        if (e.target.matches(".back-button")){
            modalContainer.classList.remove("show")
        }
        
        if (e.target.matches(".add-button")){
            const producto = carrito[e.target.dataset.id]
            producto.cantidad ++
            pintarCarrito()
        }

        if (e.target.matches(".sub-button")){
            const producto = carrito[e.target.dataset.id]
            producto.cantidad --
            if (producto.cantidad === 0){
                delete carrito[e.target.dataset.id]
                carCounter.classList.remove("added")
            }
            pintarCarrito()
        }
    })

    const addCarrito = (e) => {
        let objetoPadre = e.target.parentElement
        const producto = {
            id: objetoPadre.querySelector(".boton-compra").dataset.id,
            precio: objetoPadre.querySelector("p").textContent,
            nombre: objetoPadre.querySelector("h3").textContent,
            imagen: document.querySelector(".slide-img img").getAttribute("src", `media/coffe-product${objetoPadre.querySelector(".boton-compra").dataset.id}.png`),
            cantidad: 1
        }
        if (carrito.hasOwnProperty(producto.id)){
            producto.cantidad = carrito[producto.id].cantidad + 1
        }

        carrito[producto.id] = {...producto}
        pintarCarrito()
        e.stopPropagation()
    }

    const carProducts = document.querySelector(".car-products")
    const templateCarProducts = document.querySelector(".template-car-products").content
    const fragment = document.createDocumentFragment()
    const carFooter = document.querySelector(".car-footer")
    const templateCarFooter = document.querySelector(".template-car-footer").content
    const fragmentFooter = document.createDocumentFragment()
    const carCounter = document.querySelector(".car-counter")

    const pintarCarrito = () => {
        carProducts.innerHTML = ""
        Object.values(carrito).forEach(producto => {
            templateCarProducts.querySelector("img").setAttribute("src", `media/coffe-product${producto.id}.png`)
            templateCarProducts.querySelector("h3").textContent = producto.nombre
            templateCarProducts.querySelector("p").textContent = producto.precio
            templateCarProducts.querySelector(".counter").textContent = producto.cantidad
            templateCarProducts.querySelector(".add-button").dataset.id = producto.id
            templateCarProducts.querySelector(".sub-button").dataset.id = producto.id

            const clone = templateCarProducts.cloneNode(true)
            fragment.appendChild(clone)
        })
        carProducts.appendChild(fragment)
        pintarFooter()
        
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    const pintarFooter = () => {
        carFooter.innerHTML = ""
        carCounter.innerHTML = ""
        let totalPrecio = 0
        let totalCantidad = 0
        if (Object.keys(carrito).length === 0){
            carFooter.innerHTML = `
            <h3 style="text-align: center;" = >¡Actualmente tu carro está vacío!</h3>
            `
            return
        }
        for (const {cantidad, precio} of Object.values(carrito)) {
            totalCantidad += cantidad
            totalPrecio = totalPrecio + (cantidad*precio.replace("$", "").replace(".", "") )
            
        }
        
        carCounter.textContent = totalCantidad;
        if (totalCantidad > 0) {
            carCounter.classList.add("added");
        }
        
        
        templateCarFooter.querySelector("p").textContent = "$"+totalPrecio
        const clone = templateCarFooter.cloneNode(true)
        fragmentFooter.appendChild(clone)
        carFooter.appendChild(fragmentFooter)
        
    }
}
