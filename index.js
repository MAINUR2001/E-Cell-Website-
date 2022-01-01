// const banner=document.querySelector(".Banner_start");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");
const image=document.querySelector(".image");
const navbar=document.querySelector(".navbar");
const body=document.body;
const y=screen.width;

// console.log(banner.style.height);
const documents=document;
document.addEventListener("scroll",opaquenavbar);
body.addEventListener("click",clickfunction);
hamburger.addEventListener("click", mobileMenu);
 function clickfunction(){
     console.log("you clicked me");
 }
function opaquenavbar(){
    var x=document.documentElement.scrollTop;
    console.log(x+"px");
    const y=screen.width;
    console.log(y);
    if(y>872){

        if(x>105){
    
            // navbar.style.backgroundColor="rgba(240,226,226,.4)";
            // // navbar.style.opacity="0.5";
            // navbar.style.zIndex="10";
            navbar.classList.add("opaque");
        }
        if(x<105){
            // navbar.style.backgroundColor="none";
            navbar.classList.remove("opaque");
            // navbar.style.opacity="0.5"; 
            // navbar.style.zIndex="10";
        }
    }
     onsole.log("scrolled");
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("blur");
    image.remove();
}
const navLink = document.querySelectorAll("li");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navbar.classList.toggle("blur");
}
console.log(navMenu)