let toggle1 =document.querySelector('.toggle1-div')
let toggle2 =document.querySelector('.toggle2-div')
toggle1.addEventListener('click', ()=>{
    toggle1.classList.toggle('active');
    document.querySelector('.toggle-menu').classList.toggle('active');
})
toggle2.addEventListener('click', ()=>{
    document.querySelector('.side-bar').classList.toggle('active');
})
document.querySelector('.cancel-button').addEventListener('click', ()=>{
    document.querySelector('.side-bar').classList.toggle('active');  
})

 const aboutBtn = document.querySelectorAll('.about-btn');
 const detailsElement = document.querySelectorAll('.details-element');
function handleActive(){
    aboutBtn.forEach(btn => {
        btn.classList.remove('active');
    })
    this.classList.add('active');
    let btnData = this.getAttribute('data-content')
    detailsElement.forEach(element => {
        let data = element.getAttribute('data-content');
        element.classList.remove('active');
        if(data == btnData) {
            element.classList.add('active');
        }
    })
}
 aboutBtn.forEach(btn => {
    btn.addEventListener('click', handleActive);
 })