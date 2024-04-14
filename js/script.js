// declaration object array
// INPUT
const team = [
  {
    name: "Wayne Barnett",
    profession: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    profession: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    profession: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    profession: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    profession: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    profession: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

//  with for  and for in

// // LOGIC
// for(let i=0; i<team.length; i++){
//     const currElem = team[i];
//     let stringHTML = '<div class="card">';     // if "innerHTML = <div>"" , really result is "<div></div>"
//     console.log(currElem["name"]);                                 // brak notation
//     console.log(currElem["profession"]);
//     console.log(currElem["photo"]);
//     console.log(currElem.name);                                     // dot notation
//     console.log(currElem.profession);
//     console.log(currElem.photo);
// // LOGIC AND OUTPUT
//     for(let elem in currElem){                                         //for in
//         console.log(currElem[elem]);
//         console.log(elem);
//         if(elem !== "photo"){
//             stringHTML = stringHTML +`<span><strong>${currElem[elem]}</strong></span><br>`
//         } else{
//             stringHTML= stringHTML + `<img src="./img/${currElem[elem]}" alt=""></div><br>`
//             document.getElementById("result").innerHTML += stringHTML;
//         }
//     }
//     console.log("--------------------------------------------");
// }

//  with forEach
// const resultElem = document.getElementById("result");
// team.forEach((currElem) => {
//     console.log(currElem);
//     resultElem.innerHTML +=
//     `<div class="card">
//         <h2>${currElem.name}</h2>
//         <span>${currElem.profession}</span>
//         <img src="./img/${currElem.photo}">
//     </div>`
// });

// const resultElem = document.getElementById("result");
// with forEach and for in
// team.forEach((currElem) => {
//     let stringHTML = '<div class="card">';
//     for(let elem in currElem){                                         //for in
//                 console.log(currElem[elem]);
//                 if(elem !== "photo"){
//                     stringHTML = stringHTML +`<span><strong>${currElem[elem]}</strong></span><br>`
//                 } else{
//                     stringHTML= stringHTML + `<img src="./img/${currElem[elem]}" alt=""></div><br>`
//                     document.getElementById("result").innerHTML += stringHTML;
//                 }
//             }
// });

// print in function
const resultElem = document.getElementById("result");
team.forEach((currElem) => {
  const stringHTML = saveCard(currElem);
  // console.log(stringHTML);
  document.getElementById("result").innerHTML += stringHTML;
});

const formElem = document.getElementById("form");
const sendBtn = document.getElementById("send-btn");

// no refresh
formElem.addEventListener("click", function (noRefresh) {
  noRefresh.preventDefault();
});

// add new member
sendBtn.addEventListener("click", function () {
  if (
    document.getElementById("name").value != "" &&
    document.getElementById("name").value != "" &&
    document.getElementById("name").value != ""
  ) {
    const inputName = document.getElementById("name");
    const inputProfession = document.getElementById("profession");
    const inputPhoto = document.getElementById("photo");
    // console.log(inputName.value,inputProfession.value,inputPhoto.value);
    const newName = inputName.value;
    const newProfession = inputProfession.value;
    const newPhoto = inputPhoto.value;
    // console.log(newName,newProfession,newPhoto);
    const newMember = {
      name: newName,
      profession: newProfession,
      photo: newPhoto,
    };
    team.push(newMember);
    console.log(team);
    inputName.value= "";
    inputProfession.value= "";
    inputPhoto.value= "";
    
//  print new member in DOM
    const stringHTML = saveCard(newMember);
    // console.log(stringHTML);
    document.getElementById("result").innerHTML += stringHTML;
  } else{
    alert("hai lasciato dei campi vuoti");
  }

});
