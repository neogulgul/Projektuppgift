const products = [
    // CPUs
    {
        name: "AMD Ryzen 5 5600X",
        image: "amd-ryzen-5-5600x.png",
        brand: "AMD",
        component: "cpu",
        price: 230
    },
    {
        name: "AMD Ryzen 7 5800X",
        image: "amd-ryzen-7-5800x.png",
        brand: "AMD",
        component: "cpu",
        price: 345
    },
    {
        name: "AMD Ryzen 9 5900X",
        image: "amd-ryzen-9-5900x.png",
        brand: "AMD",
        component: "cpu",
        price: 440
    },
    {
        name: "Intel Core i5 12600K",
        image: "intel-core-i5-12600k.png",
        brand: "Intel",
        component: "cpu",
        price: 280
    },
    {
        name: "Intel Core i7 12700K",
        image: "intel-core-i7-12700k.png",
        brand: "Intel",
        component: "cpu",
        price: 385
    },
    {
        name: "Intel Core i9 12900K",
        image: "intel-core-i9-12900k.png",
        brand: "Intel",
        component: "cpu",
        price: 610
    },
    // CPU Coolers
    {
        name: "Noctua NH-D15",
        image: "noctua-nh-d15.png",
        brand: "Noctua",
        component: "cpu-cooler",
        price: 100
    },
    {
        name: "Noctua NH-D15 chromax.black",
        image: "noctua-nh-d15-chromax.black.png",
        brand: "Noctua",
        component: "cpu-cooler",
        price: 110
    },
    {
        name: "Corsair iCUE H100i ELITE CAPELLIX",
        image: "corsair-icue-h100i-elite-capellix.png",
        brand: "Corsair",
        component: "cpu-cooler",
        price: 110
    },
    {
        name: "Corsair iCUE H150i ELITE CAPELLIX",
        image: "corsair-icue-h150i-elite-capellix.png",
        brand: "Corsair",
        component: "cpu-cooler",
        price: 160
    },
    {
        name: "NZXT Kraken Z73",
        image: "nzxt-kraken-z73.png",
        brand: "NZXT",
        component: "cpu-cooler",
        price: 255
    },
    // Motherboards
    {
        name: "",
        image: "../images/products/",
        brand: "",
        component: "motherboard",
        price: 0
    },
    // Memory
    {
        name: "",
        image: "../images/products/",
        brand: "",
        component: "memory",
        price: 0
    },
    // Storage
    {
        name: "",
        image: "../images/products/",
        brand: "",
        component: "storage",
        price: 0
    },
    // Graphics cards
    {
        name: "",
        image: "../images/products/",
        brand: "",
        component: "graphics-card",
        price: 0
    },
    // Power Supplies
    {
        name: "",
        image: "../images/products/",
        brand: "",
        component: "power-supply",
        price: 0
    },
    // Cases
    {
        name: "",
        image: "../images/products/",
        brand: "",
        component: "case",
        price: 0
    },
]

let component = window.location.pathname.split("/src/components/")[1].split(".html")[0]

main.innerHTML = `
<section id="components-banner">Choose a ${component}</section>
<section id="components-main-content">
    <aside id="components-sidebar"></aside>
    <div id="components-products"></div>
</section>`

let productsContainer = document.querySelector("#components-products")

products.forEach((product) => {
    if (product.component === component) {
        productsContainer.innerHTML += `<div class="product">
        <img src="../images/products/${component}/${product.image}">
        <p>${product.name}</p>
        <p>$${product.price}</p>
        <button>Add to cart</button>
        </div>`
    }
})

let counter = 0 // remove this later

productsContainer.onclick = (event) => { // fix this later to be able to add to cart
    if (event.target.tagName.toLowerCase() === "button") {
        if (counter === 0) {
            document.querySelector("#cart div").style.display = "flex"
        }
        counter += 1
        document.querySelector("#cart div").innerText = counter
    }
}
