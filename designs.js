// Select size and color input
var height;
var width;
var color = "colorPicker"
// When size is submitted by the user, call makeGrid()
const size = document.querySelector("sizePicker");
const pickColor = document.querySelector("#colorPicker");
const table = document.querySelector("#pixelCanvas")

$("#sizePicker").submit(function (event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);

});

// Creating table rows and table data
function makeGrid(height, width) {
  for (let row = 0; row < width; row++) {
    let newRow = table.insertRow();
    for (let cell = 0; cell < height; cell++) {
      let newCell = newRow.insertCell();
      newCell.onclick = changeColor;
    }
  }
  
  //Change color 
function changeColor(){
  this.style.background = pickColor.value;
  };
  
}
