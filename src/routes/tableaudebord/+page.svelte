<script>
	import { onMount } from 'svelte';  // Importation correcte de onMount
	import { getIframeURLs } from '$lib/ifram.js';  // Assurez-vous que le chemin est correct
	import iframecomposant from '$lib/components/iframecomposant.svelte';  // Le nom du composant est respecté

	let iframeURLs = [];

	// Charger les URLs des iframes lors du montage de la page
	onMount(() => {
		iframeURLs = getIframeURLs();
	});
</script>

<section>
	<h1>Tableaux de bord</h1>
	{#each iframeURLs as url, i}
		<div class="iframe-container">
			<h2>Dashboard {i + 1}</h2>
			<Iframecomposant src={url} title={`Metabase Dashboard ${i + 1}`} />
		</div>
	{/each}
</section>

<style>
	.iframe-container {
		margin-bottom: 20px;
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 10px;
		background-color: #f9f9f9;
	}
</style>
