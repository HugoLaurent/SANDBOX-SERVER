const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/autRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const recetteRoutes = require("./routes/recetteRoutes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Gérer les requêtes préliminaires OPTIONS
app.options("*", cors());

// Log the client's IP address
app.use((req, res, next) => {
  const clientIp = req.ip;
  console.log(`Client IP: ${clientIp}`);
  next();
});

// Routes
app.use("/auth", authRoutes);
app.use("/payment", paymentRoutes);
app.use("/recette", recetteRoutes);

// Pour la route de confirmation
app.get("/confirmation", (req, res) => {
  res.json("bien joué");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
