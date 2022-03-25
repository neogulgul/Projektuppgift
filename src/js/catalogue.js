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

for (i = 0; i < products.length; i++) {
    products[i].id = i
}
