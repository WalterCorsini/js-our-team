// declaration object array

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

for(let i=0; i<team.length; i++){
    const currElem = team[i];
    let stringHTML = '<div id="card">';
    // console.log(currElem["name"]);                                 // brak notation
    // console.log(currElem["profession"]);
    // console.log(currElem["photo"]);
    // console.log(currElem.name);
    // console.log(currElem.profession);
    // console.log(currElem.photo);
    for(let elem in currElem){                                         //for in    
        console.log(currElem[elem]);
        console.log(elem);
        if(elem !== "photo"){
            stringHTML = stringHTML +`<span>${currElem[elem]}</span><br>`
        } else{
            stringHTML= stringHTML + `<img src="./img/${currElem[elem]}" alt=""></div><br>`
            document.getElementById("result").innerHTML += stringHTML;
        }
    }
    console.log("--------------------------------------------");
    
}