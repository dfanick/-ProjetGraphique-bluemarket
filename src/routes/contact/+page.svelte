<script>
	let nom = '';
	let prenom = '';
	let courriel = '';
	let numero = '';
	let message = '';
	let succes = false;
	let erreur = '';

	async function envoyerFormulaire(event) {
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ nom, prenom, courriel, numero, message }),
			});

			if (res.ok) {
				succes = true;
				nom = '';
				prenom = '';
				courriel = '';
				numero = '';
				message = '';
				erreur = '';
			} else {
				const response = await res.json();
				erreur = response.erreur || 'Une erreur est survenue.';
			}
		} catch (e) {
			erreur = 'Impossible de soumettre le formulaire.';
		}
	}
</script>

<div class="conteneur-formulaire">
	<h1>Contactez-nous</h1>

	{#if succes}
		<p class="message-succes">Votre message a été envoyé avec succès !</p>
	{/if}

	{#if erreur}
		<p class="message-erreur">{erreur}</p>
	{/if}

	<form on:submit|preventDefault={envoyerFormulaire}>
		<div class="groupe-formulaire">
			<label for="nom">Nom :</label>
			<input type="text" id="nom" bind:value={nom} required placeholder="Entrez votre nom" />
		</div>
		<div class="groupe-formulaire">
			<label for="prenom">Prénom :</label>
			<input type="text" id="prenom" bind:value={prenom} required placeholder="Entrez votre prénom" />
		</div>
		<div class="groupe-formulaire">
			<label for="courriel">Email :</label>
			<input type="email" id="courriel" bind:value={courriel} required placeholder="Entrez votre email" />
		</div>
		<div class="groupe-formulaire">
			<label for="numero">Numéro de téléphone :</label>
			<input type="tel" id="numero" bind:value={numero} placeholder="Entrez votre numéro (facultatif)" />
		</div>
		<div class="groupe-formulaire">
			<label for="message">Message :</label>
			<textarea id="message" bind:value={message} required placeholder="Entrez votre message"></textarea>
		</div>
		<button type="submit">Envoyer</button>
	</form>
</div>

<style>

.conteneur-formulaire {
	max-width: 450px;
	margin: 5rem auto;
	background: #003366;
	padding: 1.5rem;
	border-radius: 10px;
	box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
	color: white;
	text-align: center;
}

h1 {
	margin-bottom: 1rem;
	color: #ffffff;
	font-size: 1.8rem;
}

.message-succes {
	color: #00cc66;
	font-size: 0.9rem;
	margin-bottom: 1rem;
}

.message-erreur {
	color: #ff6666;
	font-size: 0.9rem;
	margin-bottom: 1rem;
}

form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.groupe-formulaire {
	display: flex;
	flex-direction: column;
	text-align: left;
}

label {
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	font-weight: bold;
}

input, textarea, button {
	font-size: 0.9rem;
	border-radius: 6px;
	border: none;
	padding: 0.7rem;
}

input, textarea {
	background: #ffffff;
	color: #333333;
	box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
}

input:focus, textarea:focus {
	outline: 2px solid #0056b3;
}

textarea {
	resize: none;
	height: 80px;
}

button {
	background: #0056b3;
	color: white;
	font-weight: bold;
	cursor: pointer;
	transition: background 0.3s ease;
}

button:hover {
	background: #003366;
}


@media (max-width: 768px) {
	.conteneur-formulaire {
		margin: 10rem auto 2rem;
		padding: 1rem;
	}

	h1 {
		font-size: 1.4rem;
	}

	button {
		font-size: 0.85rem;
	}
}
</style>
