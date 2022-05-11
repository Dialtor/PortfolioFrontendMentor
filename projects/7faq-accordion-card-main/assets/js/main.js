const accordion = document.getElementsByClassName('acordionbg')
console.log(accordion); 


// for (i = 0; i<accordion.length; i++){
//     accordion[i].addEventListener('click', function(){
//         this.classList.toggle('active');
//         console.log("hey")
//     })
// }

Array.from(accordion).forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle("active");
    })
  });

