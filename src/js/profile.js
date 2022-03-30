function ifDateInstanceLengthEqualsOne(dateInstance) {
	if (dateInstance.toString().length === 1) {
		return "0" + dateInstance
	}

	return dateInstance
}

function lastVisit() {
	const date = new Date()

	let day = date.getDate()
	day = ifDateInstanceLengthEqualsOne(day)

	let month = date.getMonth() + 1
	month = ifDateInstanceLengthEqualsOne(month)

	let year = date.getFullYear()

	let hours = date.getHours()
	hours = ifDateInstanceLengthEqualsOne(hours)

	let minutes = date.getMinutes()
	minutes = ifDateInstanceLengthEqualsOne(minutes)

	const lastVisit = `${year}-${month}-${day} ${hours}:${minutes}`

	document.querySelector("#information p:last-of-type").innerText = lastVisit
}

lastVisit()

if (localStorage.getItem("loginStatus") === null) {
	document.querySelector("#profile").style.display = "none"
	document.querySelector("main").innerHTML += `
	<h2>You are currently not logged in.</h2>
	<a id="log-in" href="login.html">Log in</a>`
} else {
	document.querySelector("#picture p").innerText = localStorage.getItem("loginStatus")
}

const logOut = document.querySelector("#log-out")

logOut.onclick = () => {
	localStorage.removeItem("loginStatus")
}
