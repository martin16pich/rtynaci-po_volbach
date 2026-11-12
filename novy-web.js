const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('#main-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Zavřít nabídku':'Otevřít nabídku')});nav.addEventListener('click',event=>{if(event.target.closest('a')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}})}


// Zmenšení hlavičky a loga při posunutí stránky.
const header = document.querySelector('.header');
if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 0);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}
