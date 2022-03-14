// input
let input = document.querySelector("#search-field input")
let cross = document.querySelector("#search-field svg:last-of-type")

input.onkeydown = (event) => {
    console.log(getComputedStyle(cross).display)
    if (getComputedStyle(cross).display === "none") {
        cross.style.display = "inline"
    }
}

cross.onclick = () => { // todo: make it so you can continue typing after hitting the cross
    input.value = ""
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
    if (input.value === "") {
        cross.style.display = "none"
    }

    if (browseProductsSection.classList.contains("active") && event.target !== browseProductsLink) {
        browseProductsLink.classList.remove("active")
        browseProductsSection.classList.remove("active")
    }
}
