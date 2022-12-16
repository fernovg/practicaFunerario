const links= document.querySelector('.links');
const menuBar= document.querySelector('.menu');

menuBar.addEventListener('click',()=>{
    links.classList.toggle('active-links');
})