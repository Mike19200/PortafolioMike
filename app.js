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

   //Section Active class
   allSections.addEventListener('click', (e) =>{
      const id = e.target.dataset.id;
      if (id){
         //remove selected from the other buttons
         sctsBtns.forEach((btn) =>{
            btn.classList.remove('active')
         })
         e.target.classList.add('active')

         //hide other sections
         sections.forEach((section)=>{
            section.classList.remove('active')
         })

         const element = document.getElementById(id);
         element.classList.add('active');
      }
   })
}

PageTransitions();