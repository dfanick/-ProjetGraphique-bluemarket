<script>
	import { onMount } from 'svelte';
	import Iframecomposant from '$lib/components/iframecomposant.svelte';

	let iframeURLs = [];
	let error = '';

	onMount(async () => {
		try {
			const res = await fetch('/api/iframe'); 
			if (res.ok) {
				const data = await res.json();
				iframeURLs = data.iframeURLs; 
			} else {
				error = `Erreur ${res.status}: ${await res.text()}`; 
			}
		} catch (err) {
			error = "Impossible de récupérer les tableaux de bord. Vérifiez votre connexion ou votre API.";
			console.error(err);
		}
	});
</script>

<section class="dashboard-container">
	<h1 class="page-title">Tableaux de bord</h1>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	{#if iframeURLs.length > 0}
		<div class="iframe-grid">
			{#each iframeURLs as url, i}
				<div class="iframe-item">
					<h2>Tableau de bord {i + 1}</h2>
					<Iframecomposant src={url} title={`Metabase Dashboard ${i + 1}`} />
				</div>
			{/each}
		</div>
	{:else if !error}
		<p>Chargement des tableaux de bord...</p>
	{/if}
</section>

<style>
	/* Section de base */
	.dashboard-container {
		padding: 20px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.page-title {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 30px;
		color: #333;
	}

	/* Gestion des erreurs */
	.error {
		color: red;
		font-size: 1.2rem;
		text-align: center;
		margin-bottom: 20px;
	}

	/* Grille responsive */
	.iframe-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 20px;
	}

	/* Styles pour chaque iframe */
	.iframe-item {
		background-color: #f9f9f9;
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 15px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.iframe-item h2 {
		font-size: 1.2rem;
		text-align: center;
		margin-bottom: 15px;
	}

	/* Améliorations pour les iframes */
	iframe {
		width: 100%;
		height: 400px;
		border: none;
		border-radius: 8px;
	}

	/* Responsive: ajustements pour les écrans plus petits */
	@media (max-width: 768px) {
		.page-title {
			font-size: 1.5rem;
		}
		.iframe-item h2 {
			font-size: 1rem;
		}
	}
</style>
