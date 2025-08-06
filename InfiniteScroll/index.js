
const container = document.querySelector('.container');

const arr = new Array(50).fill().map((_,index)=>index+1);

const itemStyle = {
    border:'1px solid blue',
    textAlign:"center",
    height:"25px",
    fontSize:"20px",    
}

container.addEventListener('scroll',(event)=>{
    let sT = event.target.scrollTop;
   let sH = event.target.scrollHeight;
   let cH = event.target.clientHeight;

   let remainingScroll =sH-(sT+cH);
   
   if(remainingScroll < 25){
        const newItems = new Array(20).fill().map((_,index)=>arr.length+index+1);
        arr.push(...newItems);

      setTimeout(()=>{
        
        newItems.forEach((item)=>{
            const div = document.createElement('div');
            div.textContent = item;
            Object.assign(div.style, itemStyle);
            container.appendChild(div);
            

        })
      },1000)  
   }
})

arr.forEach((item)=>{

    const div = document.createElement('div');
    div.textContent = item;
    Object.assign(div.style, itemStyle);
   

    container.appendChild(div);
})