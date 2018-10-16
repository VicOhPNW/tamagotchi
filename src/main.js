import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './tamagotchi.js';
import img1 from "./tamaalive.jpg";
import img2 from "./tamadead.jpg";

$(document).ready(function() {
  console.log(img1);
  $("#alive").attr("src", img1);
  $("#dead").attr("src", img2);

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
        $("#tamaHide").hide();
        $("#alive").hide();
        $("#dead").show();
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
