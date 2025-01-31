// 1
const openBtn = document.querySelector('button[data-action="open-modal"]')
openBtn.addEventListener("click", () => {
    document.body.classList.add("show-modal")
})

const closeBtn = document.querySelector('button[data-action="close-modal"]')
closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-modal")
})


// 2

const backdrop = document.querySelector(".backdrop")
backdrop.addEventListener("click", () => {
    document.body.classList.remove("show-modal")
})

// 3

const colorRed = document.querySelector("input[value='red']")
const colorWhite = document.querySelector('input[value="white"]')
const colorGreen = document.querySelector('input[value="green"]')

colorRed.addEventListener("change", () => {
    document.body.style.backgroundColor = "red";
});

colorWhite.addEventListener("change", () => {
    document.body.style.backgroundColor = "white";
});

colorGreen.addEventListener("change", () => {
    document.body.style.backgroundColor = "green";
});

// 4

const greetings = document.querySelector("input#name-input")
const nameInput = document.querySelector("span#name-output")

greetings.addEventListener("input", (e) => {
    nameInput.textContent = e.target.value;
    if(e.target.value === ""){
        nameInput.textContent = "Незнайомець"
    }
})

const invalid = document.querySelector("input#validation-input");
invalid.addEventListener("input", () => {
    if(invalid.value.length <= 6){
        invalid.classList.add("valid")
        invalid.classList.remove("invalid")
    } else {
        invalid.classList.remove("valid")
        invalid.classList.add("invalid")
    }
})

// 5

const textElem = document.querySelector("input#font-size-control");
textElem.addEventListener("input" , () => {
document.querySelector("span#text").style.fontSize = `${textElem.value.trim()}px`;
});
