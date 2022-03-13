let leftArrow = document.querySelector(".arrow:first-of-type")
let rightArrow = document.querySelector(".arrow:last-of-type")
let dotsContainer = document.querySelector("#dots")
let dots = document.querySelector("#dots").children
let heroImagesContainer = document.querySelector("#hero-images")
let heroImages = document.querySelector("#hero-images").children

// creating dots
for (i = 0; i < heroImages.length; i++) {
    let fill = ""
    if (i === 0) {
        fill = " fill"
    }
    dotsContainer.innerHTML += `<div class="dot${fill}"></div>`
}

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

leftArrow.onclick = () => {
    if (translation >= maxTranslation) return // prevents the slideshow from going out of sync

    // dots
    for (i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("fill")) {
            dots[i].classList.remove("fill")
            if (i === 0) {
                dots[dots.length - 1].classList.add("fill")
            } else {
                dots[i - 1].classList.add("fill")
            }
            break
        }
    }

    // animation
    translation += 100
    heroImagesContainer.style.transition = "0.3s"
    heroImagesContainer.style.transform = `translateX(${translation}vw)`
}

rightArrow.onclick = () => {
    if (translation <= minTranslation) return // prevents the slideshow from going out of sync

    // dots
    for (i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("fill")) {
            dots[i].classList.remove("fill")
            if (i === dots.length - 1) {
                dots[0].classList.add("fill")
            } else {
                dots[i + 1].classList.add("fill")
            }
            break
        }
    }

    // animation
    translation -= 100
    heroImagesContainer.style.transition = "0.3s"
    heroImagesContainer.style.transform = `translateX(${translation}vw)`
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
