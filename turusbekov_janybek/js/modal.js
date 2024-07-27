//modal
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#btn-get");
const closeBtn = document.querySelector(".modal_close");


const openModal = () => {
    console.log('opened modal');
    modal.style.display = "block";
    document.body.style.overflowY = "hidden";
}

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflowY = "";
    console.log('closed modal');
}

modalBtn.addEventListener("click", function () {
    openModal()

})

closeBtn.addEventListener("click", function () {
    closeModal()
})

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}


const openModalMouseMove = () => {
    window.removeEventListener("mousemove", openModalMouseMove);
    setTimeout(() => openModal(), 2000);
}

window.addEventListener("mousemove", openModalMouseMove);



let modalScrollShow = false

const ifScrollOfEnd = () => {
    if (!modalScrollShow && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        modalScrollShow = true
        window.removeEventListener('scroll', ifScrollOfEnd);
    }
}

window.addEventListener('scroll', ifScrollOfEnd);
//telegram bot
const form = document.querySelector('form')
const token ='7056192931:AAF8TDEQA6gfebXmQyiVBeZoAJNsy-8httQ'
const chatId = '@lesson7Raziya'
const URL = `https://api.telegram.org/bot${token}/sendMessage`
form.onsubmit= async (event)=>{
    event.preventDefault()
    const result = event.target
    const data = Object.fromEntries(new FormData(result).entries())
    const {name, phone} = data
    // console.log(Object.fromEntries(new FormData(result).entries()))
    const text = `name; ${name}/nНомер: ${phone}`
    await fetch (URL, {
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({chat_id:chatId, text})
    })
}