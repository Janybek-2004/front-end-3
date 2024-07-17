let regExp = /^[0-9]+$/

const containsOnlyDigits=( str)=> {
    return regExp.test(str)
}
console.log(containsOnlyDigits('2323321'))
console.log(containsOnlyDigits('2f323321'))





const count =()=>{
    let i = 1
    const interval = setInterval(()=> {
        console.log(i)
        i++
        if(i=== 11){
            clearInterval(interval)
        }
    },1000)
}
count()


const consoleLog = ()=>{
setInterval(()=> {
    console.log('прошла секунда')
}, 1000)
}
consoleLog()



const btn = document.querySelector('#btn')
const div = document.querySelector('div')
btn.addEventListener('click',(event)=>{
    div.classList.toggle('color')
})




const getBtn = document.querySelector('#getData')
getBtn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET','test.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.onload = ()=> {
        const data = JSON.parse(request.response)
        console.log(data)

    }
})
