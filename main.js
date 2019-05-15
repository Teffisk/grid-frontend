document.addEventListener("DOMContentLoaded", e => {
  /////////////// Box1 Change Background Color ///////////////
  let box1 = true;
  let box1Color;
  let randomColor;
  const colorize = color => {
    color =
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8);
    return color;
  };

  document.querySelector("#background-btn").addEventListener("click", e => {
    e.preventDefault();

    box1
      ? ((box1 = false), (box1Color = colorize(randomColor)))
      : ((box1 = true), (box1Color = "white"));
    document.querySelector("#box1").style.backgroundColor = box1Color;
  });

  //////////// Box2 Change Text Color ////////////
  let box2 = true;
  let box2Color;
  document.querySelector("#text-color").addEventListener("click", e => {
    e.preventDefault();
    box2
      ? ((box2 = false), (box2Color = "blue"))
      : ((box2 = true), (box2Color = "black"));
    document.querySelector("#box2").style.color = box2Color;
    console.log(box2, box2Color);
  });

  ////////// Box3 Hide Effect ////////
  // create the new unhide btn to be created
  const newBtn = document.createElement("img");
  // add attributes to the newly created button
  newBtn.setAttribute("id", "unhide-btn");
  newBtn.setAttribute("src", "./images/hidingcat.jpg");
  newBtn.setAttribute("alt", "Click to Unhide");

  // store the container as a variable
  const container = document.querySelector(".container");
  // create variable for box4 so box3 can be readded
  const box4 = document.querySelector("#box4");

  // store box3 as a variable
  const box3 = document.querySelector("#box3");

  // add event listener hide btn
  document.querySelector("#hide-btn").addEventListener("click", e => {
    e.preventDefault();
    // hide box3
    document.querySelector("#box3").remove();
    // add the new unhide btn
    container.insertBefore(newBtn, box4);
    // add the event listener to the unhide btn
    newBtn.addEventListener("click", e => {
      e.preventDefault();
      // insert box3 back into the container
      container.insertBefore(box3, box4);
      // remove itself
      newBtn.remove();
    });
  });

  //////// Box5 Enlarge Effect /////////////
  //   const popUp = document.createElement("div");
  //   popUp.setAttribute("id", "#popUp");
  //   const hidePopUp = document.createElement("button");
  //   hidePopUp.setAttribute("id", "hide-popup-btn");
  //   hidePopUp.setAttribute("value", "Hide Box");
  //   document.querySelector("#enlarge-btn").addEventListener("click", e => {
  //     e.preventDefault();
  //     container.appendChild(popUp);
  //     popUp.appendChild(hidePopUp);
  //     hidePopUp.addEventListener("click", e => {

  //     })
  //   });
});
