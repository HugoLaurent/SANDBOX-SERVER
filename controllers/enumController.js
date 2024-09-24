const enumData = {
  depense: [
    "FDS : Besoins Primaires",
    "FDS : Fluides (eau, edf, gaz)",
    "FDS : Frais liés au logement",
    "FDS : Insertion professionnelle",
    "FDS : Loyer",
    "FDS : Santé",
    "FDS : Transport",
    "HIA LEGOUEST D1585DI057",
    "6 CMA BESANCON D15869C025",
    "5 CMA STRASBOURG D1589SO067",
    "4 CMA METZ-D15881F057",
  ],
  recette: [
    "CARNET N°8 soit 7 tickets 903552621 au 23",
    "CARNET N°9 soit 7 tickets 903552622 au 29",
    "CARNET N°10 soit 7 tickets 903552623 au 35",
    "CARNET N°11 soit 7 tickets 903552624 au 41",
    "CARNET N°12 soit 7 tickets 903552625 au 47",
  ],
  note: ["NOTE 1", "NOTE 2", "NOTE 3", "NOTE 4", "NOTE 5"],
};

const getData = (req, res) => {
  const { type } = req.params;
  console.log("type", type);

  res.json(enumData[type]);
};

const deleteData = (req, res) => {
  const { type, value } = req.params;
  console.log("type", type);
  console.log("value", value);

  const index = enumData[type].indexOf(value);
  if (index > -1) {
    enumData[type].splice(index, 1);
    res.json({ message: `${value} supprimé avec succès` });
  } else {
    res.status(404).json({ message: `${value} introuvable` });
  }
};

const createData = (req, res) => {
  const { type } = req.params;
  const { value } = req.body;
  console.log("type", type);
  console.log("value", value);

  enumData[type].push(value);
  res.json({ message: `${value} créé avec succès` });
};

const updateData = (req, res) => {
  const { type, value } = req.params;
  const { newValue } = req.body;
  console.log("type", type);
  console.log("value", value);
  console.log("newValue", newValue);

  const index = enumData[type].indexOf(value);
  if (index > -1) {
    enumData[type][index] = newValue;
    res.json({ message: `${value} mis à jour avec succès` });
  } else {
    res.status(404).json({ message: `${value} introuvable` });
  }
};
