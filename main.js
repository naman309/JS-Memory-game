import { setting } from "./library_settings.js";
import { scores } from "./library_scores.js";
import { cards } from "./library_cards.js";

$(() => {
  //making tabs
  $("#tabs").tabs();
  //setting highscore, name and cards
  scores.setHighscore();
  cards.randomCardList();
  setting.setCards();
  setting.setName();
  //saving setting into the session on click of save satting button
  $("#save_settings").click(() => {
    const val = $("#num_cards").val();
    const name = $("#player_name").val();
    setting.saveSetting(name, val);
    setting.setName();
    setting.setCards();
    //redirecting to index.html
    location.href = "index.html";
  });
  ;
  cards.gameCreation();
});
