const products = [
    // CPUs
    {
        name: "",
        image: "",
        brand: "",
        component: "cpu",
        price: 0
    },
    // CPU Coolers
    {
        name: "",
        image: "",
        brand: "",
        component: "",
        price: 0
    },
    // Motherboards
    {
        name: "",
        image: "",
        brand: "",
        component: "",
        price: 0
    },
    // Memory
    {
        name: "",
        image: "",
        brand: "",
        component: "",
        price: 0
    },
    // Storage
    {
        name: "",
        image: "",
        brand: "",
        component: "",
        price: 0
    },
    // Graphics cards
    {
        name: "",
        image: "",
        brand: "",
        component: "",
        price: 0
    },
    // Power Supplies
    {
        name: "",
        image: "",
        brand: "",
        component: "",
        price: 0
    },
    // Cases
    {
        name: "",
        image: "",
        brand: "",
        component: "",
        price: 0
    },
]

let component = window.location.pathname.split("/src/components/")[1].split(".html")[0]

let main = document.querySelector("main")

let content = `
<section id="components-banner">Choose a ${component}</section>
<section>
    <aside id="components-sidebar"></aside>
    <div id="components-products"></div>
</section>`

main.innerHTML = content

console.log(component)
