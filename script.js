const button = document.querySelector('button')
const video = document.querySelector('.video2')
const container = document.querySelector('.container')

button.addEventListener('click' , ()=>{
    video.classList.add('play')
    video.load()
    container.classList.add('show')
    video.muted = false
})


const close = document.querySelector('.close-container p')

close.addEventListener('click' ,()=>{
    video.classList.remove('play')
    container.classList.remove('show')
    video.muted = true
})
