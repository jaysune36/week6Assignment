
// this createList function accepts 1 argument to be looped through and create the list for the cards to be stored in an array
function createList(item) {
  for (let j = 0; j < 10; j++) {
    if (item.length < 9) {
      item.push(j + 2)
    } else {
      item.push('J', 'Q', 'K', 'A');
      break;
    }
  }
}

// the faceCardPointConver will change a players.hand array item to a point to compare within gameBoard method of the game() class
function faceCardPointConvert(item) {
  let value = 0;
  switch (item) {
    case 'J':
      value = 11;
      break;
    case 'Q':
      value = 12;
      break;
    case 'K':
      value = 13;
      break;
    case 'A':
      value = 14;
      break;
    default:
      console.log(`Err. An incorrect value has been entered.`)
      break;
  }
  return value;
}

// This card call will keep track of all the cards and within each suit
class Cards {
  constructor() {
    this.cardTypes = {
      hearts: [],
      clubs: [],
      diamonds: [],
      spades: []
    }
  }
  // this createCards method when called will push to each card type array and add the associated cards and there suits to each array through a loop
  createCards() {
    for (let i = 0; i < 4; i++) {
      if (this.cardTypes.hearts.length != 13) {
        createList(this.cardTypes.hearts)
      } else if (this.cardTypes.clubs.length != 13) {
        createList(this.cardTypes.clubs)
      } else if (this.cardTypes.spades.length != 13) {
        createList(this.cardTypes.spades)
      } else if (this.cardTypes.diamonds.length != 13) {
        createList(this.cardTypes.diamonds)
      }
    }
    return this.cardTypes;
  }
}

// The player class will add players to the game and keep track of thhere hand through an array and points to be started at zero.
class Players {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.points = 0;
  }

  describe() {
    return `${this.name} has ${this.hand.length} in their hand. Here are there cards
    ${this.hand}
    `
  }
}

class Deck {
  constructor() {
    this.cardsInDeck = [];
  }

  // the addCards methods will create a new cards varialbe using the new Cards class. Then will call the createCards method to the cards variable and push the newly created cards to the this.deck property and return the property
  addCards() {
    let cards = new Cards();
    cards.createCards();
    this.cardsInDeck = [...cards.cardTypes.hearts, ...cards.cardTypes.clubs, ...cards.cardTypes.diamonds, ...cards.cardTypes.spades];
    return this.cardsInDeck;
  }
}

class Game {
  constructor() {
    this.players = [];
  }

  // the start method will initalize the mainMenu mehtod at the time the browser starts. It will then display the mainMenu prompt and allow the user to start the game or exit. If the user decides to exit an alert will display.
  start() {
    let select = this.mainMenu();
    if (parseFloat(select) === 1) {
      return this.startGame()
    } else {
      alert('Thank you for playing!')
    }
  }

  // the mainMenu method will return a prompt to be display if the user would like to see the outcome of the game or exit.
  mainMenu() {
    return prompt(`
    It's time to play WAR!
    Please select an option
    0) Exit
    1) Who wins Player 1 or Player 2
    `)
  }

  startGame() {
    this.players.push(new Players('Player One'));
    this.players.push(new Players('Player Two'));
    this.shuffleDeckAndDeal()
    this.gameBoard();
    this.replayGame();
    // console.log(this.players)
  }

  // the shuffleDeck method will create a new Deck using the new Deck() class and then using a for loop randomly push a card to player[0](or Player One)'s hand. The remaining cards will then be pushed to player 2's hand array. 
  shuffleDeckAndDeal() {
    let deck = new Deck();
    deck.addCards();
    for (let i = 0; i < deck.cardsInDeck.length; i++) {
      let randomNumber = Math.floor(Math.random() * deck.cardsInDeck.length);
      let randomCard = deck.cardsInDeck[randomNumber];
      this.players[0].hand.push(randomCard);
      deck.cardsInDeck.splice(randomNumber, 1);
      if (this.players[0].hand.length === 26) {
        break;
      }
    }
    this.players[1].hand.push(...deck.cardsInDeck)
  }

  //the gameBoard method will call both players in the this.players array and then compare each item within their arrays. The array will first compare if each item is a string or a number. If a string compares to a number that player adds a point. If both players have string or 'face card' than the faceCardPointConvert will change that player string item to a point and then compare and the winner with the higher number will have a point added to their points.
  gameBoard() {
    let player = this.players
    for (let i = 0; i < player[0].hand.length; i++) {
      if (typeof player[1].hand[i] === 'string' && typeof player[0].hand[i] === 'string') {
        let playerOneHandValue = faceCardPointConvert(player[0].hand[i]);
        let playerTwoHandValue = faceCardPointConvert(player[1].hand[i]);
        if (playerOneHandValue < playerTwoHandValue) {
          player[0].points += 1;
        } else {
          player[1].points += 1;
        }
      } else if (typeof player[0].hand[i] === 'string' && typeof player[1].hand[i] === 'number') {
        player[0].points += 1;
      } else if (typeof player[1].hand[i] === 'string' && typeof player[0].hand[i] === 'number') {
        player[1].points += 1;
      } else if (player[0].hand[i] > player[1].hand[i]) {
        player[0].points += 1;
      } else if (player[0].hand[i] < player[1].hand[i]) {
        player[1].points += 1;
      }
    }
  }

  // the replayGame method will prompt who the winner of the game was and then return the user back to the main menu.
  replayGame() {
    if (this.players[0].points > this.players[1].points) {
      alert(
        `${this.players[0].name} wins with ${this.players[0].points} points!`);
      this.players = [];
      this.start();
    } else if (this.players[0].points < this.players[1].points) {
      alert(
        `${this.players[1].name} wins with ${this.players[1].points} points!`);
      this.players = [];
      this.start();
    } else {
      alert(
        `It is a Tie! Both players had ${this.players[0].points} points!`);
      this.players = [];
      this.start();
    }
  }
}



//this variable creates the menu class
let game = new Game();
//After calling the start method this will initalize the main menu prompt
game.start()