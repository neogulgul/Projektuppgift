const component = window.location.pathname.split("/src/components/")[1].split(".html")[0]

const star = `<svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>`
const starEmpty = `<svg class="star empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>`

function addToProductsMain() {
    let a = "a"

    if (component === "memory" || component === "storage") {
        a = ""
    }

    main.innerHTML = `
    <section id="banner">Choose ${a} ${component.replace("-", " ").replace("cpu", "CPU")}</section>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Rating</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody></tbody>
	</table>`
}

function createProducts() {
	let svgAdd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`

	if (window.location.href.includes("selection")) {
		svgAdd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.33 3.271a3.5 3.5 0 0 1 4.254 4.963l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132l1.414 1.414-5.303 5.303a1 1 0 0 1-1.492-1.327l.078-.087 5.303-5.303z"/></svg>`
	}

    products.forEach((product) => {
        if (product.component === component) {
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
                    <div class="name-column">
                        <img src="../images/products/${product.component}/${product.image}">
                        ${product.name}
                    </div>
                </td>
                <td>
                    <div class="rating-column">
                        ${rating}
                    </div>
                </td>
                <td>
                    <div class="price-column">
                        $${product.price}
                        <button>
							${svgAdd}
							Add
						</button>
                    </div>
                </td>
            </tr>`
    
            document.querySelector("tbody").innerHTML += productMarkup
        }
    })
}

addToProductsMain()
createProducts()

let buttons = document.querySelectorAll("tr button")

buttons.forEach((button) => {
	button.onclick = () => {
		let chosenProductId = button.parentElement.parentElement.parentElement.id

		if (window.location.href.includes("selection")) {
			localStorage.setItem(component, chosenProductId)
			window.location.assign("../system-builder.html")
		} else {
			let quantity

			if (localStorage.getItem(chosenProductId) === null) {
				quantity = 1
			} else {
				quantity = parseInt(localStorage.getItem(chosenProductId)) + 1
			}

			localStorage.setItem(chosenProductId, quantity)
		}

		updateCart()
	}
})
