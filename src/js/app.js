let modeSwitch = document.querySelector("#light-switch")

modeSwitch.onclick = () => {
    document.querySelector("#switch").classList.toggle("dark")
    if (document.querySelector("#switch").classList.contains("dark")) { // switch to dark mode
        document.documentElement.style.setProperty("--background", "#282a36")
        document.documentElement.style.setProperty("--foreground", "#f8f8f2")
    } else {                                                            // switch to light mode
        document.documentElement.style.setProperty("--background", "#fff")
        document.documentElement.style.setProperty("--foreground", "#000")
    }
}
