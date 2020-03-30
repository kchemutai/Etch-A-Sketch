const gridContainer = document.querySelector('.grid-container')

const clearGridButton = document.querySelector('.clear')
clearGridButton.addEventListener('click', clearGrid)

const colorGridButton = document.querySelector('.color-grid')
colorGridButton.addEventListener('click', colorGrid)

const resizeGridButton = document.querySelector('.resize-grid')
resizeGridButton.addEventListener('click', ()=>{
    let size = prompt('Enter the size:')
    sizeInt = parseInt(size, 10);
    createGrid(sizeInt)
})


gridContainer.style.display='grid'

function createGrid(size=16){
  clearGrid()
  gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, auto)`;

  for(let i=0; i<size*size; i++){
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridContainer.appendChild(gridItem)
  }
}

createGrid()

function colorGrid()
{
 let gridCells = document.querySelectorAll('.grid-item')
  gridCells.forEach((cell)=>{
    cell.addEventListener('mouseover', (e)=>{
      e.target.style.backgroundColor = randomColor()
    })
  })
}


function randomColor(){
  var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6','#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D','#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC','#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC','#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399','#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933','#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  let randomNum = Math.floor(Math.random()*colorArray.length);
  return colorArray[Math.round(randomNum)];
}

function clearGrid(){
 let gridItems = document.querySelectorAll('.grid-item')
 gridItems.forEach((item)=>{
     item.remove()
 })
}