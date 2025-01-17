<section class="nos-services">
	<h2>Nos Services</h2>
	<div class="conteneur-services">
		<!-- Service réemploi industriel -->
		<div class="service">
			
			<h3>Réemploi Industriel</h3>
			<ul>
				<p>L’outil indispensable au réemploi industriel des PME et des grands es:</p>
				<li>Réemployez gratuitement entre industriels sur la marketplace publique et sécurisée</li>
				<li>Achetez responsable et local, des articles neufs, d’occasion et reconditionnés</li>
				<li>Vendez vos stocks et équipements inutilisés pour réduire vos coûts et vos déchets</li>
			</ul>
		
		</div>

		<!-- Autres services déjà existants -->
		<div class="service">
			
			<h3>Connect</h3>
			<p>Nous mettons à profit notre expertise du réemploi à travers votre marketplace sur mesure, adaptée à vos équipes et à vos enjeux stratégiques :</p>
			<ul>
				<li>Réemployez entre vos sites, avec vos partenaires et votre écosystème</li>
				<li>Intégrez pleinement le réemploi à votre activité et votre stratégie </li>
				<li>Bénéficiez d’un catalogue partagé avec l’ensemble de nos utilisateurs</li>
			</ul>
			
		</div>

		<div class="service">
			
			<h3>Étude et accompagnement</h3>
			<p>
				Nous vous aidons à mettre en place une démarche de réemploi au sein de votre organisation :
			</p>
			<ul>
				<li>Conseils d'experts pour une Politique de Réemploi efficace et pérenne</li>
				<li>Identification des gisements pertinents et des équipes à impliquer </li>
				<li>Évaluation des économies et gains possibles</li>
			</ul>
		</div>

		<div class="service">
			
			<h3>Bilan d'impact</h3>
			<p>
				Nous établissons des bilans d’impact économique et environnemental de votre démarche de réemploi :
			</p>
			<ul>
				<li>Indicateurs en € et en CO2e évité, en cohérence avec les dernières réglementations et normes</li>
				<li>Synthèses périodiques pour piloter et améliorer votre démarche</li>
				<li>Supports de communication pour mettre en valeur votre engagement</li>
			</ul>
			
		</div>
	</div>
</section>

<style>
	/* Section globale */
	.nos-services {
		padding: 2rem;
		background-color: #f9f9f9;
		text-align: center;
	}

	.nos-services h2 {
		color: #003366;
		margin-bottom: 1.5rem;
		font-size: 2rem;
	}

	/* Conteneur des services */
	.conteneur-services {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	/* Style de chaque service */
	.service {
		background-color: white;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		flex: 1 1 calc(33.333% - 1rem); /* 3 colonnes */
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	/* Titre et description */
	.service h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: #003366;
	}

	.service p {
		font-size: 1rem;
		color: #666;
		margin-bottom: 1rem;
	}

	/* Liste sous forme de points pour le service réemploi industriel */
	.service ul {
		list-style-type: disc;
		padding-left: 1.5rem;
		text-align: left;
	}

	/* Responsive : Affichage en une colonne sur mobile */
	@media (max-width: 768px) {
		.conteneur-services {
			flex-direction: column;
		}

		.service {
			flex: 1 1 100%;
		}
	}
</style>
