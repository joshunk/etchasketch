
makeNewGrid = function(){
    let gridSize = 0;
    gridSize = prompt("How many squares per side? (max. 100)");
    if (gridSize > 100){
        return;
    }
    else{
    //Prompt for input with a number that is less than 100 and then generate that many divs in a size that fits in the programmed width (currently 400px)
    //Something like button -> promptSize -> newDiv i < promptSize, make divs that are (400 / promptSize)
        document.getElementById("container").textContent = ''; //this resets the grid
        rowBuilder = gridSize * gridSize; // set the area for the square
        let gridCount = document.getElementsByClassName('gridBox');
        
        for (let i = 1; i <= rowBuilder; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = "gridBox"
            
            let divDimensions = 400 / gridSize;
            newDiv.style.height = divDimensions + "px"
            newDiv.style.width = divDimensions + "px"
            
            container.appendChild(newDiv);
        }

        for (let i = 0; i < gridCount.length; i++){
            gridCount[i].addEventListener("mouseenter", function(){
                gridCount[i].style.backgroundColor = "red";
            })
        }
}
}
// document.getElementById('gridButton').onclick = removeAllChildNodes("container");
document.getElementById('gridButton').onclick = makeNewGrid;


/*  Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
 Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
 Also check out prompts.
 You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used. */