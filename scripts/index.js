//grab all the html buttons and container 
var resizebutton=document.querySelector('.resize-button');
var container=document.querySelector('.container');
var blackButton=document.querySelector('.black-button');
var multicolorButton=document.querySelector('.color-button');
var clearButton=document.querySelector('.clear-button');

//define the grid rows and coloums based on the number of squares the user wants herein defined as size
function createGrid(size){
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr )`;

  //Generate the squares and give a class gridElement for each box and attach to the container as children. 
for(var i=0;i<=size*size;i++){
  var griditem=document.createElement("div");;
  griditem.classList.add("gridElement");
  container.appendChild(griditem);
}
}
createGrid(16);

//change the grid size to your sepcification.
function changeGridSize(){
  var inputSize=prompt('Enter the Number of Squares Maximum is hundred');
if(isNaN(inputSize)){
    inputSize=prompt('Enter the Number of Squares Maximum is hundred');
   }
  if(inputSize>100 || inputSize < 0){
    alert('Enter the Number of Squares Maximum is hundred');
    return;
  }
    createGrid(inputSize);
}

resizebutton.addEventListener('click',changeGridSize);

function paintblack(){
    var boxes=document.querySelectorAll('.gridElement');

    boxes.forEach((box) => {
  
      // and for each one we add a 'click' listener
      box.addEventListener('mouseover', (e) => {
          e.target.style.background = 'black';
      });
    });
}

blackButton.addEventListener('click',paintblack);

//function to return a randon color using random function
function randomcolor(){
  //store colors in an array
  var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  
         
  var num=Math.floor(Math.random() * colorArray.length);
           

  return colorArray[num];
  
}


function paintRandomColor(){
    var boxes=document.querySelectorAll('.gridElement');

    boxes.forEach((box) => {
  
      // and for each one we add a 'click' listener
      box.addEventListener('mouseover', (e) => {
          e.target.style.background = `${randomcolor()}`;
      });
    });
}
//listen to the click function of the multicolor button and call paintRadomColor button
multicolorButton.addEventListener('click',paintRandomColor);

//function to remove colors from the grid/ clear grid.
function clearGrids(){
  let gr=document.querySelectorAll(".gridElement");
  for(let i=0; i<gr.length;i++){
    gr[i].style.backgroundColor="white";
    gr[i].classList.remove("colored");
}
}

//listen for a click on the clear button and invoke the function
clearButton.addEventListener('click', clearGrid);