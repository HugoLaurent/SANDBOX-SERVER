const payment = require("../json/payfip.js");

const notification = (req, res) => {
  console.log("notification", req.headers.idop);
  console.log(req.body);
  console.log(req.body.headers);

  setTimeout(() => {
    res.send(false);
  }, 5000);
};

const redirection = (req, res) => {
  console.log("Je reçois la redirection");
  console.log("redirection", req.headers.idop);
  console.log(req.body);
  console.log(req.body.headers);

  // Récupérer les paramètres de requête (req.query) côté serveur
  const params = {
    idop: req.query.idop,
  };

  console.log(params);

  // Envoyer les paramètres dans le HTML
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Redirection</title>
    </head>
    <body>
      <h1>Redirection</h1>
      <p>Header IDOP: ${req.headers.idop}</p>
      <p>Body: ${JSON.stringify(req.body)}</p>
      <p>Body Headers: ${JSON.stringify(req.body.headers)}</p>
    </body>
    </html>
    
  `);
};

module.exports = {
  notification,
  redirection,
};
