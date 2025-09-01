exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body);

  // Vérifie la clé ou la signature ici si nécessaire
  console.log("Récompense reçue :", payload);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Récompense traitée avec succès" }),
  };
};
