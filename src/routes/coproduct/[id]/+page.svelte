<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores'; // Pour obtenir l'ID depuis l'URL

	let coproduct = null;
	let error = null;

	// Récupérer l'ID depuis l'URL
	$: id = $page.params.id;

	onMount(async () => {
		try {
			// Appeler l'API pour obtenir les détails du coproduct
			const response = await fetch(`/api/coproduct/${id}`);
			if (!response.ok) {
				throw new Error('Erreur lors de la récupération des détails du coproduct.');
			}
			coproduct = await response.json();
		} catch (err) {
			error = err.message;
		}
	});
</script>

<main>
	{#if error}
		<p style="color: red;">Erreur : {error}</p>
	{:else if coproduct}
		<h1>{coproduct.title}</h1>
		<p><strong>État :</strong> {coproduct.state}</p>
		<p><strong>Description :</strong> {coproduct.description}</p>
		<p><strong>Propriétés :</strong> {coproduct.properties}</p>
		<p><strong>Poids :</strong> {coproduct.weight}</p>
		<p><strong>Catégorie principale :</strong> {coproduct.id_main_category}</p>
	{:else}
		<p>Chargement des détails du coproduct...</p>
	{/if}
</main>

<style>
	main {
		padding: 1rem;
	}
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	p {
		margin: 0.5rem 0;
	}
</style>
