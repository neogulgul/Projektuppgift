const components = ["CPU", "CPU Cooler", "Motherboard", "Memory", "Storage", "Graphics Card", "Power Supply", "Case"]
const tbody = document.querySelector("tbody")

components.forEach((component) => {
	let a = "A"

	if (["Memory", "Storage"].includes(component)) {
		a = ""
	}

	tbody.innerHTML += `
	<tr id="${component}">
		<td>
			<div class="component-column">
				${component}
			</div>
		</td>
		<td colspan="2">
			<div>
				<a href="products/${component.toLowerCase().replace(" ", "-")}.html?selection">
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
						Choose ${a} ${component}
					</button>
				</a>
			</div>
		</td>
	</tr>`
})

const rows = document.querySelectorAll("tbody tr")

Object.keys(localStorage).forEach((item) => {
	rows.forEach((row) => {
		if (row.id.toLowerCase().replace(" ", "-") === item) {
			itemId = localStorage.getItem(item)
			row.children[1].remove()
			row.innerHTML += `
			<td>
				<div class="selection-column">
					<img src="images/products/${row.id.toLowerCase().replace(" ", "-")}/${products[itemId].image}">
					${products[itemId].name}
				</div>
			</td>
			<td>
				<div class="price-column">
					$${products[itemId].price}
					<svg class="remove" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"/></svg>
				</div>
			</td>`
		}
	})
})

const removeButtons = document.querySelectorAll(".remove")

removeButtons.forEach((button) => {
	button.onclick = () => {
		const row = button.parentElement.parentElement.parentElement
		const component = row.id.toLowerCase().replace(" ", "-")
		localStorage.removeItem(component)
		row.children[1].remove()
		row.children[1].remove()

		let a = "A"

		if (["Memory", "Storage"].includes(component)) {
			a = ""
		}

		row.innerHTML += `
		<td colspan="2">
			<a href="products/${component}.html?selection">
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
					Choose ${a} ${row.id}
				</button>
			</a>
		</td>`
	}
})

const addButton = document.querySelector("tfoot button")

addButton.onclick = () => {
	let parts = 0

	Object.keys(localStorage).forEach((item) => {
		components.forEach((component) => {
			if (component.toLowerCase().replace(" ", "-") === item) {
				parts++
				let itemId = localStorage.getItem(item)
				let quantity

				if (localStorage.getItem(itemId) === null) {
					quantity = 1
				} else {
					quantity = parseInt(localStorage.getItem(itemId)) + 1
				}

				localStorage.setItem(itemId, quantity)
				localStorage.removeItem(item)

				return
			}
		})
	})

	if (parts > 0) {
		window.location.assign("cart.html")
	}
}
