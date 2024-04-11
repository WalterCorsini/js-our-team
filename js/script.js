// declaration object array

const team =[
    {
        name: "Wayne Barnett",
        profession: "Founder & CEO",
        photo: "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        photo: "./img/angela-caroll-chief-editor.jpg" 
    },
    {
        name: "Walter Gordon",
        profession: "Office Manager",
        photo: "./img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        photo: "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        profession: "Developer",
        photo: "./img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        photo: "./img/barbara-ramos-graphic-designer.jpg"
    }
]

for(let i=0; i<team.length; i++){
    const currElem = team[i];
    // console.log(currElem.name);                                     // dot notation
    // console.log(currElem.profession);
    // console.log(currElem.photo);
    console.log("--------------------------------------------");
    // console.log(currElem["name"]);                                 // brak notation
    // console.log(currElem["profession"]);
    // console.log(currElem["photo"]);
    for(let elem in currElem){                                         //for in
        
        console.log(currElem[elem]);
    }
}