

/* const projectLinks = {
  'Label Generator': './projects.html#1',
  'Music Player': './projects.html#2',
  'Quote Generator': './projects.html#8',
  'ToDo List': './projects.html#3',
  'Rock Scissors Paper': './projects.html#4',
  'Fancy Count Down': './projects.html#5',
  'Math Sprint Game': './projects.html#7',
  'BookMark Keeper': './projects.html#6',
  'Sign Up Form': './projects.html#9'
}; */





const fadeDiv= document.getElementById('down-arrow-container');

const isShowing = false;


function fadeout(){
  fadeDiv.classList.add('down-arrow-container');
    setTimeout(() => {
       
       
fadeDiv.style.display = 'none';
    }, 6000);

    
}


fadeout();


/* make the entre thumbnail clickable */

/* const projectItems = document.querySelector('.p-item');


projectItems.addEventListener('click', function(){
console.log('hiii')
  
const projectTitle = titleElement.textContent;


  if (projectLinks[projectTitle]) {

    window.location.href = `${projectLinks[projectTitle]}`;
  }
}) */