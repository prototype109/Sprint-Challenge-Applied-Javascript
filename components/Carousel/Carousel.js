/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel(){
  const carouselHolder = document.createElement('div');
  carouselHolder.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';

  carouselHolder.appendChild(leftButton);

  carouselHolder.appendChild(imageCreator("./assets/carousel/mountains.jpeg"));
  carouselHolder.appendChild(imageCreator("./assets/carousel/computer.jpeg"));
  carouselHolder.appendChild(imageCreator("./assets/carousel/trees.jpeg"));
  carouselHolder.appendChild(imageCreator("./assets/carousel/turntable.jpeg"));

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';

  carouselHolder.appendChild(rightButton);

  // const buttonHolder = document.createElement('div');
  // buttonHolder.classList.add('button-container');
  // buttonHolder.appendChild(leftButton);
  // buttonHolder.appendChild(rightButton);

  // carouselHolder.appendChild(buttonHolder);

  return carouselHolder;
}

function imageCreator(value){
  const img = document.createElement('img');
  img.src = value;

  return img;
}

let carouselSection = document.querySelector('.carousel-container')
carouselSection.appendChild(Carousel());

let leftButton = document.querySelector('.left-button');
let rightButton = document.querySelector('.right-button');
const imgCollection = Array.from(document.querySelectorAll('.carousel-container img'));
imgCollection[0].classList.add('show');
let previousIndex = 0;
let currentIndex = 0;

//window.addEventListener('resize', setHiddenBio);

leftButton.addEventListener('click', function(){
    findVisibleImg();

    if(currentIndex === 0)
        currentIndex = imgCollection.length - 1;
    else
        currentIndex--;

    switchImg();
});

rightButton.addEventListener('click', function(){
    findVisibleImg();
    
    if(currentIndex === imgCollection.length - 1){
      previousIndex = currentIndex;
      currentIndex = 0;
    }
    else{
      previousIndex = currentIndex;
      currentIndex++;
    }
        

      switchImg();
});

function switchImg(){
    //if(window.innerWidth <= 500){
      //showAnimation();
      //hideAnimation();
        
        imgCollection.forEach(img =>{
            img.classList.remove('show');
          });
        //})
        imgCollection[currentIndex].classList.add('show');
    //}else
        //imgCollection.forEach(bio => bio.classList.remove('hide-bio'));
}

function findVisibleImg(){
    imgCollection.forEach((img, index) => {
        if(img.classList.contains('show')){
            currentIndex = index;
        }
    });
}

// function showAnimation(){
//     return new Promise((resolve, reject) => {
//       resolve(TweenMax.to(imgCollection[currentIndex], 0, {className: '+=show'});
//       TweenMax.to(imgCollection[currentIndex], 1, {opacity: '1', delay: '1'});
//     });
    
// }

// function hideAnimation(){
//     TweenMax.to(imgCollection[previousIndex], 1, {opacity: '0'});
//     TweenMax.to(imgCollection[previousIndex], 0, {className: '-=show', delay: '1'});
// }