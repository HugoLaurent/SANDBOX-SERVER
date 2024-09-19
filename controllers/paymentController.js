const payment = require("../json/payfip.js");

const getPayment = (req, res) => {
  console.log("Je récupère les paiements");
  res.send(`
    <html>
      <head>
        <title>Payment Information</title>
      </head>
      <body>
        <h1>Payment Details</h1>
        <pre>${JSON.stringify(payment, null, 2)}</pre>
      </body>
    </html>
  `);
  res.json(payment);
};

const checkPayment = (req, res) => {
  console.log("Je check le paiement");

  const data = req.query.data;

  const formData = JSON.parse(decodeURIComponent(data));
  console.log(formData.date.slice(0, 4));

  console.log(formData);

  const findPayment = payment.find(
    (pay) => pay.REFDET === formData.refdet && pay.MONTANT === formData.montant
  );

  if (!findPayment) {
    return res.status(404).json({ message: "Paiement non trouvé" });
  }

  return res.json({ ok: true, message: "Paiement vérifié" });
};

module.exports = { getPayment, checkPayment };

// NUMCLI: "083198",
// EXER: "2024",
// REFDET: "INV20240002",
// OBJET: "Invoice payment",
// MONTANT: "500000",
// MEL: "contact@domain.com",
// URLNOTIF: "https://anotherdomain.com/notification",
// URLREDIRECT: "https://anotherdomain.com/redirect",
// SAISIE: "X",
