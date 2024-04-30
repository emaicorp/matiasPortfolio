window.addEventListener('DOMContentLoaded', () =>{

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
function handleScreenWidthChange() {
    var screenWidth = window.innerWidth;
    const detailHeight = document.querySelector('.details-element.active').offsetHeight;
    document.querySelector('.mark2').style.marginTop = detailHeight +  100 + 'px';

}
handleScreenWidthChange()


window.addEventListener('resize', function() {
    handleScreenWidthChange();
});


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
            handleScreenWidthChange()
        }
    })
}
 aboutBtn.forEach(btn => {
    btn.addEventListener('click', handleActive);
 })


function reveal(element){
    let reveals = document.querySelectorAll(`${element}`)
    for(let i = 0; i<reveals.length; i++){
         let windowHeight = window.innerHeight;
         let revealTop = reveals[i].getBoundingClientRect().top;
         let revealPoint = 150;
         

         if(revealTop < windowHeight - revealPoint  ){
            reveals[i].classList.add('active');
       
                    //  console.log(reveals[i])


         }else{
            reveals[i].classList.remove('active');
         }
    }
}

 window.addEventListener("scroll", ()=>{
    reveal('.translateY')
    reveal('.translateYN')
    reveal('.pop')
    reveal('.flip')
 })
})