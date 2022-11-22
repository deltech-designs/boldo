const hideBar = document.querySelector('.hide-bar'); 
const navBar = document.querySelector('.nav-bar');
const closeBtn = document.querySelector('.close-btn'); 

hideBar.onclick = () => {
    navBar.style.width = '250px'; 
}

closeBtn.onclick = () => {
    navBar.style.width = '0px'; 

}
