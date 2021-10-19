const list = document.querySelector("#passengerList");
const errorMsg = document.querySelector(".error__message");
const addName = document.querySelector("#addName");
const textInput = document.querySelector("#textInput");
const fastTrack = document.querySelector("#fastTrack");
const checkIn = document.querySelector("#remove");

let passengersList = [];
//Add passengers to list
addName.addEventListener("click", () => {
  if (textInput.value !== "") {
    passengersList.push(textInput.value);
    console.log(passengersList);
    let listItem = document.createElement("li");
    listItem.className = "passenger";
    listItem.innerText = textInput.value;
    let vipButton = document.createElement("button");
    vipButton.innerText = "Vip CheckIn";
    //Vip button for every passenger
    vipButton.addEventListener("click", (e) => {
      let vipLi = e.target.parentElement;
      list.prepend(vipLi);
    });
    listItem.appendChild(vipButton);
    list.appendChild(listItem);
    textInput.value = "";
    console.log(list);
    if (list.length === 0) {
      errorMsg.style.display = "block";
    } else {
      errorMsg.style.display = "none";
    }
  }
});
//Fast track button
fastTrack.addEventListener("click", () => {
  if (textInput.value !== "") {
    passengersList.unshift(textInput.value);
    console.log(passengersList);
    let listItem = document.createElement("li");
    listItem.className = "passenger";
    listItem.innerText = textInput.value;
    list.prepend(listItem);
    textInput.value = "";
  }
});
//Remove the first passenger
checkIn.addEventListener("click", (e) => {
  console.log("list: " + passengersList);
  if (passengersList.length !== 0) {
    passengersList.shift();
    list.removeChild(list.childNodes[0]);
    if (passengersList.length === 0) {
      errorMsg.style.display = "block";
    }
  }
});
