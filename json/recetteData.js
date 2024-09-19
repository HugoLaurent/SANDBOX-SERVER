const recetteData = [
  {
    id: 1,
    tiers: "John Smith",
    note: "NOTE 2",
    date: "2024-08-27T10:15:00.000Z",
    budgets: [
      {
        id: 1,
        modele: "Boutique",
        budget: "ENFJ - 212 - 7089 - Formation des enfants",
        quantite: "5",
        prixUnitaire: "20",
        date: "2024-08-26T10:15:00.000Z",
        nonVersable: false,
        commentaire: "A prévoir pour la rentrée",
      },
    ],
    reglements: [
      {
        id: 1,
        reglement: "001-Carte Bancaire",
        montant: "100",
        tiersPayeur: "Papa",
        nonVersable: false,
        referencesExternes: true,
      },
      {
        id: 2,
        reglement: "001-Carte Bancaire",
        montant: "100",
        tiersPayeur: "Maman",
        nonVersable: false,
        referencesExternes: true,
      },
    ],
  },
  {
    id: 2,
    reference: "6789",
    tiers: "Alice Dupont",

    date: "2024-08-28T14:22:45.000Z",
    budgets: [
      {
        id: 1,
        modele: "Salle",
        budget: "ENFJ - 213 - 7090 - Matériel pédagogique",
        quantite: "10",
        prixUnitaire: "5",
        date: "",
        nonVersable: true,
        commentaire: "À commander avant fin de semaine",
      },
    ],
    reglements: [
      {
        id: 1,
        reglement: "002-Espèce",
        montant: "50",
        tiersPayeur: false,
        nonVersable: false,
        referencesExternes: false,
      },
    ],
  },
  {
    id: 3,
    reference: "7890",
    tiers: "Paul Martin",
    note: "",
    date: "2024-08-29T09:30:20.000Z",
    budgets: [
      {
        id: 1,
        modele: "Événement",
        budget: "ENFJ - 214 - 7091 - Activités de groupe",
        quantite: "3",
        prixUnitaire: "35",
        date: "",
        nonVersable: false,
        commentaire: "Prévoir pour le mois prochain",
      },
    ],
    reglements: [
      {
        id: 1,
        reglement: "003-Virement Bancaire",
        montant: "105",

        nonVersable: false,
        referencesExternes: true,
      },
    ],
  },
  {
    id: 4,
    reference: "8901",
    tiers: "Marie Leclerc",
    note: "NOTE 5",
    date: "2024-08-30T16:05:12.000Z",
    budgets: [
      {
        id: 1,
        modele: "Service",
        budget: "ENFJ - 215 - 7092 - Transport scolaire",
        quantite: "7",
        prixUnitaire: "8",
        date: "",
        nonVersable: false,
        commentaire: "Assurer la disponibilité des places",
      },
    ],
    reglements: [
      {
        id: 1,
        reglement: "001-Carte Bancaire",
        montant: "56",
        tiersPayeur: false,
        nonVersable: false,
        referencesExternes: false,
      },
      {
        id: 2,
        reglement: "002-Espèce",
        montant: "56",
        tiersPayeur: true,
        nonVersable: false,
        referencesExternes: true,
      },
    ],
  },
  {
    id: 5,
    reference: "9012",
    tiers: "Sophie Bernard",

    date: "2024-08-31T12:10:05.000Z",
    budgets: [
      {
        id: 1,
        modele: "Atelier",
        budget: "ENFJ - 216 - 7093 - Fournitures artistiques",
        quantite: "15",
        prixUnitaire: "12",
        date: "",
        nonVersable: false,
        commentaire: "Prévoir des coupons de réduction",
      },
    ],
    reglements: [
      {
        id: 1,
        reglement: "003-Virement Bancaire",
        montant: "180",
        tiersPayeur: false,
        nonVersable: true,
        referencesExternes: false,
      },
    ],
  },
];
module.exports = recetteData;
