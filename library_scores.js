/* Group Number : 3
Group Members : 
1. Naman Sharma
2. Ilaben Jayentbhai Patel
3. Parth Kumar Bhikadiya  
4. Muhammad Rizwan Aslam Rana */

import { setting } from "./library_settings.js";
export const scores = (() => {
  let totalAttempts = 0;
  let foundcards = 0;
  return {
    //Save High score to local storage
    saveHighScoreToSession: (scores) => {
      // over here scores means priviousHighscore and succssRate mean Current Highscore
      // fingding current highscore
      const sucessRate = ((100 * foundcards) / totalAttempts).toFixed(0);
      // checking if privious highscore is number or not
      if (isNaN(scores)) {
        scores = sucessRate;
      } else {
        scores = scores < sucessRate ? sucessRate : scores;
      }
      // settting high score to local storage
      localStorage.setItem("highscorez", scores);
    },
    // getting highscore from loalstorage
    getHighScores: () => parseInt(localStorage.getItem("highscorez")),
    //public method for increment totalAttems value
    incTotalAttenps: () => {
      totalAttempts += 1;
    },
    //public method for increment FoundCards value
    incFoundCards: () => {
      foundcards += 1;
    },

    getTotalAttempts: () => totalAttempts,
    getFoundCards: () => foundcards,
    // checking if all the cards are founded
    checkForWin: () => foundcards * 2 === setting.numbersOfCards,
    //get current score
    getSucessRate: () => (foundcards / totalAttempts).toFixed(0),
    //set current score to span
    setSuceessRate: () => {
      $("#scorz").text(((100 * foundcards) / totalAttempts).toFixed(0));
    },
    //setHigh score to span
    setHighscore: () => {
      const high = parseInt(localStorage.getItem("highscorez"));
      if (!isNaN(high)) {
        $("#highscorez").text(high);
      }
    },
  };
})();
