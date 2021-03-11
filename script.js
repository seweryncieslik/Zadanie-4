let Word = "AlA";
let Normal = "";
let Reverse = "";
let TestString = Word.toUpperCase();
console.log ("Testowane slowo: "+ TestString);

for (let i=0; i < TestString.length; i++) {
    Normal = Normal + TestString[i]; 
}
for (let i=TestString.length -1 ; i >= 0; i--) {
    Reverse = Reverse + TestString[i];   
}
if (Normal===Reverse){
    console.log ("To jest palindrom")
}
else
{
    console.log ("To nie jest palindrom")
}