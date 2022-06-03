
const liElement = document.querySelectorAll('.li-icon-after');
const dropDownLeft = document.querySelector('.dropdown-left');
const dropDownRight = document.querySelector('.dropdown-right')


// const divArr = Array.from(liElement);

liElement[0].addEventListener('mouseover', ()=>{
    dropDownLeft.style.display = "block";
    dropDownLeft.style.animation = "show-drop .3s  forwards";
  
}, false);

liElement[0].addEventListener('mouseout', ()=>{
    dropDownLeft.style.animation = "hide-drop .3s  forwards";
    if (dropDownLeft) {
        dropDownLeft.style.display = "none";
    }
}, false);

liElement[1].addEventListener('mouseover', ()=>{
    dropDownRight.style.display = "block";
    dropDownRight.style.animation = "show-drop .3s  forwards";
  
}, false);

liElement[1].addEventListener('mouseout', ()=>{
    dropDownRight.style.animation = "hide-drop .3s  forwards";
    if (dropDownRight) {
        dropDownRight.style.display = "none";
    }
}, false);

// if (window.matchMedia("(min-width: 1024px)").matches) {
//     const imgModify = document.querySelector('.hero-image');
//     imgModify.src = "./assets/images/image-hero-mobile.png";
//   } else {
//     const imgModify = document.querySelector('.hero-image');
//     imgModify.src = "./assets/images/image-hero-desktop.png";
//   }
