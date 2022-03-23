const tableBody = document.querySelector("tbody")

Object.keys(localStorage).forEach((product) => {
    

    let tableRow = `
    <tr>
        <td>${product}</td>
        <td>${localStorage.getItem(product)}</td>
        <td>0$</td>
    </tr>`

    tableBody.innerHTML += tableRow
})
