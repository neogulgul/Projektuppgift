let leftArrow = document.querySelector(".arrow:first-of-type")
let rightArrow = document.querySelector(".arrow:last-of-type")
let dotsContainer = document.querySelector("#dots")
let dots = document.querySelector("#dots").children
let heroImagesContainer = document.querySelector("#hero-slides")
let heroImages = document.querySelector("#hero-slides").children

// creating dots
for (let i = 0; i < heroImages.length; i++) {
    dotsContainer.innerHTML += `<div class="dot"></div>`
}
dots[0].classList.add("fill")

// defaulting to first image
let initialTranslation = 50 * heroImages.length - 50
let translation = initialTranslation
heroImagesContainer.style.transform = `translateX(${translation}vw)`

// min/max translation
let maxTranslation = 50 * heroImages.length + 50
let minTranslation = -maxTranslation

// image clones
lastImageClone = heroImages[heroImages.length - 1].outerHTML
firstImageClone = heroImages[0].outerHTML
heroImagesContainer.insertAdjacentHTML("afterbegin", lastImageClone)
heroImagesContainer.insertAdjacentHTML("beforeend", firstImageClone)

function arrow(direction) {
    slideTime = 0

    if (direction === "left") {
        if (translation >= maxTranslation) return // preventing the slideshow from going out of sync
        translation += 100
    } else if (direction === "right") {
        if (translation <= minTranslation) return // preventing the slideshow from going out of sync
        translation -= 100
    }

    // animation
    heroImagesContainer.style.transition = "0.5s"
    heroImagesContainer.style.transform = `translateX(${translation}vw)`

    // dots
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("fill")) {
            dots[i].classList.remove("fill")
            if (direction === "left") {
                if (i === 0) {
                    dots[dots.length - 1].classList.add("fill")
                } else {
                    dots[i - 1].classList.add("fill")
                }
            } else if (direction === "right") {
                if (i === dots.length - 1) {
                    dots[0].classList.add("fill")
                } else {
                    dots[i + 1].classList.add("fill")
                }
            }
            break
        }
    }
}

heroImagesContainer.addEventListener("transitionend", () => {
    heroImagesContainer.style.transition = "none"
    if (translation === maxTranslation) {
        translation = -initialTranslation
        heroImagesContainer.style.transform = `translateX(${translation}vw)`
    } else if (translation === minTranslation) {
        translation = initialTranslation
        heroImagesContainer.style.transform = `translateX(${translation}vw)`
    }
})

leftArrow.onclick = () => {
    arrow("left")
}

rightArrow.onclick = () => {
    arrow("right")
}

let slideTime = 0
const changeSlide = 10 // seconds

setInterval(function() {
    slideTime += 1
    if (slideTime === changeSlide) {
        arrow("right")
    }
}, 1000)
