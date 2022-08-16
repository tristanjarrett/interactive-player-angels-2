import React from 'react';
import lottie from "lottie-web";



const TabInteraction = (props) => {

  React.useEffect(() => {
    var lottieAnimation = lottie.loadAnimation({
      container: document.getElementById("container-lottie"), // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: './tab_interaction.json' // the path to the animation json
    });
    
    lottieAnimation.addEventListener("DOMLoaded", function (e) {
      // NOT the same as DOMContentLoaded
      lottieAnimation.playSegments([0, 89], true);
    
      console.log("DOMLoaded fired");
    
      var tab1 = document.getElementById("tab_01");
      var tab2 = document.getElementById("tab_02");
      var tab3 = document.getElementById("tab_03");
    
      tab1.onclick = function () {
        console.log("tab_01 was clicked");
        lottieAnimation.playSegments([0, 89], true);
      };
      tab2.onclick = function () {
        console.log("tab_02 was clicked");
        lottieAnimation.playSegments([90, 179], true);
      };
      tab3.onclick = function () {
        console.log("tab_03 was clicked");
        lottieAnimation.playSegments([180, 269], true);
      };
    });
    
  }, []);

  return (
    <div id="container-lottie">
      <h3 className="sub-title">In these hospitals, more than 50% of stroke patients could end up severely disabled or dead.</h3>

    </div>
  );
}

export default TabInteraction;