const products = [
    // CPUs
    {
        name: "AMD Ryzen 5 5600X",
        image: "amd-ryzen-5-5600x.png",
        manufacturer: "AMD",
        component: "cpu",
        rating: 5,
        price: 230
    },
    {
        name: "AMD Ryzen 7 5800X",
        image: "amd-ryzen-7-5800x.png",
        manufacturer: "AMD",
        component: "cpu",
        rating: 4,
        price: 345
    },
    {
        name: "AMD Ryzen 9 5900X",
        image: "amd-ryzen-9-5900x.png",
        manufacturer: "AMD",
        component: "cpu",
        rating: 5,
        price: 440
    },
    {
        name: "Intel Core i5 12600K",
        image: "intel-core-i5-12600k.png",
        manufacturer: "Intel",
        component: "cpu",
        rating: 5,
        price: 280
    },
    {
        name: "Intel Core i7 12700K",
        image: "intel-core-i7-12700k.png",
        manufacturer: "Intel",
        component: "cpu",
        rating: 5,
        price: 385
    },
    {
        name: "Intel Core i9 12900K",
        image: "intel-core-i9-12900k.png",
        manufacturer: "Intel",
        component: "cpu",
        rating: 4,
        price: 610
    },
    // CPU Coolers
    {
        name: "Noctua NH-D15",
        image: "noctua-nh-d15.png",
        manufacturer: "Noctua",
        component: "cpu-cooler",
        rating: 5,
        price: 100
    },
    {
        name: "Noctua NH-D15 chromax.black",
        image: "noctua-nh-d15-chromax.black.png",
        manufacturer: "Noctua",
        component: "cpu-cooler",
        rating: 5,
        price: 110
    },
    {
        name: "Corsair iCUE H100i ELITE CAPELLIX",
        image: "corsair-icue-h100i-elite-capellix.png",
        manufacturer: "Corsair",
        component: "cpu-cooler",
        rating: 4,
        price: 110
    },
    {
        name: "Corsair iCUE H150i ELITE CAPELLIX",
        image: "corsair-icue-h150i-elite-capellix.png",
        manufacturer: "Corsair",
        component: "cpu-cooler",
        rating: 4,
        price: 160
    },
    {
        name: "NZXT Kraken Z73",
        image: "nzxt-kraken-z73.png",
        manufacturer: "NZXT",
        component: "cpu-cooler",
        rating: 5,
        price: 255
    },
    // Motherboards
    {
        name: "",
        image: "../images/products/",
        manufacturer: "",
        component: "motherboard",
        rating: 5,
        price: 0
    },
    // Memory
    {
        name: "",
        image: "../images/products/",
        manufacturer: "",
        component: "memory",
        rating: 5,
        price: 0
    },
    // Storage
    {
        name: "",
        image: "../images/products/",
        manufacturer: "",
        component: "storage",
        rating: 5,
        price: 0
    },
    // Graphics cards
    {
        name: "",
        image: "../images/products/",
        manufacturer: "",
        component: "graphics-card",
        rating: 5,
        price: 0
    },
    // Power Supplies
    {
        name: "",
        image: "../images/products/",
        manufacturer: "",
        component: "power-supply",
        rating: 5,
        price: 0
    },
    // Cases
    {
        name: "",
        image: "../images/products/",
        manufacturer: "",
        component: "case",
        rating: 5,
        price: 0
    },
]

let component = window.location.pathname.split("/src/components/")[1].split(".html")[0]

let bannerComponent = component.replace("cpu", "CPU").replace("-", " ")

let a = "a"

if (component === "memory" || component === "storage") {
    a = ""
}

const star = `<svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>`
const starEmpty = `<svg class="star empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>`

main.innerHTML = `
<section id="banner">Choose ${a} ${bannerComponent}</section>
<section id="main-section">
    <aside>
        <div id="part-list"></div>
        <div id="filters">
            <div id="price-filter">
                <h3>Price</h3>
                <input type="range">
            </div>
            <div id="manufacturer-filter">
                <h3>Manufacturer</h3>
            </div>
            <div id="rating-filter">
                <h3>Rating</h3>
            </div>
        </div>
    </aside>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</section>`

// todo: make functions out of some of these for loops to make shit more readable

let ratingFilter = document.querySelector("#rating-filter")

for (let i = 0; i < 5; i++) {
    let stars = 5 - i
    let allStars = ``

    for (let j = 0; j < 5; j++) {
        if (j < stars) {
            allStars += star
        } else {
            allStars += starEmpty
        }
    }

    ratingFilter.innerHTML += `
    <div class="checkbox-container">
        <input type="checkbox">
        <div>${allStars}</div>
    </div>`
}

let sidebar = document.querySelector("aside")
let tableBody = document.querySelector("tbody")

let manufacturerFilter = document.querySelector("#manufacturer-filter")

let componentManufacturers = []

products.forEach((product) => {
    if (product.component === component) {
        if (componentManufacturers.includes(product.manufacturer) !== true) {
            componentManufacturers.push(product.manufacturer)
            manufacturerFilter.innerHTML += `
            <div class="checkbox-container">
                <input type="checkbox">
                <p>${product.manufacturer}</p>
            </div>`
        }

        let rating = ``
        for (let i = 0; i < 5; i++) {
            if (i < product.rating) {
                rating += star
            } else {
                rating += starEmpty
            }
        }
        productMarkup = `
        <tr>
            <td>
                <div>
                    <img src="../images/products/${component}/${product.image}">
                    <p>${product.name}</p>
                </div>
            </td>
            <td>
                <div>
                    ${rating}
                </div>
            </td>
            <td>
                <div class="price-section">
                    <p>$${product.price}</p>
                    <button>Add</button>
                </div>
            </td>
        </tr>`

        tableBody.innerHTML += productMarkup
    }
})

tableBody.onclick = (event) => { // todo: add to item to cart when click on button
    if (event.target.tagName.toLowerCase() === "button") {
        console.log("button clicked")
    }
}
