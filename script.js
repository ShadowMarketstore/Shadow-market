// Shadow Market - Cerveau du système
console.log("Shadow Market : Système initialisé.");

// Cette fonction sera utilisée pour charger les produits depuis Supabase
async function chargerProduits() {
    console.log("Tentative de connexion à la base de données...");
    
    // Ici, nous ajouterons plus tard ton URL Supabase et ta clé publique
    // Cela permettra d'afficher automatiquement tes produits dans index.html
    const container = document.getElementById('product-container');
    
    if (container) {
        container.innerHTML = "<p>Connexion au Shadow Market en cours...</p>";
    }
}

// Lancement automatique au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    chargerProduits();
});

