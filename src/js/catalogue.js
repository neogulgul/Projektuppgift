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
        image: "",
        manufacturer: "",
        component: "motherboard",
        rating: 5,
        price: 0
    },
    // Memory
    {
        name: "",
        image: "",
        manufacturer: "",
        component: "memory",
        rating: 5,
        price: 0
    },
    // Storage
    {
        name: "",
        image: "",
        manufacturer: "",
        component: "storage",
        rating: 5,
        price: 0
    },
    // Graphics cards
    {
        name: "EVGA GeForce RTX 3090",
        image: "evga-geforce-rtx-3090.png",
        manufacturer: "EVGA",
        component: "graphics-card",
        rating: 5,
        price: 2000
    },
    {
        name: "GeForce RTX 3060 Ti Founders Edition",
        image: "geforce-rtx-3060-ti-founders-edition.png",
        manufacturer: "Nvidia",
        component: "graphics-card",
        rating: 5,
        price: 399
    },
    {
        name: "Gigabyte GeForce RTX 3070 Ti",
        image: "gigabyte-geforce-rtx-3070-ti.png",
        manufacturer: "Gigabyte",
        component: "graphics-card",
        rating: 5,
        price: 800
    },
    {
        name: "MSI GeForce RTX 3060",
        image: "msi-geforce-rtx-3060.png",
        manufacturer: "MSI",
        component: "graphics-card",
        rating: 4,
        price: 500
    },
    // Power Supplies
    {
        name: "",
        image: "",
        manufacturer: "",
        component: "power-supply",
        rating: 5,
        price: 0
    },
    // Cases
    {
        name: "Corsair 4000D Airflow",
        image: "corsair-4000d-airflow.png",
        manufacturer: "Corsair",
        component: "case",
        rating: 5,
        price: 105
    },
    {
        name: "Fractal Design Meshify C",
        image: "fractal-design-meshify-c.png",
        manufacturer: "Fractal Design",
        component: "case",
        rating: 4,
        price: 115
    },
    {
        name: "Lian Li O11 Dynamic",
        image: "lian-li-o11-dynamic.png",
        manufacturer: "Lian Li",
        component: "case",
        rating: 5,
        price: 170
    },
    {
        name: "NZXT H510",
        image: "nzxt-h510.png",
        manufacturer: "NZXT",
        component: "case",
        rating: 3,
        price: 90
    }
]

for (let i = 0; i < products.length; i++) {
    products[i].id = i
}
