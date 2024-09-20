const payment = require("../json/payfip.js");

const notification = (req, res) => {
  console.log("Je reçois la notification");
  console.log(req);
  res.send("Notification reçue");
};

const redirection = (req, res) => {
  console.log("Je reçois la redirection");

  // Récupérer les paramètres de requête (req.query) côté serveur
  const params = {
    idop: req.query.idop,
    NUMCLI: req.query.NUMCLI,
    EXER: req.query.EXER,
    REFDET: req.query.REFDET,
    OBJET: req.query.OBJET,
    MONTANT: req.query.MONTANT,
    MEL: req.query.MEL,
    URLNOTIF: req.query.URLNOTIF,
    URLREDIRECT: req.query.URLREDIRECT,
    SAISIE: req.query.SAISIE,
  };

  console.log(params);

  // Envoyer les paramètres dans le HTML
  res.send(`
    <html>
      <body>
        <h1>Redirection reçue avec les paramètres suivants :</h1>
        <ul>
          <li><strong>ID Operation (idop):</strong> ${params.idop}</li>
          <li><strong>Numéro Client (NUMCLI):</strong> ${params.NUMCLI}</li>
          <li><strong>Exercice (EXER):</strong> ${params.EXER}</li>
          <li><strong>Référence Détail (REFDET):</strong> ${params.REFDET}</li>
          <li><strong>Objet (OBJET):</strong> ${params.OBJET}</li>
          <li><strong>Montant (MONTANT):</strong> ${params.MONTANT}</li>
          <li><strong>Email (MEL):</strong> ${params.MEL}</li>
          <li><strong>URL Notification (URLNOTIF):</strong> ${
            params.URLNOTIF
          }</li>
          <li><strong>URL Redirection (URLREDIRECT):</strong> ${
            params.URLREDIRECT
          }</li>
          <li><strong>Saisie (SAISIE):</strong> ${params.SAISIE}</li>
        </ul>
        <pre>${JSON.stringify(params, null, 2)}</pre>
      </body>
    </html>
  `);
};

module.exports = {
  notification,
  redirection,
};
