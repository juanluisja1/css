// js to manipulate styles


//it will select the first element with .backdrop class
let backdrop = document.querySelector('.backdrop');
let selectPlanButton = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal');
let modalNoResponseButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
//console.dir(backdrop) // this will print the directory of the element with a bunch of properties that we can use
//console.dir(selectPlanButton);
//backdrop.style.display = 'block';

for(let i=0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', ()=>{
        // modal.style.display ='block';
        // backdrop.style.display = 'block';
        // modal.className = 'open' // this will always overite the class element
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', ()=>{
    mobileNav.style.display='none';
    closeModal();
});

if(modalNoResponseButton){
    modalNoResponseButton.addEventListener('click',closeModal);
}

function closeModal(){
    // backdrop.style.display='none';
    // modal.style.display = 'none';
    mobileNav.classList.remove('open')
    backdrop.classList.remove('open');
    if(modal){
        modal.classList.remove('open');
    }
}

toggleButton.addEventListener('click',()=>{
    // mobileNav.style.display="block";
    // backdrop.style.display ='block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

