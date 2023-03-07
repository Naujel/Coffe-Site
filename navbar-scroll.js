export const navbarScroll = () => {
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".nav-container")
        if (window.scrollY > navbar.offsetHeight){
            navbar.classList.add("nav-black")
        } else {
            navbar.classList.remove("nav-black")
        }
    })
}