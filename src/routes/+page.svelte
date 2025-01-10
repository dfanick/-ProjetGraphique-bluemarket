<script>
	// Ajouter des scripts spécifiques si nécessaire
</script>

<section class="image-de-fond">
	<div class="contenu">
		<!-- Section des médias -->
		<div class="section-medias">
			<div class="conteneur-video">
				<iframe 
					src="https://www.youtube.com/embed/LLfHZywisa4" 
					title="Bluemarket au Global industrie 2024" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerpolicy="strict-origin-when-cross-origin" 
					allowfullscreen>
				</iframe>
			</div>

			<!-- Séparé de la vidéo, article sous un autre conteneur -->
			<div class="lien-article">
				<!-- Lien vers un article -->
				<a href="https://www.relocalisons.bzh/blog/bluemarket-le-bon-coin-du-reemploi-industriel/" 
					class="bouton secondaire" 
					target="_blank">Lire l'article</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Image de fond qui couvre toute la page */
	.image-de-fond {
		background-image: url('/ilustmateriel.png'); 
		background-size: cover; 
		background-position: center; 
		background-repeat: no-repeat;
		background-color: #ffffff; 
		height: 100vh; /* Occupe 100% de la hauteur de l'écran */
		display: flex;
		justify-content: center;
		align-items: center; 
	}

	/* Conteneur pour le texte et les boutons */
	.contenu {
		text-align: center;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 600px; /* Limite la largeur maximum */
	}

	/* Style de la section */
	section {
		width: 100%;
	}

	/* Section des médias */
	.section-medias {
		display: flex;
		flex-direction: column; /* Empile les éléments */
		align-items: center;
		justify-content: center; /* Aligne les éléments au centre verticalement */
		height: 100%; /* Prend toute la hauteur disponible */
	
		gap: 2rem; /* Espace entre la vidéo et le lien */
	}

	.conteneur-video {
    width: 100%;
    max-width: 80%; /* Réduit légèrement la largeur du conteneur */
    height: 500%; /* Si tu veux garder la même hauteur, sinon ajuste cette valeur */
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 4rem;
}


	/* Définir la hauteur de la vidéo en fonction de l'écran */
	.conteneur-video iframe {
		width: 100%;
		height: 100%; /* La vidéo occupe 100% de la hauteur du conteneur */
	}

	/* Bouton pour l'article */
	.lien-article .bouton {
		text-align: center;
	}

	/* Style des boutons */
	.bouton {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		margin: 0.5rem;
		color: #fff;
		background-color: #007BFF; 
		border: none;
		border-radius: 5px;
		text-decoration: none;
		font-size: 1rem;
		font-weight: bold;
		transition: background-color 0.2s ease;
	}

	/* Effet de survol des boutons */
	.bouton:hover {
		background-color: #0056b3; 
	}

	.bouton.secondaire {
		background-color: #1769a7; 
	}

	.bouton.secondaire:hover {
		background-color: #0c4c6d;
	}

	/* Responsive : Ajustements pour les petits écrans */
	@media (max-width: 768px) {
		/* La vidéo s'ajuste en taille */
		.conteneur-video iframe {
			height: 40vh; /* La vidéo prend 40% de la hauteur sur mobile */
		}

		/* La vidéo prend toute la largeur disponible */
		.conteneur-video {
			max-width: 100%;
		}

		/* Section des médias en colonne */
		.section-medias {
			flex-direction: column;
			margin-top: 1rem; /* Plus petit espacement pour mobile */
		}
	}
</style>
