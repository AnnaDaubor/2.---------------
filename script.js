
let isOpen = false
function openMenu() {
    const container =document.getElementById("myContainer")
    const buttonOpen = document.getElementById("buttonOpen")
    const buttonClose = document.getElementById("buttonClose")

    if(isOpen){
        container.style.display ="none"
        buttonOpen.style.display ="flex"
        buttonClose.style.display ="none"
        isOpen = false
    } else {
        container.style.display ="flex"
        buttonOpen.style.display ="none"
        buttonClose.style.display ="flex"
        isOpen = true
    } 
}