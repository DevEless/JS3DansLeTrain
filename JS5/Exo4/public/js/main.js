
let nbr1 = prompt("Saisissez le premier nombre :");
let operateur = prompt("Saisissez l'opérateur (+, -, * ou /) :");
let nbr2 = prompt("Saisissez le deuxième nombre :");

nbr1 = Number(nbr1);
nbr2 = Number(nbr2);

let resultat;
switch (operateur) {
    case "+":
        resultat = nbr1 + nbr2;
        break;
    case "-":
        resultat = nbr1 - nbr2;
        break;
    case "*":
        resultat = nbr1 * nbr2;
        break;
    case "/":
        resultat = nbr1 / nbr2;
        break;
    default:
        console.log("Opérateur non reconnu");
}


console.log(resultat);