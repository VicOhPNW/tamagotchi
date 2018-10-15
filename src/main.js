import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function() {
  $("#tamagotchiName").submit(function(event){
    event.preventDefault();

    let name = $("#tamagotchiInput").val();
    let newTamagotchi = new Tamagotchi(name);


    newTamagotchi.setHunger();
    newTamagotchi.setSleep();
    newTamagotchi.setLove();

    setInterval(() => {
      $("#food").text(newTamagotchi.getFood());
      $("#sleep").text(newTamagotchi.getSleep());
      $("#pet").text(newTamagotchi.getLove());
      if (newTamagotchi.getLife() === true){
        $("#life").text("Alive.");
      } else {
        $("#life").text("Dead.")
      }
    }, 10);

    $("#tamaName").text(name);
    $("#tamagotchiName").hide();
    $("#newTamagotchi").show();


    $("#food-button").click(function(){
      newTamagotchi.giveFood();
    });
    $("#sleep-button").click(function(){
      newTamagotchi.giveSleep();
    });
    $("#pet-button").click(function(){
      newTamagotchi.giveLove();
    });
  });
});
