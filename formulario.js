export const validarFormulario = () => {

    const checkInput= (e, selector, regexp) => {
        const apellidoPattern = new RegExp(regexp)
        const span = document.querySelector(selector)

        if (apellidoPattern.test(e.target.value) & e.target.value !== ""){
            e.target.style.border = ""
            return span.classList.remove("invalid")
        }
        e.target.style.border = "solid rgb(255, 63, 63) 2px"
        span.classList.add("invalid")
    }
    document.addEventListener("keyup", e => {
        switch (e.target.name) {
            case "name":
                checkInput(e, ".error-name", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)
                break
            case "second-name":
                checkInput(e, ".error-second-name", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)
                break
            case "email":
                checkInput(e, ".error-email", /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)
                break
            case "comment":
                checkInput(e, ".error-comment", /^.{1,255}$/)
                break
            default:
                break
        }
    })
}

const inputs = document.querySelectorAll("input[required]")
const spanFieldError = document.querySelector(".field-error")

document.addEventListener("click", e => {
    if (e.target.matches(".submit")){
        e.preventDefault()
        
        inputs.forEach(input => {
            if (input.value === ""){
                spanFieldError.classList.add("invalid")
            }
        })
    }
})

const inputSubmit = document.querySelector(".submit")
inputSubmit.addEventListener("blur", e => {
    spanFieldError.classList.remove("invalid")
})

const textarea = document.querySelector("textarea")
textarea.addEventListener("blur", e => {
    console.log(textarea.value)
    if (textarea.value === ""){
        document.querySelector(`.error-${textarea.name}`).classList.remove("invalid")
        textarea.style.border = ""
    }
})

inputs.forEach(input => {
    input.addEventListener("blur", e => {
        const span = document.querySelector(`.error-${input.name}`)
        if (input.matches(".formulario input")){
            if (input.value === ""){
                span.classList.remove("invalid")
                input.style.border = ""
            }
        }
    })
    
})
