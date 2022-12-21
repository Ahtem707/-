const cardsBlock = document.getElementById("slider");
const backBtn = document.getElementById("slider-back");
const nextBtn = document.getElementById("slider-next");

const cardsCount = cardsBlock.children.length;
var visibleCard;
var visibleCardId;

hideCards();
setupSlider();

backBtn.addEventListener("click", function() {
    visibleCard.style.display = "none"
    back()
    visibleCard = cardsBlock.children[visibleCardId];
    visibleCard.style.display = "block"
})

nextBtn.addEventListener("click", function() {
    visibleCard.style.display = "none"
    next()
    visibleCard = cardsBlock.children[visibleCardId];
    visibleCard.style.display = "block"
})

function hideCards() {
    for (let item of cardsBlock.children) {
        item.style.display = "none"
    }
}

function setupSlider() {
    visibleCardId = 0;
    visibleCard = cardsBlock.children[visibleCardId];
    visibleCard.style.display = "block"
    if (visibleCardId <= 0) {
        backBtn.style.backgroundImage = "url('assets/icons/back.png')";
    } else {
        backBtn.style.backgroundImage = "url('assets/icons/back-active.png')";
    }
    if (visibleCardId >= cardsCount - 1) {
        nextBtn.style.backgroundImage = "url('assets/icons/next.png')";
    } else {
        nextBtn.style.backgroundImage = "url('assets/icons/next-active.png')";
    }
}

function next() {
    if (visibleCardId < cardsCount - 1) {
        visibleCardId++;
    }
    if (visibleCardId < cardsCount - 1) {
        backBtn.style.backgroundImage = "url('assets/icons/back-active.png')";
        backBtn.disabled = false
    } else {
        nextBtn.style.backgroundImage = "url('assets/icons/next.png')";
        nextBtn.disabled = true
    }
}

function back() {
    if (visibleCardId > 0) {
        visibleCardId--;
    }
    if (visibleCardId > 0) {
        nextBtn.style.backgroundImage = "url('assets/icons/next-active.png')";
        nextBtn.disabled = false
    } else {
        backBtn.style.backgroundImage = "url('assets/icons/back.png')";
        backBtn.disabled = true
    }
}

// Циклический слайдер
// function next() {
//     if (visibleCardId < cardsCount - 1) {
//         visibleCardId++;
//     } else {
//         visibleCardId = 0
//     }
// }

// function back() {
//     if (visibleCardId > 0) {
//         visibleCardId--;
//     } else {
//         visibleCardId = cardsCount - 1;
//     }
// }