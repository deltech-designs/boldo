const hideBar = document.querySelector('.hide-bar'); 
const navBar = document.querySelector('.nav-bar');
const closeBtn = document.querySelector('.close-btn'); 

hideBar.onclick = () => {
    navBar.style.width = '300px'; 
}

closeBtn.onclick = () => {
    navBar.style.width = '0px'; 

}


/* Landing page logo */

const containerLogo = [
    {pic: "./img/Logo.png"}, 
    {pic: "./img/presto logo.png"}, 
    {pic: "./img/Logo.png"},  
    {pic: "./img/presto logo.png"}, 
    {pic: "./img/Logo.png"}, 
    {pic: "./img/presto logo.png"}, 
]; 


let containerLogoItem = document.querySelector('.logo-container');

containerLogo.map( ({pic}) => {
    containerLogoItem.innerHTML += `
        <div class="landingpage-logo">
            <img src="${pic}" alt=""> 
        </div>
    `
    console.log(pic);
})

// console.log(landingLogo);