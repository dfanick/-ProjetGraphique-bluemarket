<script>
</script>

<section class="image-de-fond">
	<div class="contenu">
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
		</div>
	</div>

	
	<div class="lien-article">
		<a href="https://www.relocalisons.bzh/blog/bluemarket-le-bon-coin-du-reemploi-industriel/" 
			class="bouton secondaire" 
			target="_blank">Lire l'article</a>
	</div>
</section>

<style>
	.image-de-fond {
		background-image: url('/ilustmateriel.png'); 
		background-size: cover; 
		background-position: center; 
		background-repeat: no-repeat;
		background-color: #ffffff; 
		height: 100vh; 
		display: flex;
		justify-content: center;
		align-items: center; 
		padding-top: 4rem;
		flex-direction: column; 
	}

	.contenu {
		text-align: center;
		background-color: #003366;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		width: 80%;
		max-width: 600px; 
	}

	
	.section-medias {
		display: flex;
		flex-direction: column; 
		align-items: center;
		justify-content: center; 
		height: auto; 
		gap: 2rem; 
	}

	.conteneur-video {
		width: 100%;
		max-width: 80%; 
		
		border: 2px solid #ddd;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		margin: 2rem;
	}

	
	.conteneur-video iframe {
		width: 100%;
		height: 315px; 
	}

	
	.lien-article {
		text-align: center;
		margin-top: 4rem;
	}

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


	.bouton:hover {
		background-color: #0056b3; 
	}

	.bouton.secondaire {
		background-color: #1769a7; 
	}

	.bouton.secondaire:hover {
		background-color: #0c4c6d;
	}

	
	@media (max-width: 768px) {
		.conteneur-video iframe {
			height: 40vh; 
		}

		.conteneur-video {
			max-width: 100%;
		}

		.section-medias {
			flex-direction: column;
			margin-top: 1rem;
		}
	}
</style>
