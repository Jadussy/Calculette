// Recupe le <p> pour écrire le chiffre du bouton cliquer actuelle
const pNode = document.getElementById("ecrit")

// Variable Tableau du calcul
var temp = [];
// Ajouts des variables des boutons
const un = document.getElementById("un");
const deux = document.getElementById("deux");
const trois = document.getElementById("trois");
const quatre = document.getElementById("quatre");
const cinq = document.getElementById("cinq");
const six = document.getElementById("six");
const sept = document.getElementById("sept");
const huit = document.getElementById("huit");
const neuf = document.getElementById("neuf");
const zero = document.getElementById("zero");

const addition = document.getElementById("addition");
const soustraction = document.getElementById("soustraction");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");

const egal = document.getElementById("egal");


// Evenement click des boutons
// function Events(boutton,valeur) { }

// switch ()



un.addEventListener("click", (event) => {
    pNode.innerText += 1;
    temp.push(1);
});
deux.addEventListener("click", (event) => {
    pNode.innerText +=  2;
    temp.push(2);
});
trois.addEventListener("click", (event) => {
    pNode.innerText +=  3;
    temp.push(3);
});
quatre.addEventListener("click", (event) => {
    pNode.innerText +=  4;
    temp.push(4);
});
cinq.addEventListener("click", (event) => {
    pNode.innerText +=  5;
    temp.push(5);
});
six.addEventListener("click", (event) => {
    pNode.innerText +=  6;
    temp.push(6);
});
sept.addEventListener("click", (event) => {
    pNode.innerText +=  7;
    temp.push(7);
});
huit.addEventListener("click", (event) => {
    pNode.innerText +=  8;
    temp.push(8);
});
neuf.addEventListener("click", (event) => {
    pNode.innerText +=  9;
    temp.push(9);
});
zero.addEventListener("click", (event) => {
    pNode.innerText +=  0;
    temp.push(0);
});

addition.addEventListener("click", (event) => {
    pNode.innerText +=  "+";
    temp.push("+");
});
soustraction.addEventListener("click", (event) => {
    pNode.innerText +=  "-";
    temp.push("-");
});
division.addEventListener("click", (event) => {
    pNode.innerText +=  "/";
    temp.push("/");
});
multiplication.addEventListener("click", (event) => {
    pNode.innerText +=  "*";
    temp.push("*");
});
ac.addEventListener("click", (event) => {
    pNode.innerText = "";
    temp = [];
});

egal.addEventListener("click", (event) => {
    pNode.innerText +=  " =";
    // dérouler les éléments du tableau temp
    for (var i = 0; i < temp.length; i++) {
        //console.log(temp[i]);
      }
    console.log(temp.join());
});


