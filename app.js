//game logic:
//creating a built in function for to check if there is any event
//creating an array for our cards
//creating a function to creat the game board
// creating a function to check for any matches
//creating a function to flip the cards



document.addEventListener('DOMContentLoaded', () => {
  //card options using an array
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random()) // randomizing the cardsarray:
  // the random fucntion will pick a number between -0.5 and 0.5 meaning: 
  // If the return value is negative, it means that a should come before b.
  //If the return value is positive, it means that b should come before a.
  //If the return value is zero, the order of a and b remains unchanged.

//variables and arrays needed
  const grid = document.querySelector('.grid') 
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img') //creating a constant for the image element 
      card.setAttribute('src', 'images/blank.png')//we put a blank image as if the cards are flipped
      card.setAttribute('data-id', i)//we will give each one a data id also, and loop thru the images so each card has its own image
      card.addEventListener('click', flipCard) //event listener to check if a card has been clicked on
      grid.appendChild(card)//putting the cards in the div grid that we created in the html file
    }
  }

  //check for matches
  function checkForMatch() {
     const optionOneId = cardsChosenId[0]//picking all the images that are created
     const optionTwoId = cardsChosenId[1]
    const cards = document.querySelectorAll('img') //creating a constant variable for the first option
     //creating a const var for the second option
    
    if(optionOneId == optionTwoId) { //checking if the 2 picked images are the same clicked image
      cards[optionOneId].setAttribute('src', 'images/blank.png') //asigning them to blank image which will turn the cards on thier backs
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!') 
    }

    else if (cardsChosen[0] === cardsChosen[1]) { // checking if the user found a match
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png') //replacing the correct matches with white images
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)//pushing the correct cards to the array cardsChosen
    } 

    else { //if the user picked the wrong images
      cards[optionOneId].setAttribute('src', 'images/blank.png') //asigning them to blank image that will flip the cards again because the user chose the wrong options
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = [] // clearing this array so we can use it again
    cardsChosenId = [] // clearing this array so we can use it again
    resultDisplay.textContent = cardsWon.length // making a text for the result
    if  (cardsWon.length === cardArray.length/2) { // checking if the user reached score 6 it means they won
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    //push explanation:
    // in 127 we push the name of the picture using the card-id to the card chosen array, so later on we can see how many cards we chose
    let cardId = this.getAttribute('data-id') // here we are getting the data-id attribute that we created above at create a board function
    cardsChosen.push(cardArray[cardId].name) // we will push the card based on the cardId from the cardArray
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img) //this setAttribute will help us set an image based on the cardId that it holds
    
    //now if we choose two images this condition will be triggered and it will call the function checkformatch
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)//setting 500ms so it doesnt happen too quickly
    }
  }

  createBoard()
})
