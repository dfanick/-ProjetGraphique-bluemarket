<script>
	// Ajouter des scripts spécifiques si nécessaire
</script>

<style>
	.footer {
		background-color: #003366;
		color: white;
		padding: 20px;
		text-align: center;
		display: flex;
		flex-direction: row; /* Mode ligne par défaut */
		align-items: center;
		justify-content: center;
		gap: 10px; /* Réduit l'espacement entre les éléments */
		max-height: 150px;
	}

	.footer a {
		color: white;
		text-decoration: none;
	}

	.footer a:hover {
		text-decoration: underline;
	}

	/* Responsive : Ajuste l'affichage des éléments pour les petits écrans */
	@media (max-width: 768px) {
		.footer {
			flex-direction: column; /* Empiler les éléments en colonne */
			align-items: center;
			justify-content: center;
			max-height: 100px; /* Réduit la hauteur maximale sur mobile */
			padding: 8px; /* Réduit encore le padding pour compacter le footer */
		}

		.footer p {
			font-size: 0.85rem; /* Réduit légèrement la taille du texte sur mobile */
			margin: 2px 0; /* Réduit encore l'espacement entre les éléments */
		}

		.footer img {
			width: 50px; /* Réduit davantage la taille du logo */
			margin-bottom: 3px; /* Espacement réduit sous le logo */
		}
	}
</style>

<div class="footer">
	<img src="/logobm.png" alt="BlueMarket Logo" class="logo" />
	<p><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></p>
	<p><a href="mailto:contact@bluemarket.fr">contact@bluemarket.fr</a></p> <!-- Lien mailto ajouté -->
</div>
