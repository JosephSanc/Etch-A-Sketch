//Here we'll make an element for the wrapper div that will contain all other divs
wrapper = document.querySelector(".wrapper");

//Here we'll make a variable that references the clear button
let clearButton = document.querySelector("button");

//In this for loop we'll make a 16 by 16 grid of divs
for(i = 0; i < 16 * 16; i++){
  let gridBox = document.createElement("div"); //creating individual gridbox div that'll be repeated for the length of the loop
  gridBox.setAttribute("style", "border: 1px black solid; height: 40px; width: 40px; background-color: white"); //Styling the divs
  gridBox.classList.add("gridBox");                 //Adding class "gridbox" to the gridboxes
  gridBox.addEventListener("mouseover", function(){ //
    gridBox.style.backgroundColor = "red";          //Event listener that changes color of boxes
  })                                                //
  clearButton.addEventListener("click", function(){ //
    gridBox.style.backgroundColor = "white";        //Event listener that clears the grid
  })                                                //
  wrapper.appendChild(gridBox);                     //Adding gridbox to wrapper div
}



