let meteo = prompt("quel est le temps d'aujourd'hui ?")

switch (meteo) {
    case "soleil":
        alert("Il fait beau ! Biere.");
        break;
    case "nuage":
        alert("Il y a quelques nuages dans le ciel, merci la belgique");
        break;
    case "pluie":
        alert("Il pleut. Starfoufou je me barre au bled.");
        break;
    case "neige":
        alert("Il neige.. Tout bien");
        break;
    case "orage":
        alert("Il y a de l'orage, go geek");
        break;
    default:
        alert("???? comment ça frérot.");
}