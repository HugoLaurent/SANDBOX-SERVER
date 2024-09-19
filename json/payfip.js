// Données de test pour PayFiP

const payfipData = [
  {
    // NUMCLI: Le numéro client attribué à la collectivité par l’administrateur PayFiP (obligatoire, 6 caractères numériques)
    NUMCLI: "083198",

    // EXER: Code exercice, entrée libre pour indiquer l'année ou l'exercice comptable (obligatoire, 4 caractères numériques)
    EXER: "2023",

    // REFDET: Référence de la dette, identifiant unique pour la transaction, sans caractères spéciaux (obligatoire, 6 à 30 caractères alphanumériques)
    REFDET: "FACT20230001",

    // OBJET: Description de l'objet de l'opération, pas de données personnelles (facultatif, < 100 caractères alphanumériques + espaces)
    OBJET: "Payment for public service",

    // MONTANT: Montant de la facture en centimes, sans point ni virgule (obligatoire, jusqu'à 11 chiffres numériques)
    // En phase de test, les centimes doivent être nuls (00)
    MONTANT: "100000",

    // MEL: Adresse email valide de l'usager (obligatoire, 6 à 80 caractères)
    MEL: "user@example.com",

    // URLNOTIF: URL pour la notification de serveur à serveur après paiement (obligatoire, < 250 caractères)
    URLNOTIF: "https://yourdomain.com/notification",

    // URLREDIRECT: URL de redirection de l'usager après paiement pour l'affichage des informations récapitulatives (obligatoire, < 250 caractères)
    URLREDIRECT: "https://yourdomain.com/redirect",

    // SAISIE: Mode de saisie - "T" pour test, "X" pour activation, "W" pour réel (obligatoire, 1 caractère)
    SAISIE: "T",
  },
  {
    NUMCLI: "083198",
    EXER: "2024",
    REFDET: "INV20240002",
    OBJET: "Invoice payment",
    MONTANT: "500000",
    MEL: "contact@domain.com",
    URLNOTIF: "https://anotherdomain.com/notification",
    URLREDIRECT: "https://anotherdomain.com/redirect",
    SAISIE: "X",
  },
  {
    NUMCLI: "083198",
    EXER: "2022",
    REFDET: "PAY20220003",
    OBJET: "School fee payment",
    MONTANT: "250000",
    MEL: "student@school.com",
    URLNOTIF: "https://schooldomain.com/notification",
    URLREDIRECT: "https://schooldomain.com/redirect",
    SAISIE: "W",
  },
];

module.exports = payfipData;
