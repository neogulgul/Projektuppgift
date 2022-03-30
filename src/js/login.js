const username = "Doggo"
const password = "password"

const anchors = document.querySelectorAll("#login-container a")
const autofill = document.querySelector("#autofill")
const usernameInput = document.querySelector('input[type="text"]')
const passwordInput = document.querySelector('input[type="password"]')
const textInputs = [usernameInput, passwordInput]
const submitInput = document.querySelector('input[type="submit"]')
const invalid = document.querySelector("#invalid")

function verifyCredentials() {
	if (usernameInput.value === username && passwordInput.value === password) {
		localStorage.setItem("loginStatus", username)
		window.location.assign("profile.html")
	} else {
		invalid.style.display = "inline"
	}
}

if (localStorage.getItem("loginStatus") === username) {
	document.querySelector("#login-container").style.display = "none"
	document.querySelector("main").innerHTML += "<h2>You are already logged in.</h2>"
}

textInputs.forEach((input) => {
	input.onkeydown = (event) => {
		if (event.key === "Enter") {
			verifyCredentials()
		}
	}
})

submitInput.onclick = () => {
	verifyCredentials()
}

anchors.forEach((anchor) => {
	anchor.onclick = () => {
		autofill.style.display = "flex"
	}
})

autofill.onclick = () => {
	usernameInput.value = username
	passwordInput.value = password
	passwordInput.focus()
}

const eye = document.querySelector("#eye")
const eyeOff = document.querySelector("#eye-off")

eye.onclick = () => {
	eye.style.display = "none"
	eyeOff.style.display = "inline"
	passwordInput.type = "password"
}

eyeOff.onclick = () => {
	eyeOff.style.display = "none"
	eye.style.display = "inline"
	passwordInput.type = "text"
}
