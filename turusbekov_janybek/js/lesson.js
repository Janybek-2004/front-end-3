let phoneInput = document.querySelector("#phone_input");
let phoneButton = document.querySelector("#phone_button");
let phoneResult = document.querySelector("#phone_result");
const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$///^$ ogranichenie dlya lishnih znachenii
phoneButton.onclick = ()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color= 'green'
    }else{
        phoneResult.innerHTML='not ok'
        phoneResult.style.color= 'red'
    }
}


const tabContBlo= document.querySelectorAll('.tab_content_block')
const tabContItem = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const tabSlider = document.querySelector('.tab_slider')
let tabIndex = 0
const hideTabCont =()=>{
    tabContBlo.forEach((item)=>{
        item.style.display = 'none'
    })
    tabContItem.forEach((item)=>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabCont = (index = 0)=>{

    tabContBlo[index].style.display = 'block'
    tabContItem[index].classList.add('tab_content_item_active')
    tabIndex = index
}


hideTabCont()
showTabCont()

tabParent.onclick=(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabContItem.forEach((item, index)=>{
            if(event.target === item){
                hideTabCont()
                showTabCont(index)
            }
        })
    }
}


const func = ()=>{
    setInterval(()=>{
        tabIndex++
        if(tabIndex > tabContBlo.length-1){
            tabIndex = 0
        }
        hideTabCont()
        showTabCont(tabIndex)
    }, 3000)
}
func()


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const euroInput = document.querySelector('#eur')


const converter =  (element, targetElement, el) => {
    element.oninput = async () => {
        try {
            const converterResponse = await fetch('../data/converter.json')
            const converterData = await converterResponse.json()

            if (element.id === 'som') {
                targetElement.value = (element.value / converterData.usd).toFixed(2)
                el.value = (element.value / converterData.eur).toFixed(2)
            }
            if (element.id === 'usd') {
                targetElement.value = (converterData.usd * element.value).toFixed(2)
                el.value = (element.value * converterData.usd / converterData.eur).toFixed(2)
            }
            if (element.id === 'eur') {
                targetElement.value = (element.value * converterData.eur).toFixed(2)
                el.value = (element.value * converterData.eur / converterData.usd).toFixed(2)
            }
            element.value === '' && (targetElement.value = '', el.value = '')

        } catch (error) {
            console.log('error')
        }
    }
}
converter(somInput,usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)


//card switcher
const prev = document.querySelector('#btn-prev')
const next = document.querySelector('#btn-next')
const card = document.querySelector('.card')

let cardId = 1

const getRequestFetch = async ()=>{
    try{
        const switcherResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const switcherData = await switcherResponse.json()
        card.innerHTML = `
         <p>${switcherData.title}</p>
            <p style = "color: ${switcherData.completed ? 'green' : 'red'}"> ${switcherData.completed}</p>
            <span>${switcherData.id}</span>
        `
        }catch(error){
        console.log(error)
    }
    }


getRequestFetch(cardId)
next.onclick=()=>{
    cardId < 200 ? cardId++ : cardId = 1
    getRequestFetch(cardId)
}
prev.onclick=()=>{
    cardId > 1 ? cardId-- : cardId = 200
    getRequestFetch(cardId)
}


const input = document.querySelector('.cityName')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
const appid = 'e417df62e04d3b1b111abeab19cea714'


//optional chaining ?.

const citySearchAsync = async () => {
    input.oninput = async (event) => {
        try {
            const response = await fetch(`${baseURL}?q=${event.target.value}&appid=${appid}`)
            const data = await response.json()
            cityName.innerHTML = data.name || 'not found'
            cityTemp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273)+'&deg;C':'///'
        }catch(error){
            console.log('error')
        }
    }
}
citySearchAsync()