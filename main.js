for (let i = 1; i <= 256; i++) {
	let newDiv = document.createElement('div');
    newDiv.className = "gridBox"
	
	container.appendChild(newDiv);
}

let gridCount = document.getElementsByClassName('gridBox');

 for (let i = 0; i < gridCount.length; i++){
    gridCount[i].addEventListener("mouseenter", function(){
        gridCount[i].style.backgroundColor = "red";
    })
 }

