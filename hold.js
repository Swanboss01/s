exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body);

  // Exemple : enregistrer une action en attente
  console.log("Mise en attente :", payload);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Action mise en attente" }),
  };
};
