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
  constructor() {
    this.playerOne = [];
    this.playerTwo = [];
  }
}

class Deck {
  constructor() {
    this.deck = 52;
  }

  shuffle() {
    for (let i = 0; i < this.deck; i++) {

    }
  }
}

class Game {

  // the start method will initalize the mainMenu mehtod at the time the browser starts. It will then display the mainMenu prompt and allow the user to start the game or exit. If the user decides to exit an alert will display.
  start() {
    let select = this.mainMenu();
    if (parseInt(select) === 1) {
      return this.mainMenu()
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

}



// //this variable creates the menu class
// let game = new Game();
// //After calling the start method this will initalize the main menu prompt
// game.start()