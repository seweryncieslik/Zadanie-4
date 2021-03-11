let Word = "AlA";
let Normal = "";
let Reverse = "";
let TestString = Word.toUpperCase();
console.log ("Testowane slowo: "+ TestString);

function Checker () {
for (let i=0; i < TestString.length; i++) {
    Normal = Normal + TestString[i]; 
}
for (let i=TestString.length -1 ; i >= 0; i--) {
    Reverse = Reverse + TestString[i];   
}
if (Normal===Reverse){
    console.warn ("To jest palindrom");
}
else
{
    console.error("To nie jest palindrom");
}
}
Checker();
// Mozna tez bez funkcji.