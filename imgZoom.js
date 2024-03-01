const ii1 = document.getElementById('ii1');
const ii2 = document.getElementById('ii2');
const ii3 = document.getElementById('ii3');
const ii4 = document.getElementById('ii4');
const ii5 = document.getElementById('ii5');
const ii6 = document.getElementById('ii6');
const ii7 = document.getElementById('ii7');
const ii8 = document.getElementById('ii8');
const ii9 = document.getElementById('ii9');
const ii10 = document.getElementById('ii10');
const ii11 = document.getElementById('ii11');
const ii12 = document.getElementById('ii12');
const ii13 = document.getElementById('ii13');
const ii14 = document.getElementById('ii14');
const ii15 = document.getElementById('ii15');
const ii16 = document.getElementById('ii16');
const ii17 = document.getElementById('ii17');
const ii18 = document.getElementById('ii18');
const ii19 = document.getElementById('ii19');
const ii20 = document.getElementById('ii20');
const ii21 = document.getElementById('ii21');
const ii22 = document.getElementById('ii22');
const ii23 = document.getElementById('ii23');
const ii24 = document.getElementById('ii24');

const fullscreenContainer = document.getElementById('fullscreenContainer')
const fullscreenFoodImg = document.getElementById('fullscreenFoodImg')
const fullscreenDrinkImg = document.getElementById('fullscreenDrinkImg')
const closeImgButton = document.getElementById('closeImgButton')

ii1.addEventListener('click', handleClick1);
ii2.addEventListener('click', handleClick1);
ii3.addEventListener('click', handleClick1);
ii4.addEventListener('click', handleClick1);
ii5.addEventListener('click', handleClick1);
ii6.addEventListener('click', handleClick1);
ii7.addEventListener('click', handleClick1);
ii8.addEventListener('click', handleClick1);
ii9.addEventListener('click', handleClick1);
ii10.addEventListener('click', handleClick1);
ii11.addEventListener('click', handleClick1);
ii12.addEventListener('click', handleClick1);
ii13.addEventListener('click', handleClick1);
ii14.addEventListener('click', handleClick1);
ii15.addEventListener('click', handleClick1);
ii16.addEventListener('click', handleClick1);

ii17.addEventListener('click', handleClick2);
ii18.addEventListener('click', handleClick2);
ii19.addEventListener('click', handleClick2);
ii20.addEventListener('click', handleClick2);
ii21.addEventListener('click', handleClick2);
ii22.addEventListener('click', handleClick2);
ii23.addEventListener('click', handleClick2);
ii24.addEventListener('click', handleClick2);

function handleClick1(){
    fullscreenContainer.style.display = 'block'
    fullscreenFoodImg.style.display = 'block'
    document.body.style.overflow = 'hidden';
}
function handleClick2(){
    fullscreenContainer.style.display = 'block'
    fullscreenDrinkImg.style.display = 'block'
    document.body.style.overflow = 'hidden';
}

closeImgButton.addEventListener('click', function(){
    fullscreenContainer.style.display = 'none'
    fullscreenFoodImg.style.display = 'none'
    fullscreenDrinkImg.style.display = 'none'
    document.body.style.overflow = 'visible';
})