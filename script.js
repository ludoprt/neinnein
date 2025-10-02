// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/

/* 
Close widget when clicked outside
*/
document.addEventListener("mouseover", (event) => {  
    if (event.target.closest('[class*="stonly-banner-wrapper"]')) {  
        StonlyWidget('track', 'banner');  
    }  
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.stn-wdgt')) {
        console.log("widget closed!");
        StonlyWidget('closeWidget');
    }
});

document.querySelector('.event').addEventListener('click', () => {
    StonlyWidget('track', 'buttonclicked');
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalbtn = document.getElementById("modalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modalbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const btn = document.querySelector(".butt"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function () {
    // The JS works in conjunction with the 'dipped' code in style.css
    bton.classList.toggle("dipped");
  }
}
const bton = document.querySelector(".but"); // Get the button from the page
// Detect clicks on the button
if (bton) {
  bton.onclick = function () {
    // The JS works in conjunction with the 'dipped' code in style.css
    bton.classList.toggle("dipped");
  }
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
const edgarOver = document.querySelector(".newbutt");
edgarOver.addEventListener("mouseover", () => {
 StonlyWidget("openGuide", {
    guideId: "PLSO9J2eKu",
  });
});

const clck = document.querySelector(".footer");
clck.addEventListener("click", () => {
    StonlyWidget("openKB", { 
      teamKnowledgeBaseId: "26480"
    });                 
  });
const gt = document.querySelector(".butttt");
gt.addEventListener("click", () => {
StonlyWidget('openGuidedTour', { guideId: "lFL9q5TK8U" });
   });
const clll = document.querySelector(".but");
clll.addEventListener("click", () => {
   StonlyWidget("openGuide", {
    guideId: "xtKzXdKeFl",
  });
});
/*
boutons ajout d'un query/retour sur le site sans que la page se recharge
*/
document.getElementById("test-btn").addEventListener("click", function () {
    history.pushState(null, "", "/neinnein/?test");
});

document.getElementById("normal-btn").addEventListener("click", function () {
    history.pushState(null, "", "/neinnein/");
});

// Get value from HTML element and send them to Stonly
const nameElement = document.querySelector("#name");
const mailElement = document.querySelector("#mail");

const nameValue = nameElement ? nameElement.textContent.trim() : "";
const mailValue = mailElement ? mailElement.textContent.trim() : "";

StonlyWidget('sendData', {
  guideData: {
    name: nameValue,
    mail: mailValue,
  },
});

 function selectDealer(dealerId) {
      const consentKey = `consent_dealer_${dealerId}`;
      const hasConsent = localStorage.getItem(consentKey);

      // Always send dealer_id
      StonlyWidget('identify', 'Poe', { dealer_id: dealerId });

      // Reset consent only if not yet accepted
      if (!hasConsent) {
        StonlyWidget('identify', 'Poe', { consent: ' ' });
      }
    }
