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
    if (browseProductsSection.classList.contains("active") && event.target !== browseProductsLink) {
        browseProductsLink.classList.remove("active")
        browseProductsSection.classList.remove("active")
    }
}
