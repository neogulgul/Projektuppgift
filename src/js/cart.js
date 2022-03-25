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
                    <button class="remove">Remove</button>
                </div>
            </div>
        </td>
        <td>
            <div class="quantity">
                <div class="arrows">
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12"><path d="M 0,12 L 24,12 L12,0 L 0,12"/></svg>
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12"><path d="M 0,0 L 24,0 L12,12 L 0,0"/></svg>
                </div>
                <p>${quantity}</p>
            </div>
        </td>
        <td class="price-total">$${price}</td>
    </tr>`

    tableBody.innerHTML += tableRow
})

updateSubTotal()

function updateSubTotal() {
    subTotalMarkup.innerText = "$" + subTotal
}

let arrows = document.querySelectorAll(".arrows svg")

arrows.forEach((arrow) => {
    arrow.onmousedown = (event) => {
        let targetElement = event.target
        if (event.target.tagName === "path") {
            targetElement = event.target.parentElement
        }

        let itemRow = targetElement.parentElement.parentElement.parentElement.parentElement
        let itemId = itemRow.id
        let item = products[parseInt(itemId)]
        let quantity = parseInt(localStorage.getItem(itemId))
        let priceTotal = itemRow.children[2]

        if (targetElement.classList.contains("up")) {
            quantity += 1
            priceTotal.innerText = "$" + item.price * quantity
            subTotal += item.price
        } else if (targetElement.classList.contains("down")) {
            quantity -= 1
            priceTotal.innerText = "$" + item.price * quantity
            subTotal -= item.price

            if (quantity === 0) {
                localStorage.removeItem(itemId)
                itemRow.remove()
            }
        }

        if (quantity > 0) {
            localStorage.setItem(itemId, quantity)
            targetElement.parentElement.parentElement.children[1].innerText = `${localStorage.getItem(itemId)}`
        }

        updateSubTotal()
        updateCart()
    }
})

let removeButtons = document.querySelectorAll(".remove")

removeButtons.forEach((button) => {
    button.onclick = (event) => {
        let itemRow = event.target.parentElement.parentElement.parentElement.parentElement
        let itemId = itemRow.id
        let item = products[parseInt(itemId)]
        let quantity = parseInt(localStorage.getItem(itemId))

        localStorage.removeItem(itemId)
        itemRow.remove()

        subTotal -= item.price * quantity

        updateSubTotal()
        updateCart()
    }
})
