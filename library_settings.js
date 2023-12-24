/* Group Number : 3
Group Members : 
1. Naman Sharma
2. Ilaben Jayentbhai Patel
3. Parth Kumar Bhikadiya  
4. Muhammad Rizwan Aslam Rana */

export const setting = {
  name: "",
  //getting cards number from session storage, iF session storage doen,t have cards number setting it to default 48
  numbersOfCards:
    sessionStorage.getItem("numberOfCards") == null ||
    isNaN(sessionStorage.getItem("numberOfCards"))
      ? 48
      : parseInt(sessionStorage.getItem("numberOfCards")),
  // save name and number of cards to session
  saveSetting: (name, numberOfcards) => {
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("numberOfCards", numberOfcards);
  },

  //getting name and numbers of cards form session storage
  getSettings: () => ({
    name: sessionStorage.getItem("name"),
    numberOfcards: parseInt(sessionStorage.getItem("numberOfCards")),
  }),
  // setting name
  setName: () => {
    const name = sessionStorage.getItem("name");
    $("#name").text(name);
    $("#player_name").val(name);
  },
  //setting cards valuess
  setCards: () => {
    $("#num_cards").val(sessionStorage.getItem("numberOfCards"));
  },
};
