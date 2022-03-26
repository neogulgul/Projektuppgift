const searchSpan = document.querySelector("#banner span")

const star = `<svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>`
const starEmpty = `<svg class="star empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>`

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
})

let searchValue = params.search

input.value = searchValue
searchSpan.innerText = `"${searchValue}"`

for (i = 0; i < products.length; i++) {
	let product = products[i]
	let productInfo = product.name + product.manufacturer + product.component

	if (productInfo.toLowerCase().includes(searchValue.toLowerCase()) && searchValue !== "") {
		let rating = ``
		for (let i = 0; i < 5; i++) {
			if (i < product.rating) {
				rating += star
			} else {
				rating += starEmpty
			}
		}

		productMarkup = `
		<tr id="${product.id}">
			<td>
				<div class="name-section">
					<img src="images/products/${product.component}/${product.image}">
					<p>${product.name}</p>
				</div>
			</td>
			<td>
				<div class="rating-section">
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

		document.querySelector("tbody").innerHTML += productMarkup
	}
}

const buttons = document.querySelectorAll("tr button")

buttons.forEach((button) => {
	button.onclick = () => {
		let chosenProductId = button.parentElement.parentElement.parentElement.id
		if (localStorage.getItem(chosenProductId) === null) {
			localStorage.setItem(chosenProductId, 1)
		} else {
			let chosenProductQuantity = parseInt(localStorage.getItem(chosenProductId))
			localStorage.setItem(chosenProductId, chosenProductQuantity + 1)
		}

		updateCart()
	}
})
