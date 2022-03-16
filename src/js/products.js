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
