exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body);

  // Exemple : annuler une récompense dans ta base de données
  console.log("Récompense annulée :", payload);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Annulation traitée" }),
  };
};
