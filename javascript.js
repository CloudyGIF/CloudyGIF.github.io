const HorizontalText = document.querySelectorAll(".text-scroll");

var slideIndex = 1;

const languages = [
    "C#",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    "Python"
];


function initializeItems() {
    HorizontalText.forEach((scrollItem) => {
        scrollItem.innerHTML = "";
    });
};

initializeItems();



languages.forEach((item) => {
    addItemToScrolls(item);
});

function addItemToScrolls(input) {

    HorizontalText.forEach((scrollItem) => {
        const textItem = document.createElement("span");
        var text = input + " ";
        textItem.classList.add("text");
        textItem.innerHTML = text;
        scrollItem.appendChild(textItem);
        console.log(input);
    });

};

const workbuttons = document.querySelectorAll(".workimg");
workbuttons.forEach(button => {
    button.addEventListener("click", () => showSlides(1));
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slide");

    let background = document.getElementById("overlay");

    let container = document.getElementById("container");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    background.style.display = "block";
    container.style.display = "block";
}


const arrows = document.querySelectorAll("#arrow");
arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        let Slideid = parseInt(arrow.dataset.id);
        plusSlides(Slideid);
        console.log(Slideid);
    });
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

const close = document.getElementById("close");

close.addEventListener("click", () => {
    let background = document.getElementById("overlay");

    let container = document.getElementById("container");
    background.style.display = "none";
    container.style.display = "none";
});

const projectbtns = document.querySelectorAll("#projectbtn");
projectbtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let Slideid = parseInt(btn.dataset.id);
        currentSlide(Slideid);
    })
})