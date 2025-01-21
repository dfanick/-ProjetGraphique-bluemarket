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
				error = "Erreur ${res.status}: ${await res.text()}";
			}
		} catch (err) {
			error = "Impossible de récupérer les tableaux de bord. Vérifiez votre connexion ou votre API.";
			console.error(err);
		}
	});
</script>

<section>
	<h1>Tableaux de bord</h1>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	{#if iframeURLs.length > 0}
		{#each iframeURLs as url, i}
			<div class="iframe-container">
				<h2>Tableau de bord {i + 1}</h2>
				<Iframecomposant src={url} title={"Metabase Dashboard ${i + 1}"} />
			</div>
		{/each}
	{:else if !error}
		<p>Chargement des tableaux de bord...</p>
	{/if}
</section>

<style>

	section {
		margin-top: 60px; 
	}

	
	@media (max-width: 768px) {
		section {
			margin-top: 80px; 
		}
	}


	.iframe-container {
		margin-bottom: 20px;
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 10px;
		background-color: #f9f9f9;
	}


	.error {
		color: red;
		font-size: 1rem;
		margin-bottom: 10px;
	}
</style>
