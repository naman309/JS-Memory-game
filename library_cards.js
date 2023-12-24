import { setting } from "./library_settings.js";
import { Card } from "./library_card.js";
import { scores } from "./library_scores.js";

export const cards = (() => {
  //span id
  const cardz = $("#cards");
  const back = "./images/back.png";
  const blank = "./images/blank.png";

  let choseCardsObj = [];

  let cardlist = [];
  let cardslist = [
    { name: "card_1", img: "./images/card_1.png" },
    { name: "card_2", img: "./images/card_2.png" },
    { name: "card_3", img: "./images/card_3.png" },
    { name: "card_4", img: "./images/card_4.png" },
    { name: "card_5", img: "./images/card_5.png" },
    { name: "card_6", img: "./images/card_6.png" },
    { name: "card_7", img: "./images/card_7.png" },
    { name: "card_8", img: "./images/card_8.png" },
    { name: "card_9", img: "./images/card_9.png" },
    { name: "card_10", img: "./images/card_10.png" },
    { name: "card_11", img: "./images/card_11.png" },
    { name: "card_12", img: "./images/card_12.png" },
    { name: "card_13", img: "./images/card_13.png" },
    { name: "card_14", img: "./images/card_14.png" },
    { name: "card_15", img: "./images/card_15.png" },
    { name: "card_16", img: "./images/card_16.png" },
    { name: "card_17", img: "./images/card_17.png" },
    { name: "card_18", img: "./images/card_18.png" },
    { name: "card_19", img: "./images/card_19.png" },
    { name: "card_20", img: "./images/card_20.png" },
    { name: "card_21", img: "./images/card_21.png" },
    { name: "card_22", img: "./images/card_22.png" },
    { name: "card_23", img: "./images/card_23.png" },
    { name: "card_24", img: "./images/card_24.png" },
  ];

  //function for flipping card
  function flipCard() {
    // creating cards class object
    const paper = new Card(this);
    if (choseCardsObj.length != 2) {
      //checking if card is reveled or not
      var revelCardid = paper.isReveled();
      if (revelCardid) {
        //setting name to card class object
        paper.setName(
          //getting name from the cardlist based on the id of the card
          cardlist[revelCardid].name
        );
        //pusing the card class object to array
        choseCardsObj.push(paper);
        //seeting image in the card insted of back of the card
        this.setAttribute("src", cardlist[revelCardid].img);
        //checking if card that we select is second one than proceed to matching card
        if (choseCardsObj.length == 2) {
          setTimeout(matchCards, 400);
        }
      }
    }
  }

  function matchCards() {
    const cardm = $("img");
    //getting both card object
    const [cardObj1, cardObj2] = choseCardsObj;
    // if name of both card is same than set both image as a blank
    if (cardObj2.isCardMatch(cardObj1.name)) {
      //if both card are same set blank card image
      cardm[cardObj1.id].setAttribute("src", blank);
      cardm[cardObj2.id].setAttribute("src", blank);
      scores.incFoundCards();
    } else {
      //if both cards are not same set back image again
      cardm[cardObj1.id].setAttribute("src", back);
      cardm[cardObj2.id].setAttribute("src", back);
    }
    //emptying array
    choseCardsObj = [];
    //increase attempt
    scores.incTotalAttenps();
    //calculating score
    scores.setSuceessRate();
    //checking if all the cards are reaveled
    if (scores.checkForWin()) {
      //save highsocre to session storege
      scores.saveHighScoreToSession(
        //get highscore after compareing current and privious highscore
        scores.getHighScores()
      );
      //setting high score to span
      scores.setHighscore();
      //creating element to display win
      const div = document.createElement("div");
      const h1 = document.createElement("h1");
      h1.append(`YOU WIN THE GAME`);
      div.append(h1);
      cardz.text("");
      cardz.append(div);
    }
  }
  // creating card
  const createCard = (i) => {
    let paper = document.createElement("img");
    paper.setAttribute("src", back);
    paper.setAttribute("data-id", i);
    //setting click event to card
    paper.addEventListener("click", flipCard.bind(paper));
    return paper;
  };

  return {
    //creating function that return random cards based on numberofCards mentioned in settng
    randomCardList: () => {
      console.log(setting.numbersOfCards);
      //spliting array to certian lenth
      cardslist.length = setting.numbersOfCards / 2;
      //adding another same array so array has same two element
      const newcardlist = [...cardslist, ...cardslist];
      //sorting in random manner
      cardlist = newcardlist.sort(() => 0.5 - Math.random());
      return cardlist;
    },
    getBlankURL: () => blank,
    getBackURL: () => back,
    //appending every cards to cardz tabsss
    gameCreation: () => {
      for (const i in cardlist) {
        cardz.append(createCard(i));
      }
    },
  };
})();
