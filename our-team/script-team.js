function openTab(category) {
    var i;
    var x = document.getElementsByClassName("ecellteam");
    // console.log(x);
    for (i = 0; i < x.length; i++) {
        console.log(x[i].style.display);
        
        

            x[i].style.display = "none";
            console.log(x[i].style.display);
        
    }
    if(category=='faculty'){
        document.getElementById(category).style.display = "grid";
    }
    else{

        document.getElementById(category).style.display = "block";
    }
  }
  console.log(document.getElementById("faculty").style.display);

  // const banner=document.querySelector(".Banner_start");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");
const links =navMenu.getElementsByClassName("links");
const image=document.querySelector(".image");
const navbar=document.querySelector(".navbar");
const body=document.body;
const y=screen.width;

// console.log(banner.style.height);
const documents=document;
// document.addEventListener("scroll",opaquenavbar);
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
     console.log("scrolled");
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

//  active class on gallery page
// for (var i = 0; i < links.length; i++) {
//     // if(i==3){
//     //     links[3].style.hover="none";
//     //     continue;
//     // }
//     links[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("underline");
//     current[0].className = current[0].className.replace("underline", "");
//     this.className += " underline";
//     console.log("this of underline:::>>",this.innerElement(),document.getElementsByTagName("A"))
    
    
//     });
//   }


// Sakshi tab part 

// function openTab(category) {
//     var i;
//     var x = document.getElementsByClassName("image-gallery");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
    
//     document.getElementById(category).style.display = "block";
//   }

//   onclick on tab



const sakshi_banner=document.querySelector(".Banner_navbar");
const tab=sakshi_banner.querySelectorAll("span");
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector("ul");
// const image=document.querySelector(".image");
// const navbar=document.querySelector(".navbar");
// const body=document.body;
// const y=screen.width;

// // console.log(banner.style.height);
// const documents=document;
// document.addEventListener("scroll",opaquenavbar);
// body.addEventListener("click",clickfunction);
// hamburger.addEventListener("click", mobileMenu);
//  function clickfunction(){
//      console.log("you clicked me");
//  }
// function opaquenavbar(){
//     var x=document.documentElement.scrollTop;
//     console.log(x+"px");
//     const y=screen.width;
//     console.log(y);
//     if(y>872){

//         if(x>105){
    
//             // navbar.style.backgroundColor="rgba(240,226,226,.4)";
//             // // navbar.style.opacity="0.5";
//             // navbar.style.zIndex="10";
//             navbar.classList.add("opaque");
//         }
//         if(x<105){
//             // navbar.style.backgroundColor="none";
//             navbar.classList.remove("opaque");
//             // navbar.style.opacity="0.5"; 
//             // navbar.style.zIndex="10";
//         }
//     }
//      onsole.log("scrolled");
// }

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//     navbar.classList.toggle("blur");
//     image.remove();
// }
// const navLink = document.querySelectorAll("li");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//     navbar.classList.toggle("blur");
// }
// console.log(navMenu)




for (var i = 0; i < tab.length; i++) {
    console.log("tab",tab.length);
    tab[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-banner");
    current[0].className = current[0].className.replace("active-banner", "");
    this.className += " active-banner";
    });
  }