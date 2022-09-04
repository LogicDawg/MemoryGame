const gameContainer = document.getElementById("game");
let clickCount = 0;
let clickedCards=[];
let matchedCards=[];

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  const selectedCard = event.target;
  
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

   if(clickCount <= 2){
      if(selectedCard.classList.contains("red")){
        selectedCard.style.backgroundColor = "red";
        clickCount++;
        clickedCards.push(selectedCard);
        }
      if(selectedCard.classList.contains("purple")){
        selectedCard.style.backgroundColor = "purple";
        clickCount++;
        clickedCards.push(selectedCard);
        }
      if(selectedCard.classList.contains("orange")){
        selectedCard.style.backgroundColor = "orange";
        clickCount++;
        clickedCards.push(selectedCard);
        }
      if(selectedCard.classList.contains("blue")){
        selectedCard.style.backgroundColor = "blue";
        clickCount++;
        clickedCards.push(selectedCard);
        }
      if(selectedCard.classList.contains("green")){
        selectedCard.style.backgroundColor = "green";
        clickCount++;
        clickedCards.push(selectedCard);
        }

          if(clickedCards.length>=2){    
          if(clickedCards[0].style.backgroundColor === clickedCards[1].style.backgroundColor && selectedCard !== clickedCards[0] ){          
              clickedCards=[];
              clickCount=0;

              
            }
          }
      }

  if(clickCount > 2)
  {
    if(clickedCards[0].style.backgroundColor !== clickedCards[1].style.backgroundColor || selectedCard === clickedCards[0]){
      for(let i =0; i < clickedCards.length;i++){
        clickedCards[i].style.backgroundColor = "white";
        }
        clickedCards=[];

    }
    clickCount=0;
    return;
    
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);


function hasBeenSelected(choosenCard){
  for(let card of clickedCards){
    if(choosenCard === card){ 
      console.log("Has Been Selected = true");
      return true;
    }else{
      console.log("Has Been Selected = false");
      return false;
    }
  }
}