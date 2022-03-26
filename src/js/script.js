let path = ""

if (window.location.pathname.includes("products")) {
    path = "../"
}

// header and footer
const header = `
<header>
    <section>
        <a href="${path}index.html" id="logo" class="icon-text">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            <p>PCSpace</p>
        </a>
        <div id="search-field">
            <input type="text" placeholder="Search" spellcheck="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
        </div>
        <div id="icons">
            <a href="${path}profile.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            </a>
            <a href="${path}cart.html" id="cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
                <div id="cart-notice"></div>
            </a>
        </div>
        <nav>
            <ul id="nav-links">
                <li>
                    <a href="${path}system-builder.html" class="icon-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.33 3.271a3.5 3.5 0 0 1 4.472 4.474L20.647 18.59l-2.122 2.121L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-7.071 7.778l2.121 2.122-4.95 4.95A1.5 1.5 0 0 1 3.58 17.99l.097-.107 4.95-4.95z"/></svg>
                        System Builder
                    </a>
                </li>
                <li>
                    <a href="${path}build-guides.html" class="icon-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
                        Build Guides
                    </a>
                </li>
                <li class="browse-products icon-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 18h12V6H6v12zm8 2h-4v2H8v-2H5a1 1 0 0 1-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 0 1 1-1h3V2h2v2h4V2h2v2h3a1 1 0 0 1 1 1v3h2v2h-2v4h2v2h-2v3a1 1 0 0 1-1 1h-3v2h-2v-2zM8 8h8v8H8V8z"/></svg>
                    Browse Products
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
                </li>
            </ul>
        </nav>
    </section>
    <section class="browse-products">
        <a href="${path}products/cpu.html">
            <img src="${path}images/components/cpu.png">
            CPU
        </a>
        <a href="${path}products/cpu-cooler.html">
            <img src="${path}images/components/cpu-cooler.png">
            CPU Cooler
        </a>
        <a href="${path}products/motherboard.html">
            <img src="${path}images/components/motherboard.png">
            Motherboard
        </a>
        <a href="${path}products/memory.html">
            <img src="${path}images/components/memory.png">
            Memory
        </a>
        <a href="${path}products/storage.html">
            <img src="${path}images/components/storage.png">
            Storage
        </a>
        <a href="${path}products/graphics-card.html">
            <img src="${path}images/components/graphics-card.png">
            Graphics Card
        </a>
        <a href="${path}products/power-supply.html">
            <img src="${path}images/components/power-supply.png">
            Power Supply
        </a>
        <a href="${path}products/case.html">
            <img src="${path}images/components/case.png">
            Case
        </a>
    </section>
</header>`

const footer = `
<footer>
    <p>&copy; 2022 PCSpace</p>
</footer>`

const main = document.querySelector("main")

main.insertAdjacentHTML("beforebegin", header)
main.insertAdjacentHTML("afterend", footer)

// check if left click
function leftClick(event) {
	if (event.button === 0) {
		return true
	}

	return false
}

// input
const input = document.querySelector("#search-field input")
const cross = document.querySelector("#search-field svg:last-of-type")

input.onkeydown = (event) => {
    if (event.key === "Enter") {
        window.location.assign(`${path}search.html?search=${input.value}`)
    }
}

input.onmousedown = () => {
	cross.style.display = "inline"
}

cross.onmousedown = (event) => {
	if (leftClick(event)) {
		event.stopPropagation()
		event.preventDefault()
		input.value = ""
		input.focus()
	}
}

// browse products drop-down
const browseProductsLink = document.querySelector("li.browse-products")
const browseProductsSection = document.querySelector("section.browse-products")

browseProductsLink.onmousedown = (event) => {
	if (leftClick(event)) {
		browseProductsLink.classList.toggle("active")
    	browseProductsSection.classList.toggle("active")
	}
}

browseProductsSection.onmousedown = (event) => {
    event.stopPropagation()
}

document.body.onmousedown = (event) => {
    if (event.target !== input) {
        cross.style.display = "none"
    }

	if (event.target !== browseProductsLink && !browseProductsLink.contains(event.target)) {
		browseProductsLink.classList.remove("active")
        browseProductsSection.classList.remove("active")
	}
}

// update cart
const cartNotice = document.querySelector("#cart-notice")

function getCartQuantity() {
	let cartQuantity = 0

    Object.keys(localStorage).forEach((product) => {
		if (product === "loginStatus") {
			return
		}

        cartQuantity += parseInt(localStorage.getItem(product))
    })

	return cartQuantity
}

function updateCart() {
    if (getCartQuantity() > 0) {
        cartNotice.innerText = getCartQuantity()
        cartNotice.style.display = "flex"
    } else {
        cartNotice.style.display = "none"
    }
}

updateCart()
