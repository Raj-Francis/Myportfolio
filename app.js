const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelectorAll('.maint-content');


function PageTransitions(){
    //button click active class
    for(let i =0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0]=  document.querySelectorAll('.active-btn');
            console.log(currentBtn[0]);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn';
        })
    }
}
PageTransitions();
