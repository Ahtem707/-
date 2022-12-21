const menuBtn = document.getElementById("menu-button");
const leftMenuBlock = document.getElementById("left-menu");

const menuText = ["Home", "About", "Contact", "Testimonials"]
var isShowMenu = false;

setupLeftMenu()

function makeMenuItem() {
    const menuItem = document.createElement("button");
    menuItem.style.padding = "10px"
    menuItem.style.backgroundColor = "white"
    menuItem.style.color = "black"
    menuItem.style.width = "100%"
    menuItem.style.height = "30px"
    menuItem.style.margin = "10px"
    return menuItem
}

function setupLeftMenu() {
    leftMenuBlock.style.backgroundColor = '#021691'
    leftMenuBlock.style.display = "none"
    leftMenuBlock.style.position = "absolute"
    leftMenuBlock.style.height = "100vh"
    leftMenuBlock.style.width = "300px"
    leftMenuBlock.style.left = "0"
    leftMenuBlock.style.top = "0"
    leftMenuBlock.style.bottom = "0"
    leftMenuBlock.style.padding = "20px"

    for (let item of menuText) {
        const menuItem = makeMenuItem()
        menuItem.innerText = item
        leftMenuBlock.append(menuItem)
    }
}

menuBtn.addEventListener('click', function() {
    if (!isShowMenu) {
        leftMenuBlock.style.display = "block"
        setTimeout(() => {
            isShowMenu = true
        }, 500);
    }
})

document.body.addEventListener('click', function() {
    if (isShowMenu) {
        leftMenuBlock.style.display = "none"
        setTimeout(() => {
            isShowMenu = false
        }, 500);
    }
})