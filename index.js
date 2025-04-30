"use strict"

let iR, iR2;
let iC, iC2;
const DIM = 4;

window.onload = function () {
   caricaMatrice();
}

function caricaMatrice() {
   generaPosCasuale2();

   const wrapper = document.getElementById("wrapper");

   for (let i = 0; i < DIM; i++) {
      for (let j = 0; j < DIM; j++) {
         const div = document.createElement("div");
         div.classList.add("cella");
         div.id = `div-${i}-${j}`;

         if (i === iR && j === iC) {
            div.textContent = "2";
         } else if (i === iR2 && j === iC2) {
            div.textContent = "2";
         }

         wrapper.appendChild(div);
      }
   }
   document.addEventListener('keydown', event => {
      if ( event.key == 'ArrowUp') {
         spostaSu();
      }else if(event.key == 'ArrowDown')
      {
         spostaGiù();
      }else if(event.key == 'ArrowLeft')
      {
         spostaSinistra();
      }else if(event.key == 'ArrowRight')
      {
         spostaDestra();
      }
  })
}
function spostaDestra()
{
  
}
function generaPosCasuale2() {
   do {
      iR = generaNumero(0, DIM);
      iC = generaNumero(0, DIM);
      iR2 = generaNumero(0, DIM);
      iC2 = generaNumero(0, DIM);
   } while (iR === iR2 && iC === iC2); 
}

function generaNumero(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}
