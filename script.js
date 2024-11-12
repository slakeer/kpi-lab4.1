const variantNumber = 5;
const targetIndex = (variantNumber % 10) + 1;

const elements = document.querySelectorAll("ul li, ol li");
elements.forEach((element, index) => {
    if (index + 1 === targetIndex) {
        element.addEventListener("click", () => toggleColor(element, 'getElementById'));
    } else {
        element.addEventListener("click", () => toggleColor(element, 'querySelector'));
    }
});

const hobbyHeading = document.querySelector("h3");
hobbyHeading.addEventListener("click", () => hobbyHeading.classList.toggle("selected"));

function toggleColor(element, method) {
    if (method === 'getElementById') {
        document.getElementById(element.id).classList.toggle("selected");
    } else {
        document.querySelector(`#${element.id}`).classList.toggle("selected");
    }
}

function addImage() {
    const img = document.getElementById("image");
    if (!img) {
        const newImg = document.createElement("img");
        newImg.id = "image";
        newImg.src = "https://lviv.vgorode.ua/img/article/3872/6_main-v1577255306.jpg";
        newImg.alt = "Львів";
        newImg.width = 600;
        document.body.insertBefore(newImg, document.body.lastElementChild);
    }
}

function increaseImage() {
    const img = document.getElementById("image");
    if (img) img.width += 100;
}

function decreaseImage() {
    const img = document.getElementById("image");
    if (img && img.width > 100) img.width -= 100;
}

function removeImage() {
    const img = document.getElementById("image");
    if (img) img.remove();
}
