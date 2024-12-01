let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}
const navBarEls = document.querySelectorAll(".nav_bar");

navBarEls.forEach(navLinkEl  => {
  navBarEls.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    navBarEls.classList.add('active');
  })
})
// MODEL: creates an animal trading card using concatenation
function createHTMLconcat(animal) {
  const cardHTML =
      '<div class="card">' + '<h3 class="name">' + animal.name +
      '</h3>' + '<img src="' + 'images/' + animal.name +'.png" alt="' + animal.name + '" class="picture">' +
      '<div class="description">' +
      '<p class="fact">' + animal.fact + '</p>' +
      '<ul class="details">' +
      '<li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '</li>' +
      '<li><span class="bold">Average Lifespan</span>: ' + animal.lifespan + '</li>' +
      '<li><span class="bold">Average Speed</span>: ' + animal.speed + '</li>' +
      '<li><span class="bold">Diet</span>: ' + animal.diet + '</li>' +
      '</ul>' +
      '<p class="brief">' + animal.summary + '</p>' +
      '</div>' +
      '</div>';

  return cardHTML;
}

const bodyElement = document.querySelectorAll('.container');

window.addEventListener('scroll', function(){
  if (div.getBoundingClientRect().top < window.innerHTML) {
innerHTML.style.background = 'oranged';
  }
});


const navLinkEl = document.querySelectorAll('.nav_link a');
const windowPathname = window.location.pathname;
navLinksEl. forEach(navLinkEl => {
    if (Link.href.includes(windowPathname)) {
      navLinkEl.classList.add('active');
    }
})
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})