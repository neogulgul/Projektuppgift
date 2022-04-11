let path = ""

if (window.location.pathname.includes("/components/")) {
    path = "../"
}

let profile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`

if (localStorage.getItem("loginStatus") !== null) {
	profile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>`
}

// header and footer
const header = `
<header>
	<div id="logo-and-icons">
		<a href="${path}index.html" id="logo" class="icon-text">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
			PCSpace
		</a>
		<div id="icons">
			<a href="${path}profile.html">
				${profile}
			</a>
			<a href="${path}cart.html" id="cart">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
				<div id="cart-notice"></div>
			</a>
			<a id="hamburger">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>
			</a>
		</div>
	</div>
	<div id="search-and-navbar">
		<div id="search">
			<input type="text" placeholder="Search" spellcheck="false">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
		</div>
		<div id="navbar">
			<nav>
				<a href="${path}system-builder.html" class="icon-text">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.33 3.271a3.5 3.5 0 0 1 4.254 4.963l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132l1.414 1.414-5.303 5.303a1 1 0 0 1-1.492-1.327l.078-.087 5.303-5.303z"/></svg>
					System Builder
				</a>
				<a href="${path}build-guides.html" class="icon-text">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
					Build Guides
				</a>
				<a class="browse-components icon-text">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 18h12V6H6v12zm8 2h-4v2H8v-2H5a1 1 0 0 1-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 0 1 1-1h3V2h2v2h4V2h2v2h3a1 1 0 0 1 1 1v3h2v2h-2v4h2v2h-2v3a1 1 0 0 1-1 1h-3v2h-2v-2zM8 8h8v8H8V8z"/></svg>
					Browse Components
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
				</a>
			</nav>
			<div class="browse-components">
				<a href="${path}components/cpu.html" class="component-card">
					<img src="${path}images/components/cpu.png">
					CPU
				</a>
				<a href="${path}components/cpu-cooler.html" class="component-card">
					<img src="${path}images/components/cpu-cooler.png">
					CPU Cooler
				</a>
				<a href="${path}components/motherboard.html" class="component-card">
					<img src="${path}images/components/motherboard.png">
					Motherboard
				</a>
				<a href="${path}components/memory.html" class="component-card">
					<img src="${path}images/components/memory.png">
					Memory
				</a>
				<a href="${path}components/storage.html" class="component-card">
					<img src="${path}images/components/storage.png">
					Storage
				</a>
				<a href="${path}components/graphics-card.html" class="component-card">
					<img src="${path}images/components/graphics-card.png">
					Graphics Card
				</a>
				<a href="${path}components/power-supply.html" class="component-card">
					<img src="${path}images/components/power-supply.png">
					Power Supply
				</a>
				<a href="${path}components/case.html" class="component-card">
					<img src="${path}images/components/case.png">
					Case
				</a>
			</div>
		</div>
	</div>
</header>`

const footer = `
<footer>
	<section id="directory">
		<div class="directory-column">
			<h3>Site</h3>
			<a href="${path}index.html">Home</a>
			<a href="${path}system-builder.html">System Builder</a>
			<a href="${path}build-guides.html">Build Guides</a>
			<a href="${path}components.html">Components</a>
			<a href="${path}profile.html">Profile</a>
			<a href="${path}cart.html">Cart</a>
		</div>
		<div class="directory-column">
			<h3>Components</h3>
			<a href="${path}components/cpu.html">CPU</a>
			<a href="${path}components/cpu-cooler.html">CPU Cooler</a>
			<a href="${path}components/motherboard.html">Motherboard</a>
			<a href="${path}components/memory.html">Memory</a>
			<a href="${path}components/storage.html">Storage</a>
			<a href="${path}components/graphics-card.html">Graphics Card</a>
			<a href="${path}components/power-supply.html">Power Supply</a>
			<a href="${path}components/case.html">Case</a>
		</div>
	</section>
	<a href="${path}contact.html">
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"/></svg>
			Contact us
		</button>
	</a>
	Copyright &copy; 2022 PCSpace
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

// hamburger
const hamburger = document.querySelector("#hamburger")
const searchAndNavbar = document.querySelector("#search-and-navbar")

hamburger.onmousedown = (event) => {
	if (leftClick(event)) {
		hamburger.classList.toggle("active")
		searchAndNavbar.classList.toggle("active")
	}
}

// search
const input = document.querySelector("#search input")
const search = document.querySelector("#search svg:first-of-type")
const cross = document.querySelector("#search svg:last-of-type")

function assignSearch() {
	window.location.assign(`${path}search.html?search=${input.value}`)
}

input.onmousedown = () => {
	cross.style.display = "inline"
}

input.onkeydown = (event) => {
    if (event.key === "Enter") {
		assignSearch()
    }
}

search.onclick = () => {
	assignSearch()
}

cross.onmousedown = (event) => {
	if (leftClick(event)) {
		event.stopPropagation()
		event.preventDefault()
		input.value = ""
		input.focus()
	}
}

// browse components drop-down
const browseComponentsLink = document.querySelector("a.browse-components")
const browseComponentsContainer = document.querySelector("div.browse-components")

browseComponentsLink.onmousedown = (event) => {
	if (leftClick(event)) {
		browseComponentsLink.classList.toggle("active")
    	browseComponentsContainer.classList.toggle("active")
	}
}

browseComponentsContainer.onmousedown = (event) => {
    event.stopPropagation()
}

document.body.onmousedown = (event) => {
    if (event.target !== input) {
        cross.style.display = "none"
    }

	if (!hamburger.contains(event.target) && event.target !== searchAndNavbar && !searchAndNavbar.contains(event.target)) {
		hamburger.classList.remove("active")
		searchAndNavbar.classList.remove("active")
	}

	if (event.target !== browseComponentsLink && !browseComponentsLink.contains(event.target)) {
		browseComponentsLink.classList.remove("active")
        browseComponentsContainer.classList.remove("active")
	}
}

// get items in cart
function itemsInCart() {
	items = []

	Object.keys(localStorage).forEach((item) => {
		if (isNaN(parseInt(item))) {
			return
		}

		items.push(item)
	})

	return items
}

// update cart
const cartNotice = document.querySelector("#cart-notice")

function getCartQuantity() {
	let cartQuantity = 0

	const items = itemsInCart()

    items.forEach((item) => {
		cartQuantity += parseInt(localStorage.getItem(item))
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
