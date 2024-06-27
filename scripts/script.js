console.log('hi');



const fadeDiv= document.getElementById('down-arrow-container');

const isShowing = false;


function fadeout(){
  fadeDiv.classList.add('down-arrow-container');
    setTimeout(() => {
       
       
fadeDiv.style.display = 'none';
    }, 4000);

    
}


fadeout();