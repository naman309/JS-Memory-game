/* Group Number : 3
Group Members : 
1. Naman Sharma
2. Ilaben Jayentbhai Patel
3. Parth Kumar Bhikadiya
4. Muhammad Rizwan Aslam Rana   */

export class Card {
  constructor(card) {
    this.id = card.getAttribute("data-id");
    this.img = card.getAttribute("src");
  }
  // check if card that clicked on us not has blank image and not reveled yet
  isReveled() {
    if (this.img != "./images/blank.png" && this.img == "./images/back.png") {
      return this.id;
    }

    return false;
  }
  //setting name to the card
  setName(name) {
    this.name = name;
  }
  //check if previousCard and this cards name is matching
  isCardMatch(priviousName) {
    return priviousName === this.name;
  }
}
