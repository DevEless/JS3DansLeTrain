let meteo = "pluie";

switch (meteo) {
    case "soleil":
        console.log("Il fait beau ! Biere.");
        break;
    case "nuage":
        console.log("Il y a quelques nuages dans le ciel, merci la belgique");
        break;
    case "pluie":
        console.log("Il pleut. Starfoufou je me barre au bled.");
        break;
    case "neige":
        console.log("Il neige.. Tout bien");
        break;
    case "orage":
        console.log("Il y a de l'orage, go geek");
        break;
    default:
        console.log("???? comment ça frérot.");
}