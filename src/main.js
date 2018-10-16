import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './tamagotchi.js';
import img1 from "./tamaalive.jpg";
import img2 from "./tamadead.jpg";

$(document).ready(function() {
  $("#alive").attr("src", img1);
  $("#dead").attr("src", img2);

  $.ajax({
   url: `https://api.giphy.com/v1/gifs/random?api_key=BU3f5x3Dt9ntdRhwUGdidx1jLgcgsZTu&tag=&rating=G`,
   type: 'GET',
   data: {
     format: 'json'
   },
   success: function(response) {
     $('#gif').append(`<img src=${response.data.images.fixed_height_downsampled.url} alt="some random gif">`);
   },
   error: function() {
     $('#error').text("There was an error processing your request. Please try again.");
   }
 });

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
