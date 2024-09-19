async function generatePassword(passwordToHash) {
  const hashedPassword = await bcrypt.hash(passwordToHash, 10);

  return hashedPassword;
}

module.exports = generatePassword;
