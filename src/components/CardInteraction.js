import React from 'react';
import lottie from "lottie-web";


const TabInteraction = (props) => {

  

  React.useEffect(() => {
    var lottieAnimation = lottie.loadAnimation({
      container: document.getElementById("container-lottie"), // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "./card_interaction.json" // the path to the animation json
    });
    
    lottieAnimation.addEventListener("DOMLoaded", function (e) {
      // NOT the same as DOMContentLoaded
    
      // console.log("DOMLoaded fired");
    
      var card1 = document.getElementById("card1_button");
      var card2 = document.getElementById("card2_button");
      var card3 = document.getElementById("card3_button");
      var card1_rev = document.getElementById("card1_button_rev");
      var card2_rev = document.getElementById("card2_button_rev");
      var card3_rev = document.getElementById("card3_button_rev");
    
      card1.addEventListener('click', () => {
        console.log("card1_button was clicked");
        lottieAnimation.playSegments([0, 10], true);
      });
      card1_rev.addEventListener('click', () => {
        console.log("card1_button_rev was clicked");
        lottieAnimation.playSegments([20, 29], true);
      });
      card2.addEventListener('click', () => {
        console.log("card2_button was clicked");
        lottieAnimation.playSegments([30, 40], true);
      });
      card2_rev.addEventListener('click', () => {
        console.log("card2_button_rev was clicked");
        lottieAnimation.playSegments([50, 59], true);
      });
      card3.addEventListener('click', () => {
        console.log("card3_button was clicked");
        lottieAnimation.playSegments([60, 70], true);
      });
      card3_rev.addEventListener('click', () => {
        console.log("card3_button_rev was clicked");
        lottieAnimation.playSegments([80, 89], true);
      });
    });
    
    
  }, []);

  return (
    <div id="container-lottie"></div>
  );
}

export default TabInteraction;