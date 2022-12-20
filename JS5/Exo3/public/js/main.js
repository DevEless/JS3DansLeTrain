let valeur = prompt("Saisissez une valeur :");


switch (true) {
    case (valeur % 2 === 0):

        alert("Le nombre est un multiple de 2");
        break;
    case (isNaN(valeur)):

        alert("Ceci n'est pas un nombre");
        break;
    default:

        alert("Le nombre n'est pas un multiple de 2");
}