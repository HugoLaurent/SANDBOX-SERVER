const recetteData = require("./../json/recetteData.js");

const getRecette = (req, res) => {
  res.json(recetteData);
};

const getOneRecette = (req, res) => {
  const { id } = req.params;
  const recette = recetteData.find((recette) => recette.id === parseInt(id));
  if (recette) {
    res.json(recette);
  } else {
    res.status(404).json({ message: `Recette n° ${id} introuvable` });
  }
};

const createRecette = async (req, res) => {
  const doesExist = recetteData.find(
    (recette) => recette.reference === req.body.reference
  );

  const { reference, tiers, note, budgets, reglements } = req.body;
  let id = recetteData.length + 1;
  try {
    recetteData.push({
      id: id,
      reference,
      tiers,
      note,
      date: new Date(),
      budgets,
      reglements,
    });
    console.log(id);

    res.status(200).json({ message: `Recette n° ${id} créée avec succès` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRecette = async (req, res) => {
  console.log("Modification de la recette " + req.params.id);

  const { id } = req.params;
  const { reference, tiers, note, budgets, reglements } = req.body;
  const recette = recetteData.find((recette) => recette.id === parseInt(id));
  if (recette) {
    recette.reference = reference;
    recette.tiers = tiers;
    recette.note = note;
    recette.budgets = budgets;
    recette.reglements = reglements;
    res.json({ message: `Recette n° ${id} mise à jour avec succès` });
  } else {
    res.status(404).json({ message: `Recette n° ${id} introuvable` });
  }
};

module.exports = { getRecette, getOneRecette, createRecette, updateRecette };
