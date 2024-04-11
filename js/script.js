// declaration object array
// INPUT
const team =[
    {
        name: "Wayne Barnett",
        profession: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg" 
    },
    {
        name: "Walter Gordon",
        profession: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        profession: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]

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
const resultElem = document.getElementById("result");

// team.forEach((currElem) => { 
//     console.log(currElem);
//     resultElem.innerHTML += 
//     `<div class="card">
//         <h2>${currElem.name}</h2>
//         <span>${currElem.profession}</span>
//         <img src="./img/${currElem.photo}">
//     </div>`
// });


with forEach and for in
team.forEach((currElem) => { 
    let stringHTML = '<div class="card">'; 
    for(let elem in currElem){                                         //for in    
                console.log(currElem[elem]);
                if(elem !== "photo"){
                    stringHTML = stringHTML +`<span><strong>${currElem[elem]}</strong></span><br>`
                } else{
                    stringHTML= stringHTML + `<img src="./img/${currElem[elem]}" alt=""></div><br>`
                    document.getElementById("result").innerHTML += stringHTML;
                }
            }
});