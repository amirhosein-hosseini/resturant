const navlist = document.getElementsByClassName('nav-list');
const bgoverlay = document.getElementsByClassName("nav-bgoverlay");

const navopen = () =>{
    navlist[0].classList.add("show");
    bgoverlay[0].classList.add("active");
    document.body.style = 'vistbility: visible; height:100vh; width: 100vw; overflow: hidden;';
}

const navclose = () => {
    navlist[0].classList.remove("show");
    bgoverlay[0].classList.remove("active");
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}
