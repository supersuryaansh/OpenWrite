/**
 * This script creates the popup with fetched data
 **/
 
var pop = {
  // (A) ATTACH POPUP HTML
  pWrap : null, 
  ptxt : null, 
  init : () => {

    pop.pWrap = document.createElement("div");
    pop.pWrap.id = "popwrap";
    document.body.appendChild(pop.pWrap);

    let pBox = document.createElement("div");
    pBox.id = "popbox";
    pop.pWrap.appendChild(pBox);

    pop.pText = document.createElement("p");
    pop.pText.id = "poptext";
    pBox.appendChild(pop.pText);

    let pClose = document.createElement("div");
    pClose.id = "popclose";
    pClose.innerHTML = "&#9746;";
    pClose.onclick = pop.close;
    pBox.appendChild(pClose);
  },

  open : (text) => {
    pop.pText.innerHTML = text;
    pop.pWrap.classList.add("open");
  },

  close : () => {
    pop.pWrap.classList.remove("open");
  }
};
window.addEventListener("DOMContentLoaded", pop.init);
