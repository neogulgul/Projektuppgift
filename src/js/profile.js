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

	document.querySelector("#information span:last-of-type").innerText = lastVisit
}

lastVisit()

if (localStorage.getItem("loginStatus") === null) {
	document.querySelector("#profile").style.display = "none"
	document.querySelector("main").innerHTML += `
	<h2>You are currently not logged in.</h2>
	<a id="log-in" href="login.html">
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"/></svg>
			Log in
		</button>
	</a>`
} else {
	document.querySelector("#picture span").innerText = localStorage.getItem("loginStatus")
}

const logOut = document.querySelector("#log-out")

logOut.onclick = () => {
	localStorage.removeItem("loginStatus")
}
