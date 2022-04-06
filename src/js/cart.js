function loadItems() {
	Object.keys(localStorage).forEach((item) => {
		if (item === "loginStatus") {
			return
		}

		let product = products[item]
		let quantity = parseInt(localStorage.getItem(item))
		let price = product.price * quantity

		let itemRow = `
		<tr id="${product.id}">
			<td>
				<div class="product-column">
					<img src="images/products/${product.component}/${product.image}">
					<aside>
						<p>${product.name}</p>
						<p>$${product.price}</p>
						<button class="remove">Remove</button>
					</aside>
				</div>
			</td>
			<td>
				<div class="quantity-column">
					<div class="arrows">
						<svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12"><path d="M 0,12 L 24,12 L12,0 L 0,12"/></svg>
						<svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12"><path d="M 0,0 L 24,0 L12,12 L 0,0"/></svg>
					</div>
					<p>${quantity}</p>
				</div>
			</td>
			<td>
				<div class="subtotal-column">$${price}</div>
			</td>
		</tr>`

		document.querySelector("tbody").innerHTML += itemRow
	})
}

function updateTotal() {
	document.querySelector("#checkout span").innerText = "$" + getCartTotal()
}

function cartDisplay() {
	if (getCartQuantity() === 0) {
		document.querySelector("table").style.display = "none"
		document.querySelector("main").innerHTML += "<h2>Your cart is currently empty.</h2>"
	}
}

loadItems()
updateTotal()
cartDisplay()

const arrows = document.querySelectorAll(".arrows svg")

arrows.forEach((arrow) => {
	arrow.onmousedown = (event) => {
		if (leftClick(event)) {
			let itemRow = arrow.parentElement.parentElement.parentElement.parentElement
			let itemId = itemRow.id
			let item = products[parseInt(itemId)]
			let quantity = parseInt(localStorage.getItem(itemId))
			let subTotalContainer = itemRow.getElementsByClassName("subtotal-column")[0]

			if (arrow.classList.contains("up")) {
				quantity += 1
			} else if (arrow.classList.contains("down")) {
				quantity -= 1
			}

			if (quantity > 0) {
				localStorage.setItem(itemId, quantity)
				subTotalContainer.innerText = "$" + item.price * quantity
				arrow.parentElement.parentElement.children[1].innerText = quantity
			} else {
				localStorage.removeItem(itemId)
				itemRow.remove()
				cartDisplay()
			}

			updateCart()
			updateTotal()
		}
	}
})

const removeButtons = document.querySelectorAll(".remove")

removeButtons.forEach((button) => {
	button.onclick = () => {
		let itemRow = button.parentElement.parentElement.parentElement.parentElement
		let itemId = itemRow.id

		localStorage.removeItem(itemId)
		itemRow.remove()

		updateCart()
		updateTotal()
		cartDisplay()
	}
})
