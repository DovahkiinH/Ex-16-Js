function validerFormulaire() {
  const societe = document.getElementById("societe").value;
  const contact = document.getElementById("contact").value;
  const codePostal = document.getElementById("codePostal").value;
  const ville = document.getElementById("ville").value;
  const email = document.getElementById("email").value;

  if (societe.length < 1) {
    alert("La 'Société' doit comporter au moins 1 caractère.");
    return false;
  }

  if (contact.length < 1) {
    alert("La 'Personne à contacter' doit comporter au moins 1 caractère.");
    return false;
  }

  if (!/^[0-9]{5}$/.test(codePostal)) {
    alert("Le 'Code postal' doit comporter 5 caractères numériques.");
    return false;
  }

  if (ville.length < 1) {
    alert("La 'Ville' doit comporter au moins 1 caractère.");
    return false;
  }

  if (!email.includes("@")) {
    alert("L'adresse 'Email' doit comporter au moins le caractère '@'.");
    return false;
  }

  return true;


  const techniqueSelect = document.getElementById("techniques");
  const autreTechniqueInput = document.getElementById("autreTechnique");
  const selectedTechnique = techniqueSelect.value;

  if (selectedTechnique === "Choisissez") {
    alert("Veuillez sélectionner une technique valide.");
    return false;
  }

  if (selectedTechnique !== "Autre" && autreTechniqueInput.value !== "") {
    alert("Vous ne pouvez pas spécifier d'autres techniques en plus de votre sélection.");
    return false;
  }

  return true;



  document.getElementById("techniques").addEventListener("change", function() {
    const autreTechniqueInput = document.getElementById("autreTechnique");
    if (this.value === "Autre") {
      autreTechniqueInput.style.display = "block";
    } else {
      autreTechniqueInput.style.display = "none";
      autreTechniqueInput.value = ""; // Réinitialisez la zone de texte si elle était visible
    }
  });

}