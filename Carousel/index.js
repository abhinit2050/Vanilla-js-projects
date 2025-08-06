const carouselContainer = document.querySelector('.carousel-container');
const slide = document.querySelector('.slide');

const BaseUrl = './assets/';

const urlArray = [BaseUrl+'clouds.jpeg', BaseUrl+'girl_on_terrace.jpeg', BaseUrl+'sunset.jpeg', BaseUrl+'waves.jpeg', BaseUrl+'night.jpeg']


const imgStyle = {
    width:"500px",
    height:"400px",
}

urlArray.forEach((url)=>{
    const imgComponent = document.createElement('img');
    imgComponent.src=`${url}`;
    Object.assign(imgComponent.style, imgStyle);
    slide.appendChild(imgComponent);
})

let activeSlideIndex=0;

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')


prevBtn.addEventListener('click',()=>{
    console.log("prev", activeSlideIndex)
    if(activeSlideIndex>0){
         activeSlideIndex--;
        const offset = -activeSlideIndex * 500;
        slide.style.transform = `translateX(${offset}px)`;
        console.log("prev",slide.style.transform)
       
    }
})

nextBtn.addEventListener('click',()=>{
     console.log("next", activeSlideIndex)
    if(activeSlideIndex<urlArray.length-1){
        activeSlideIndex++;
        const offset = -activeSlideIndex * 500;
         slide.style.transform = `translateX(${offset}px)`;
         console.log("next",slide.style.transform)
         
    }
})

