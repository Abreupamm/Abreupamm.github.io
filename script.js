const btnMobile = document.getElementById('btn-mobile');

function toggMenu (event) {
  if(event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('header-nav');
  nav.classList.toggle('active');

}

btnMobile.addEventListener('click', toggMenu);
btnMobile.addEventListener('touchstart', toggMenu);