const allItems = new Array(200).fill().map((_,index)=> `This is line number ${index+1}`);
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const pageNoDisplay = document.querySelector('#pageNoDisplay');
let currentPageNumber = 1;

pageNoDisplay.value = currentPageNumber;

const itemStyle = {
    width:'90%',
    textAlign:'center',
    border:'1px solid black'
}
const parentContainer = document.querySelector('.paginationContainer');
const itemsPerPage = 10;
const totalPages = Math.ceil(allItems.length/itemsPerPage)

allItems.forEach((item, index)=>{
    if(index >= itemsPerPage) return; // Only render the first page for now
    const rowElement = document.createElement('div');
    rowElement.textContent = item;
    Object.assign(rowElement.style, itemStyle);
    parentContainer.appendChild(rowElement);
})