const menuData = [
  {
    category: "Indian",
    items: [
      { name: "Butter Chicken", price: 250 },
      { name: "Paneer Tikka", price: 200 },
      { name: "Masala Dosa", price: 150 },
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
    const div = document.createElement('div');
    div.textContent = item.category;
    div.id = item.category;
    Object.assign(div.style,elementStyle);
    div.addEventListener("click",()=>{
        handleAccordionElement(div);
    })

    parentContainer.appendChild(div)
})

function handleAccordionElement(ele){
    const newChildStyle = {
        maxWidth:'100%',
        height:'20px',
        backgroundColor:"#F8F8F8",
        display:'flex',
        justifyContent:'space-between',
        padding:'5px',
        border:'1px dotted black'
    }

    const dishesArray = (menuData.filter((el,i)=> el.category == ele.id)[0].items);
    const element = document.querySelector(`#${ele.id}`);

    dishesArray.forEach((ele)=>{

        const div = document.createElement('div');
        div.id='dishBox';
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
    
}
