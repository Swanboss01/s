exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body);

  // Exemple : confirmer ou annuler l’action en attente
  console.log("Finalisation de la mise en attente :", payload);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Finalisation réussie" }),
  };
};
