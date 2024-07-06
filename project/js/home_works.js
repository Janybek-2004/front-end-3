//GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')



const regExp = /^[\w]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else {
        gmailResult.innerHTML = " NOT OK"
        gmailResult.style.color = "red"
    }
}

const parent = document.querySelector('.parent_block')
const child = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const maxParWidth = parent.offsetWidth - child.offsetWidth
const maxParHeight = parent.offsetHeight - child.offsetHeight
const moveBlock = () => {
    if(positionX < maxParWidth && positionY === 0) {
        positionX++
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if(positionX >= maxParWidth && positionY < maxParHeight){
        positionY++
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if(positionY >= maxParHeight && positionX > 0){
        positionX--
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if(positionX === 0 && positionY > 0){
        positionY--
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()

let startBtn = document.querySelector("#start");
let start = 0
let interval
const startFunc = ()=>{
    interval = setInterval(()=>{
        start++
        document.querySelector("#seconds").innerHTML = start
    }, 1000)
    startBtn.disabled = true
}
const stopFunc = ()=>{
    clearInterval(interval)
    startBtn.disabled = false
}
const resetFunc = ()=> {
    clearInterval(interval)
    start = 0
    document.querySelector("#seconds").innerHTML = start
    startBtn.disabled = false
}