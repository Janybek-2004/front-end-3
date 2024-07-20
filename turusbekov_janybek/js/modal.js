// modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')


const openModal = () =>  {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    console.log('opened modal')
}

const closeModal = () => {
    console.log('closed modal');
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
modalTrigger.onclick = () =>openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

modalTrigger.addEventListener("click", function () {
    openModal()

})

modalCloseButton.addEventListener("click", function () {
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


