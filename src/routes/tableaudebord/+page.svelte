<!-- 
 Récupère dynamiquement les URLs des iframes
 via server/iframe.js et les affiche.
Utilise iframecomposant.svelte pour intégrer 
les tableaux de bord.
-->
<script>
	import { onMount } from 'svelte';
	import Iframecomposant from '$lib/components/iframecomposant.svelte';
	import { goto } from '$app/navigation';

	let iframeURLs = [];
	let error = '';

	onMount(async () => {
		try {
			const res = await fetch('/api/iframe');
			if (res.ok) {
				const data = await res.json();
				iframeURLs = data.iframeURLs;
			} else if (res.status === 401) {
			
				goto('/demo/lucia/login');
			} else {
				error = `Erreur ${res.status}: ${await res.text()}`;
			}
		} catch (err) {
			error = "Impossible de récupérer les tableaux de bord. Vérifiez votre connexion ou votre API.";
			console.error(err);
		}
	});
</script>

<section>
	<div class="header-container">
		<div class="title-container">
			<h1>Bienvenue sur votre tableau de bord !</h1>
			<!-- <h2>Voyons vos accomplissements pour offrir une nouvelle vie aux équipements !</h2>-->
		</div>
		<form method="post" action="/demo/lucia/?/logout">
			<button type="submit">Se déconnecter</button>
		</form>
	</div>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	{#if iframeURLs.length > 0}
		<div class="grid-container">
			{#each iframeURLs as url, i}
				<div class="iframe-container">
					<!-- <h2>Tableau de bord {i + 1}</h2>-->
					<Iframecomposant src={url} title={"Metabase Dashboard ${i + 1}"} />
				</div>
			{/each}
		</div>
	{:else if !error}
		<p class="loading">Chargement des tableaux de bord...</p>
	{/if}
</section>

<style>
section {
	margin-top: 60px;
	padding: 0 20px;
}

@media (max-width: 768px) {
	section {
		margin-top: 170px;
	}
}


.header-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;
}

@media (max-width: 768px) {
	.header-container {
		flex-direction: column;
		align-items: center;
		gap: 15px;
		margin-bottom: 15px; 
	}
}


.title-container {
	text-align: center;
	flex-grow: 1;
}

form {
	margin-left: auto;
}

form button {
	background-color: rgb(7, 10, 77);
	color: white;
	font-size: 1rem;
	font-weight: bold;
	border: none;
	padding: 10px 15px;
	border-radius: 6px;
	cursor: pointer;
	transition: background 0.3s ease;
}

form button:hover {
	background-color: #179fe8;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr); 
	gap: 20px;
}

@media (max-width: 768px) {
	.grid-container {
		grid-template-columns: 1fr; 
	}
}

.iframe-container {
	border: 1px solid #e0e0e0;
	border-radius: 10px;
	padding: 15px;
	background-color: #ffffff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s, box-shadow 0.2s;
}

.iframe-container:hover {
	transform: translateY(-5px);
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

h2 {
	font-size: 1.2rem;
	color: #333333;
	margin-bottom: 10px;
}

.error {
	color: #d32f2f;
	font-size: 1rem;
	font-weight: bold;
	text-align: center;
	padding: 10px;
	background-color: #ffebee;
	border: 1px solid #f44336;
	border-radius: 8px;
}

.loading {
	font-size: 1rem;
	color: #666666;
	text-align: center;
}

</style>
