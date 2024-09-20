const payment = require("../json/payfip.js");

const notification = (req, res) => {
  console.log("Je reçois la notification");

  // Afficher les paramètres de la requête (query, params)
  console.log("REQ LOGS:", req);

  res.send("Notification reçue");
};

const redirection = (req, res) => {
  console.log("Je reçois la redirection");

  // Récupérer les paramètres de requête (req.query) côté serveur
  const params = {
    idop: req.query.idop,
  };

  console.log(params);

  // Envoyer les paramètres dans le HTML
  res.send(`
    <html>
      <body>
        <h1>Redirection reçue avec les paramètres suivants :</h1>
        <ul>
          <li><strong>ID Operation (idop):</strong> ${params.idop}</li>
          
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
