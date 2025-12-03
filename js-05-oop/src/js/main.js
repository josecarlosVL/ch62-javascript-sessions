//document.getElementById("title").innerText = "Op in Javascript Cohorte62";
// console.log(participants);

//Importación nombrada
import { changePrincipalTitle } from "./modules/changePrincipalTitle.js"
import { changeLogo } from "./modules/changeLogo.js";
import { aliceUser } from "./modules/literalObject.js";
changePrincipalTitle("title");
changeLogo("bob.jpg");
console.log(aliceUser.getFullName());