const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
const form=document.getElementById('quote');
if(form){form.addEventListener('submit',(e)=>{localStorage.setItem('lastQuoteRequest',new Date().toISOString());});}
