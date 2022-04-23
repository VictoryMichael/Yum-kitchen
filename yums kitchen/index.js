

let  menu  = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
} );



window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');

}


function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}


function fadeout(){
    setInterval(loader,3000);
}

window.onload = fadeout();




















