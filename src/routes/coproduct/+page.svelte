<script>
	import { onMount } from 'svelte';

	let coproducts = [];
	let error = null;

	onMount(async () => {
		try {
			const response = await fetch('/api/coproduct');
			if (!response.ok) {
				throw new Error('Erreur lors de la récupération des coproducts.');
			}
			coproducts = await response.json();
		} catch (err) {
			error = err.message;
		}
	});
</script>

<main>
	<h1>Liste des coproducts</h1>

	{#if error}
		<p style="color: red;">Erreur : {error}</p>
	{:else if coproducts.length > 0}
		<table>
			<thead>
				<tr>
					<th> Category</th>
					<th>State</th>
					<th>Title</th>
					<th>Description</th>
					<th>Properties</th>
					<th>Weight</th>
				</tr>
			</thead>
			<tbody>
				{#each coproducts as coproduct}
					<tr>
						<td>{coproduct.id_public_category}</td>
						<td>{coproduct.state}</td>
						<td>{coproduct.title}</td>
						<td>{coproduct.description}</td>
						<td>{coproduct.properties}</td>
						<td>{coproduct.weight}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<p>Aucun coproduct trouvé.</p>
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
	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 1rem;
	}
	th, td {
		padding: 0.5rem;
		border: 1px solid #ddd;
		text-align: left;
	}
	th {
		background-color: #f4f4f4;
	}
	tr:nth-child(even) {
		background-color: #f9f9f9;
	}
</style>
