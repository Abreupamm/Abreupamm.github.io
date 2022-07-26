// HEADER
const btnMobile = document.getElementById('btn-mobile');
const linkNav = document.getElementsByTagName('a');

function toggMenu (event) {
  if(event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('header-nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggMenu);
btnMobile.addEventListener('touchstart', toggMenu);

for (let index = 0; index < linkNav.length; index++) {
  const link = linkNav[index];
 link.addEventListener('click', toggMenu);
 link.addEventListener('touchstart', toggMenu);
}
// __________________________________________________________________________________________________
