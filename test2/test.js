//2 chisla febanachi vuvoditca cherez 1 sec
function recFeb(n){
    if(n <= 1){
        return n
    }
    return recFeb(n-1)+recFeb(n-2)
}
let counter = 0
const  intervalId = setInterval(() => {
    console.log(recFeb(counter))
    counter++
    if(counter > 12){
        clearInterval(intervalId)
    }
}, 1000)

//3zapros s vuvodom v console title
const fetchAsync = async ()=>{
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        data.forEach(product =>{
            console.log(product.title)
        })

    }
    catch{
        console.log('error')
    }
    finally{
        console.log('final')
    }
}
fetchAsync()

//4 delegirovanie sobuti krasit fon v ukazonui cvet
const div = document.querySelector('.button_block')
div.addEventListener('click', (event)=>{
    let target = event.target
    if(target.tagName === 'BUTTON'){
        document.body.style.backgroundColor = target.textContent
    }
})

//5
const hiddenBlock = document.querySelector('.hidden_block')
const block = document.querySelector('.block')
const btn =document.querySelector('.hiddenBtn')
btn.addEventListener('click',()=>{
    if(block.classList.contains('hidden')){
        block.classList.remove('hidden')
    }else{
        block.classList.add('hidden')
    }

})
//7
const personBtn = document.querySelector('.person_btn')
personBtn.addEventListener('click',async()=>{
        try{
            const response = await fetch('test.json')
            const data = await response.json()
                console.log(data)
        }
        catch{
            console.log('error')
        }
        finally {
            console.log('final')
        }
})

//6 vuvod chisla v vide span i uvelichivaet ego kajduy secundu
let numElement = document.querySelector('span')
let num = 0
const  interval2 = setInterval(() => {
    num++
    numElement.textContent = num
    if(num >= 100){
        clearInterval(interval2)
    }
}, 1000)


//1 prinimaet stroku i vuvodit cifru otdel'no
const numberAndStr=()=>{
    const regExp = /\d+(\.d+)?/g;
    const num = str.match(regExp);
    return num ? num.map(Number) : [];
}
const str = 'fhdfhjd64r789eijd'
const numArr= numberAndStr(str)
console.log(numArr)