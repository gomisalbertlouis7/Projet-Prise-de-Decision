// Fonction pour déterminer le prix du billet
function prixBillet(age) {
    let prix;
    switch (true) {
        case (age <= 12):
            prix = 10; // Enfant
            break;
        case (age >= 13 && age <= 17):
            prix = 15; // Adolescent
            break;
        case (age >= 18):
            prix = 20; // Adulte
            break;
        default:
            console.log("Âge invalide.");
            return;
    }

    console.log(`Le prix de votre billet de cinéma est : ${prix} $`);
}

console.log(prixBillet(23));

