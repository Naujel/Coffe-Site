export const menuCarro = () => {

    const panel = document.querySelector(".panel-shopping-car")
    document.addEventListener("click", e => {
        if (e.target.matches(".fa-cart-shopping")){
            panel.classList.add("is-active")
        }

        if (e.target.matches(".fa-xmark")){
            panel.classList.remove("is-active")
        }
})}