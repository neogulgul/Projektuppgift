const tableBody = document.querySelector("tbody")
const subTotalMarkup = document.querySelector("#checkout span")

let subTotal = 0

Object.keys(localStorage).forEach((item) => {

    for (i = 0; i < products.length; i++) {
        if (products[i].name === item) {
            product = products[i]
        }
    }

    let quantity = parseInt(localStorage.getItem(item))
    let price = product.price * quantity

    subTotal += price

    let tableRow = `
    <tr>
        <td>
            <div>
                <img src="images/products/${product.component}/${product.image}">
                <div class="name-and-price">
                    <p>${product.name}</p>
                    <p>$${product.price}</p>
                </div>
            </div>
        </td>
        <td>x ${quantity}</td>
        <td>$${price}</td>
    </tr>`

    tableBody.innerHTML += tableRow
})

calcSubTotal()

function calcSubTotal() {
    subTotalMarkup.innerText = "$" + subTotal
}
