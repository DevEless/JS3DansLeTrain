
let jour = prompt("Quel jour de la semaine es-tu ?");

switch (jour) {
    case "lundi":
        console.log("Tu as cours à MolenGeek et tu as sport en soirée.");
        break;
    case "mardi":
        console.log("Tu as réunion de travail le matin et yoga le soir avec l'autre meuf la.");
        break;
    case "mercredi":
        console.log("Tu as cours de danse le matin et un rendez-vous chez le médecin l'après-midi.");
        break;
    case "jeudi":
        console.log("Tu as soirée jeux en ligne avec tes amis.");
        break;
    case "vendredi":
        console.log("Tu as rendez-vous au salon de coiffure et sortie cinéma avec tes collègues.");
        break;
    case "samedi":
        console.log("Tu as match de foot le matin et barbecue avec ta famille l'après-midi.");
        break;
    case "dimanche":
        console.log("Tu as promenade en forêt avec ton chien et après-midi lecture au calme.");
        break;
    default:
        console.log("Je ne connais pas ce jour de la semaine.");
}