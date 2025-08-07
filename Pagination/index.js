const allItems = new Array(100).fill().map((_,index)=> `This is line number ${index+1}`);
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
const itemsPerPage = 20;
const totalPages = Math.ceil(allItems.length/itemsPerPage);

function renderListGenerator(){
     pageNoDisplay.value = currentPageNumber;
    let startIndex = (currentPageNumber-1)*itemsPerPage
    let renderList = allItems.slice(startIndex, startIndex+itemsPerPage);
    main(renderList);
}


function main(arr){
    if(currentPageNumber >= 1){
        parentContainer.replaceChildren();
    }

    if(currentPageNumber<=1){
        prevBtn.disabled = true;
    }

    if(currentPageNumber >= totalPages){
        nextBtn.disabled = true;
    }

    if(currentPageNumber>1 && currentPageNumber < totalPages){
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

    arr.forEach((item, index)=>{
    if(index >= itemsPerPage) return; // Only render the first page for now
    const rowElement = document.createElement('div');
    rowElement.textContent = item;
    Object.assign(rowElement.style, itemStyle);
    parentContainer.appendChild(rowElement);
})
}

nextBtn.addEventListener("click",()=>{
    currentPageNumber += 1;
    renderListGenerator();
})

prevBtn.addEventListener("click",()=>{
    if(currentPageNumber <1) return
    currentPageNumber -= 1;
    renderListGenerator();
})

document.addEventListener("DOMContentLoaded",()=>{
    currentPageNumber = 1;
    renderListGenerator();
})

console.log('total', totalPages);