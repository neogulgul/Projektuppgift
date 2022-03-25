const tableBody = document.querySelector("tbody")
const subTotalMarkup = document.querySelector("#checkout span")

let subTotal = 0

Object.keys(localStorage).forEach((item) => {
    let product = products[item]

    let quantity = parseInt(localStorage.getItem(item))
    let price = product.price * quantity

    subTotal += price

    let tableRow = `
    <tr id="${product.id}">
        <td>
            <div>
                <img src="images/products/${product.component}/${product.image}">
                <div class="name-and-price">
                    <p>${product.name}</p>
                    <p>$${product.price}</p>
                </div>
            </div>
        </td>
        <td>
            <div class="quantity">
                <p>x ${quantity}</p>
                <div class="arrows">
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 8l6 6H6z"/></svg>
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 16l-6-6h12z"/></svg>
                </div>
            </div>
        </td>
        <td>$${price}</td>
    </tr>`

    tableBody.innerHTML += tableRow
})

calcSubTotal()

function calcSubTotal() {
    subTotalMarkup.innerText = "$" + subTotal
}

let arrows = document.querySelectorAll(".arrows svg")

arrows.forEach((arrow) => {
    arrow.onmousedown = (event) => {
        let itemRow = event.target.parentElement.parentElement.parentElement.parentElement
        let item = itemRow.id
        let quantity = parseInt(localStorage.getItem(item))

        if (event.target.classList.contains("up")) {
            quantity += 1
        } else if (event.target.classList.contains("down")) {
            quantity -= 1

            if (quantity === 0) {
                localStorage.removeItem(item)
                itemRow.remove()
            }
        }

        if (quantity > 0) {
            localStorage.setItem(item, quantity)
            event.target.parentElement.parentElement.children[0].innerText = `x ${localStorage.getItem(item)}`
        }

        updateCart()
    }
})
