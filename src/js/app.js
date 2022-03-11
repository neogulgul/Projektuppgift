let browseProducts = document.querySelector("li.browse-products")
let browseProductsSection = document.querySelector("section.browse-products")

browseProducts.onclick = () => {
    browseProducts.classList.toggle("active")
    browseProductsSection.classList.toggle("active")
}
