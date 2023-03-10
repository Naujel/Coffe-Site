export const fetchData = async () => {

    try {
        const res = await fetch("api.json")
        const data = await res.json()
    } catch (error){
        console.log(error)
    }
}

//const dataId = document.querySelector(".boton-compra").dataset.id

export const carritoDeCompras = () => {
    let carrito = {}
    document.addEventListener("click", e => {
    if (e.target.matches(".boton-compra")){
        addCarrito(e)
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

    const pintarCarrito = () => {
        carProducts.innerHTML = ""
        Object.values(carrito).forEach(producto => {
            templateCarProducts.querySelector("img").setAttribute("src", `media/coffe-product${producto.id}.png`)
            templateCarProducts.querySelector("h3").textContent = producto.nombre
            templateCarProducts.querySelector("p").textContent = producto.precio
            templateCarProducts.querySelector(".counter").textContent = producto.cantidad

            const clone = templateCarProducts.cloneNode(true)
            fragment.appendChild(clone)
        })
        carProducts.appendChild(fragment)
        pintarFooter()
    }

    const pintarFooter = () => {
        carFooter.innerHTML = ""
        let totalCantidad = 0
        let totalPrecio = 0
        for (const {cantidad, precio} of Object.values(carrito)) {
            totalCantidad += cantidad
            totalPrecio = totalPrecio + (cantidad*precio )
        }
        console.log(totalPrecio)
        
    }
}
