const products = [
	// CPUs
	{
		name: "AMD Ryzen 5 5600X",
		image: "amd-ryzen-5-5600x.png",
		manufacturer: "AMD",
		component: "cpu",
		rating: 5,
		price: 230,
	},
	{
		name: "AMD Ryzen 7 5800X",
		image: "amd-ryzen-7-5800x.png",
		manufacturer: "AMD",
		component: "cpu",
		rating: 4,
		price: 345,
	},
	{
		name: "AMD Ryzen 9 5900X",
		image: "amd-ryzen-9-5900x.png",
		manufacturer: "AMD",
		component: "cpu",
		rating: 5,
		price: 440,
	},
	{
		name: "Intel Core i5 12600K",
		image: "intel-core-i5-12600k.png",
		manufacturer: "Intel",
		component: "cpu",
		rating: 5,
		price: 280,
	},
	{
		name: "Intel Core i7 12700K",
		image: "intel-core-i7-12700k.png",
		manufacturer: "Intel",
		component: "cpu",
		rating: 5,
		price: 385,
	},
	{
		name: "Intel Core i9 12900K",
		image: "intel-core-i9-12900k.png",
		manufacturer: "Intel",
		component: "cpu",
		rating: 4,
		price: 610,
	},
	// CPU Coolers
	{
		name: "Noctua NH-D15",
		image: "noctua-nh-d15.png",
		manufacturer: "Noctua",
		component: "cpu-cooler",
		rating: 5,
		price: 100,
	},
	{
		name: "Noctua NH-D15 chromax.black",
		image: "noctua-nh-d15-chromax.black.png",
		manufacturer: "Noctua",
		component: "cpu-cooler",
		rating: 5,
		price: 110,
	},
	{
		name: "Corsair iCUE H100i ELITE CAPELLIX",
		image: "corsair-icue-h100i-elite-capellix.png",
		manufacturer: "Corsair",
		component: "cpu-cooler",
		rating: 4,
		price: 110,
	},
	{
		name: "Corsair iCUE H150i ELITE CAPELLIX",
		image: "corsair-icue-h150i-elite-capellix.png",
		manufacturer: "Corsair",
		component: "cpu-cooler",
		rating: 4,
		price: 160,
	},
	{
		name: "NZXT Kraken Z73",
		image: "nzxt-kraken-z73.png",
		manufacturer: "NZXT",
		component: "cpu-cooler",
		rating: 5,
		price: 255,
	},
	// Motherboards
	{
		name: "Asus ROG STRIX B550-F GAMING",
		image: "asus-rog-strix-b550-f-gaming.png",
		manufacturer: "Asus",
		component: "motherboard",
		rating: 5,
		price: 195,
	},
	{
		name: "Asus TUF GAMING X570-PLUS",
		image: "asus-tuf-gaming-x570-plus.png",
		manufacturer: "Asus",
		component: "motherboard",
		rating: 4,
		price: 200,
	},
	{
		name: "Gigabyte Z590I AORUS ULTRA MINI",
		image: "gigabyte-z590i-aorus-ultra-mini.png",
		manufacturer: "Gigabyte",
		component: "motherboard",
		rating: 2,
		price: 270,
	},
	// Memory
	{
		name: "Corsair Vengeance 16 GB",
		image: "corsair-vengeance-16gb.png",
		manufacturer: "Corsair",
		component: "memory",
		rating: 5,
		price: 80,
	},
	{
		name: "Corsair Vengeance RGB 16 GB",
		image: "corsair-vengeance-rgb-16gb.png",
		manufacturer: "Corsair",
		component: "memory",
		rating: 5,
		price: 85,
	},
	{
		name: "G.Skill Trident Z RGB 16 GB",
		image: "g.skill-trident-z-rgb-16gb.png",
		manufacturer: "G.Skill",
		component: "memory",
		rating: 5,
		price: 95,
	},
	// Storage
	{
		name: "Samsung 870 QVO 2 TB",
		image: "samsung-870-qvo-2tb.png",
		manufacturer: "Samsung",
		component: "storage",
		rating: 5,
		price: 190,
	},
	{
		name: "Samsung 970 EVO Plus 1 TB",
		image: "samsung-970-evo-plus-1tb.png",
		manufacturer: "Samsung",
		component: "storage",
		rating: 5,
		price: 115,
	},
	{
		name: "Seagate Barracuda Compute 2 TB",
		image: "seagate-barracuda-compute-2tb.png",
		manufacturer: "Seagate",
		component: "storage",
		rating: 5,
		price: 45,
	},
	{
		name: "Western Digital Blue SN550 1 TB",
		image: "western-digital-blue-sn550-1tb.png",
		manufacturer: "Western Digital",
		component: "storage",
		rating: 5,
		price: 95,
	},
	// Graphics cards
	{
		name: "EVGA GeForce RTX 3090",
		image: "evga-geforce-rtx-3090.png",
		manufacturer: "EVGA",
		component: "graphics-card",
		rating: 5,
		price: 1500,
	},
	{
		name: "GeForce RTX 3060 Ti Founders Edition",
		image: "geforce-rtx-3060-ti-founders-edition.png",
		manufacturer: "Nvidia",
		component: "graphics-card",
		rating: 5,
		price: 400,
	},
	{
		name: "Gigabyte GeForce RTX 3070 Ti",
		image: "gigabyte-geforce-rtx-3070-ti.png",
		manufacturer: "Gigabyte",
		component: "graphics-card",
		rating: 5,
		price: 600,
	},
	{
		name: "MSI GeForce RTX 3060",
		image: "msi-geforce-rtx-3060.png",
		manufacturer: "MSI",
		component: "graphics-card",
		rating: 4,
		price: 330,
	},
	// Power Supplies
	{
		name: "Cooler Master V SFX 750 W",
		image: "cooler-master-v-sfx-750w.png",
		manufacturer: "Cooler Master",
		component: "power-supply",
		rating: 5,
		price: 115,
	},
	{
		name: "Corsair RMx 850 W",
		image: "corsair-rmx-850w.png",
		manufacturer: "Corsair",
		component: "power-supply",
		rating: 5,
		price: 135,
	},
	{
		name: "SeaSonic FOCUS Plus 550 W",
		image: "seasonic-focus-plus-550w.png",
		manufacturer: "SeaSonic",
		component: "power-supply",
		rating: 5,
		price: 85,
	},
	// Cases
	{
		name: "Corsair 4000D Airflow",
		image: "corsair-4000d-airflow.png",
		manufacturer: "Corsair",
		component: "case",
		rating: 5,
		price: 105,
	},
	{
		name: "Fractal Design Meshify C",
		image: "fractal-design-meshify-c.png",
		manufacturer: "Fractal Design",
		component: "case",
		rating: 4,
		price: 115,
	},
	{
		name: "Lian Li O11 Dynamic",
		image: "lian-li-o11-dynamic.png",
		manufacturer: "Lian Li",
		component: "case",
		rating: 5,
		price: 170,
	},
	{
		name: "NZXT H510",
		image: "nzxt-h510.png",
		manufacturer: "NZXT",
		component: "case",
		rating: 3,
		price: 90,
	},
]

for (let i = 0; i < products.length; i++) {
	products[i].id = i
}

function getCartTotal() {
	let sum = 0

	const items = itemsInCart()

	items.forEach((item) => {
		productPrice = products[item].price
		productQuantity = parseInt(localStorage.getItem(item))

		sum += productPrice * productQuantity
	})

	return sum
}
