/* Aufgabe: Aufgabe 0
Name: Stefan Merdian
Datum: 05.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var i = "";
function main() {
    var i = prompt("Dein Name ?");
    var node = document.getElementById("content");
    node.innerHTML += "Servus ";
    node.innerHTML += i;
    node.innerHTML += ", wie gehts dir?.";
    console.log("Hallo ", i, ", wie gehts dir?.");
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=Aufgabe0.js.map