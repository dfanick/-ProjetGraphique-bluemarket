<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<div class="conteneur-formulaire">
	<h1>Login/Register</h1>
	
	{#if form?.message}
	  <p class="message-erreur">{form.message}</p>
	{/if}
	
	<form method="post" action="?/login" use:enhance>
	  <div class="groupe-formulaire">
		 <label for="username">
			Username
		 </label>
		 <input id="username" name="username" required minlength="3" maxlength="31" pattern="[a-z0-9_-]+" />
	  </div>
	  
	  <div class="groupe-formulaire">
		 <label for="password">
			Password
		 </label>
		 <input id="password" type="password" name="password" required minlength="6" maxlength="255" />
	  </div>

	  <button type="submit">Login</button>
	  <button type="submit" formaction="?/register">Register</button>
	</form>
</div>

<style>
/* Global container to handle full-page layout */
.conteneur-formulaire {
    max-width: 450px;
    margin: 10rem auto; /* Grande marge supérieure pour descendre le formulaire */
    background: #003366;
    padding: 2rem; /* Augmentation du padding pour un formulaire plus grand */
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column; /* Assure que le contenu se développe verticalement */
    justify-content: center; /* Centre le contenu verticalement */
    align-items: center; /* Centre le contenu horizontalement */
    min-height: 500px; /* Définit une hauteur minimale pour éviter que le formulaire soit trop petit */
    flex-grow: 1; /* Permet au formulaire de prendre l'espace disponible si nécessaire */
}

h1 {
	margin-bottom: 1rem;
	color: #ffffff;
	font-size: 1.8rem;
}

.message-erreur {
	color: #ff6666;
	font-size: 0.8rem;
	margin-top: 0.3rem;
	text-align: left;
}

form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%; /* Garantit que le formulaire prend toute la largeur disponible dans son conteneur */
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

input, button {
	font-size: 0.9rem;
	border-radius: 6px;
	border: none;
	padding: 0.7rem;
	width: 80%; /* Les champs de saisie prennent toute la largeur disponible */
}

input {
	background: #ffffff;
	color: #333333;
	box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
}

input:focus {
	outline: 2px solid #0056b3;
}

button {
	background: #0056b3;
	color: white;
	font-weight: bold;
	cursor: pointer;
	transition: background 0.3s ease;
	
}

button:hover {
	background: #4c96df;
}

/* Responsive Styles for mobile devices */
@media (max-width: 768px) {
	.conteneur-formulaire {
		margin: 10rem auto; /* Réduire les marges pour mobile */
		padding: 1.5rem;
		margin-top: 300px; 
	}

	h1 {
		font-size: 1.4rem;
	}

	button {
		font-size: 0.85rem;
	}
}
</style>
