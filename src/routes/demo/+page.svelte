<!-- src/routes/demo/lucia/page.svelte -->
<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let error = '';

	async function handleLogin() {
		try {
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

			if (res.ok) {
				goto('/');
			} else {
				error = `Erreur ${res.status}: ${await res.text()}`;
			}
		} catch (err) {
			error = "Impossible de se connecter. Vérifiez votre connexion.";
			console.error(err);
		}
	}
</script>

<section>
	<h1>Connexion</h1>
	{#if error}
		<p class="error">{error}</p>
	{/if}
	<form on:submit|preventDefault={handleLogin}>
		<label>
			Nom d'utilisateur:
			<input type="text" bind:value={username} />
		</label>
		<label>
			Mot de passe:
			<input type="password" bind:value={password} />
		</label>
		<button type="submit">Se connecter</button>
	</form>
</section>

