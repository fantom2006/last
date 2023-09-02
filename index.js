let ter = document.querySelector('.ter')

ter.addEventListener('mouseover', () => {
   ter.style.backgroundColor = 'red'

} )
ter.addEventListener('mouseout', () => {
    ter.style.backgroundColor = 'blue'
 
 } )


function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode'); 
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark'); 
    } else {
      localStorage.setItem('mode', 'white'); 
    }
  }
  
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    document.querySelector('body').classList.add('dark-mode'); 
  }
