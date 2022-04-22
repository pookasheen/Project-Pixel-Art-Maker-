// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
  //console.log('Height: ' + height + ' and width: ' + width);
})


function makeGrid(a, b) {
  $('tr').remove();

// Your code goes here!
 for (var 1 = 1; 1 <= a; 1++) {
   $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
   for(var j = 1; j <=b; j++) {
     $('#table' + i).append('<td></td>');
   }
 } 
  
   //adding color to cell
   $('td').click(function addColor() {
     color = $('#colorPicker').val(); 
     
     if ($(this).attr('style')) {
         $(this).removeAttr('style') 
     } else {
       $(this).attr('style', 'background-color:' + color);
     }
  })
}
  
