export const menuHamburguesa = () => {
    const panelMenu = document.querySelector(".panel-menu")

    document.addEventListener("click", e => {
        if (e.target.matches(".hamburger") || e.target.matches(".hamburger *")){
            panelMenu.classList.toggle("show")
        }

        if (e.target.matches(".nav-responsive a") || e.target.id === "close-button"){
            panelMenu.classList.remove("show")
        }
    })
}

