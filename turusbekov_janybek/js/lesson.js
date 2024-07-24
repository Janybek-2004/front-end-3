// TAP SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const tabSlider = document.querySelector('.tab_slider')
let tabIndex = 0

const hideTabContent =()=> {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index=0) => {

    tabContentBlocks[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

const func = ()=>{
    setInterval(()=>{
        tabIndex++
        if(tabIndex > tabContentBlocks.length-1){
            tabIndex = 0
        }
        hideTabContent()
        showTabContent(tabIndex)
    }, 3000)
}
func()


const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')

const convertor = (input, targetInput , el) => {
    input.oninput = () => {
                const request = new XMLHttpRequest()
        request.open('GET', '../data/convertor.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const data = JSON.parse(request.response)
            if (input.id === 'som') {
                targetInput.value = (input.value / data.usd).toFixed(2)
                el.value = (input.value / data.eur).toFixed(2)
            }
            if (input.id === 'usd') {
                targetInput.value = (input.value / data.usd).toFixed(2)
                el.value = (input.value * data.eur).toFixed(2)
            }
            if (input.id === 'eur') {
                targetInput.value = (input.value * data.eur).toFixed(2)
                el.value = (input.value * data.eur / data.usd).toFixed(2)
            }
            input.value === '' && (targetInput.value = '', el.value = '')
        }
    }
}

convertor(usdInput, somInput, eurInput)
convertor(somInput, usdInput, eurInput)
convertor(eurInput, somInput, usdInput)

// somInput.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/convertor.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()

//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value =(somInput.value / data.usd).toFixed(2)
//     }
// }

// usdInput.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/convertor.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()

//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         somInput.value =(usdInput.value * data.usd).toFixed(2)
//     }
// }

//принципы в программировании 

//DRY-don repeat yourself 

// KISS-keep it simple, stupid

// SOLID 


/// card switcher

const cardBlock =  document.querySelector('.card')
const btnNext= document.querySelector('#btn-next')
const btnPrev= document.querySelector('#btn-prev')

let cardId = 1

const getRequestFetch = async ()=>{
    try{
        const switcherResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const switcherData = await switcherResponse.json()
        cardBlock.innerHTML = `
         <p>${switcherData.title}</p>
            <p style = "color: ${switcherData.completed ? 'green' : 'red'}"> ${switcherData.completed}</p>
            <span>${switcherData.id}</span>
        `
        }catch(error){
        console.log(error)
    }
    }
// btnNext.onclick = () => {
//     count++
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//     .then((response) => response.json())
//     .then((data) => {
//         cardBlock.innerHTML = `
//         <p>${data.title}</p>
//         <p style="color: ${data.completed ? 'green': 'red'} ">${data.completed}</p>
//         <span>${data.id}</span>
//         `
//     })
// }


getRequestFetch(cardId)
btnNext.onclick=()=>{
    cardId < 200 ? cardId++ : cardId = 1
    getRequestFetch(cardId)
}
btnPrev.onclick=()=>{
    cardId > 1 ? cardId-- : cardId = 200 
    getRequestFetch(cardId)
}