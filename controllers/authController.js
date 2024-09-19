const bcrypt = require("bcrypt");
const users = require("../json/users.json");

let blockedIp = [];
let tryConnection = 0;

const blockUser = () => {
  if (tryConnection < 3) {
    tryConnection++;
    return false;
  } else {
    return true;
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("email", email);
  console.log("password", password);

  try {
    console.log("test");
    const userOnConnection = users.find((user) => user.username === email);

    if (!userOnConnection) {
      return res
        .status(401)
        .json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
    }

    if (blockedIp.some((b) => b.ip === req.ip)) {
      const findIpUser = blockedIp.find((b) => b.ip === req.ip);
      const now = Date.now();
      if (now > findIpUser.unlockTime) {
        // Déblocage
        blockedIp = blockedIp.filter((b) => b.ip !== req.ip);
        tryConnection = 0;
      } else {
        const unlockDate = new Date(findIpUser.unlockTime).toLocaleTimeString();
        return res.status(401).json({
          message: `Trop de tentatives. Pour des mesures de sécurité, vous êtes bloqués jusqu'à ${unlockDate}.`,
        });
      }
    }

    const match = await bcrypt.compare(password, userOnConnection.password);
    console.log("match", match);

    if (match) {
      return res.json({ message: "Connexion réussie" });
    } else {
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

      const isBlocked = blockUser();
      if (isBlocked) {
        const unlockTime = Date.now() + 60000; // 1 minute
        blockedIp.push({ ip: ip, unlockTime: unlockTime });
        console.log("blockedIp", blockedIp);

        return res.status(401).json({
          message: `Trop de tentatives. Pour des mesures de sécurité, vous êtes bloqués jusqu'à ${new Date(
            unlockTime
          ).toLocaleTimeString()}.`,
        });
      }

      return res
        .status(401)
        .json({ message: "Mot de passe ou mail incorrect" });
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = { login };
