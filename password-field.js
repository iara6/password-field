/**************
 SWITCH BUTTON 
***************/

const switchBtn = document.querySelector('.switch-button');

switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('slide');
});