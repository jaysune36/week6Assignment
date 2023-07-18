
// this createList function accepts 1 argument to be looped through and create the list for the cards
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

class Players {
  constructor(name) {
    this.name = name;
    this.hand = [];
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
    if (parseInt(select) === 1) {
      console.log('the game has started');
    } else {
      alert('Thank you for playing!')
    }
  }

  // the mainMenu method will return a prompt to be display if the user would like to see the outcome of the game or exit.
  mainMenu() {
    return prompt(`
    Hello and welcome to WAR!
    Please select an option
    0) Exit
    1) Who wins Player 1 or Player 2
    `)
  }

  startGame() {
    this.players.push(new Players('Player One'));
    this.players.push(new Players('Player Two'));
    this.shuffleDeck()
    return this.players
  }

// the shuffleDeck method will create a new Deck using the new Deck() class and then using a for loop randomly push a card to player[0](or Player One)'s hand. The remaining cards will then be pushed to player 2's hand array. 
  shuffleDeck() {
    let deck = new Deck();
    deck.addCards();
    for (let i = 0; i < deck.cardsInDeck.length; i++) {
      let randomNumber = Math.floor(Math.random() * deck.cardsInDeck.length);
      let randomCard = deck.cardsInDeck[randomNumber];
      this.players[0].hand.push(randomCard);
      deck.cardsInDeck.splice(randomNumber, 1);
      if(this.players[0].hand.length === 26) {
        break;
      }
    }
    this.players[1].hand.push(...deck.cardsInDeck)
  }
}



//this variable creates the menu class
// let game = new Game();
// //After calling the start method this will initalize the main menu prompt
// game.start()