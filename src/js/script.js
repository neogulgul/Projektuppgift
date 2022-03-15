// input
let input = document.querySelector("#search-field input")
let cross = document.querySelector("#search-field svg:last-of-type")

input.addEventListener("focus", () => {
    cross.style.display = "inline"
})

input.onclick = (event) => {
    event.stopPropagation()
}

cross.onclick = (event) => {
    input.value = ""
    input.focus()
    event.stopPropagation()
}
// cart notice
let cartNotice = document.querySelector("#cart div")
console.log(cartNotice.innerText)
if (cartNotice.innerText !== "") {
    cartNotice.style.display = "flex"
}

// browse products drop-down
let browseProductsLink = document.querySelector("li.browse-products")
let browseProductsSection = document.querySelector("section.browse-products")

browseProductsLink.onclick = () => {
    browseProductsLink.classList.toggle("active")
    browseProductsSection.classList.toggle("active")
}

browseProductsSection.onclick = (event) => {
    event.stopPropagation()
}

document.body.onclick = (event) => {
    if (cross.style.display = "inline") {
        cross.style.display = "none"
    }

    if (browseProductsSection.classList.contains("active") && event.target !== browseProductsLink) {
        browseProductsLink.classList.remove("active")
        browseProductsSection.classList.remove("active")
    }
}
