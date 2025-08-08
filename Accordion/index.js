const menuData = [
  {
    category: "Indian",
    items: [
      { name: "Butter Chicken", price: 250 },
      { name: "Paneer Tikka", price: 200 },
      { name: "Masala Dosa", price: 150 },
       { name: "Dal Khichdi", price: 175 },
    ]
  },
  {
    category: "Italian",
    items: [
      { name: "Margherita Pizza", price: 300 },
      { name: "Pasta Alfredo", price: 280 },
      { name: "Bruschetta", price: 180 },
    ]
  },
  {
    category: "Chinese",
    items: [
      { name: "Chow Mein", price: 220 },
      { name: "Kung Pao Chicken", price: 270 },
      { name: "Spring Rolls", price: 160 },
    ]
  }
];

const parentContainer = document.querySelector('.accordionParent');

const elementStyle = {
    border:'1px solid black',
    backgroundColor:"gray",
    textAlign:"center",
    height:"25px",
    cursor:"pointer"
}

menuData.forEach((item, index)=>{
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('accordion-section')
   
    //adding Header
    const div = document.createElement('div');
    div.textContent = item.category;
    div.id = item.category;
    
    Object.assign(div.style,elementStyle);

    //adding dish container
    const dishContainer = document.createElement('div');
  dishContainer.classList.add('dish-container');
  dishContainer.style.display = 'none'; // hide initially

    div.addEventListener("click",()=>{
        handleAccordionElement(div);
    })

    wrapper.appendChild(div);
    wrapper.appendChild(dishContainer)
    parentContainer.appendChild(wrapper);
})

let isExpanded = false;

function handleAccordionElement(ele){
     isExpanded = !isExpanded;

    const newChildStyle = {
        maxWidth:'100%',
        height:'20px',
        backgroundColor:"#F8F8F8",
        display:'flex',
        justifyContent:'space-between',
        padding:'5px',
        border:'1px dotted black'
    }

    const element = document.querySelector(`#${ele.id}`);

    if(isExpanded){
            const dishesArray = (menuData.filter((el,i)=> el.category == ele.id)[0].items);
        dishesArray.forEach((ele,index)=>{

            const div = document.createElement('div');
            div.id=`dishBox-${index+1}`;
            const dishName = document.createElement('div');
            const dishPrice = document.createElement('div');
            dishName.textContent = ele.name;
            dishPrice.textContent = ele.price;

            div.appendChild(dishName);
            div.appendChild(dishPrice);

    Object.assign(div.style,newChildStyle)
        element.appendChild(div);
        element.style.height = 'fit-content';
        })
    } else {
       let eleChildren = (element.children);
      let arraylength = eleChildren.length;
      let idArray=[]

      for(let j=0;j<arraylength;j++){
        idArray.push(eleChildren[j].id)
      }

        for(let i=0; i<arraylength;i++){
             
            let identifiedChild = document.getElementById(idArray[i]);
            identifiedChild.remove();
        }
       
       
       
       
    }
    
   
    
}
