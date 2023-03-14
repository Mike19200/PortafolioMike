const sections = document.querySelectorAll('.section');
const sctsBtns = document.querySelectorAll('.controls');
const sctBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions()
{
   //button click active class
   for (let i = 0; i < sctBtn.length; i++)
   {
     sctBtn[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        this.className += ' active-btn';
     })
   }
}

PageTransitions();