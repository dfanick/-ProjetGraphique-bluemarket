<script>
	// Aucun script nécessaire si tu veux afficher le menu directement en mobile
</script>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 30px;
		background-color: #003366;
		color: white;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.menu {
		display: flex;
		align-items: center;
	}

	.burger {
		display: none;
		flex-direction: column;
		cursor: pointer;
	}

	.burger div {
		width: 25px;
		height: 3px;
		background-color: white;
		margin: 4px;
	}

	.nav-links {
		display: flex;
		gap: 1rem;
	}

	.nav-links a {
		color: white;
		text-decoration: none;
	}

	/* Mobile menu */
	@media (max-width: 768px) {
		.nav-links {
			display: flex; /* Affiche le menu directement sur mobile */
			flex-direction: column; /* Aligne les éléments en colonne */
			position: absolute;
			top: 100px; /* Positionne le menu sous le logo */
			right: 0;
			background-color: #003366;
			width: 100%;
			text-align: center;
			padding: 1rem 0;
			gap: 1rem; /* Ajoute un espace entre les éléments */
		}

		.burger {
			display: none; /* Masque l'icône burger sur mobile */
		}
	}
</style>

<header>
	<img src="/logobm.png" alt="BlueMarket Logo" class="logo" />
	<div class="menu">
		<button class="burger" aria-label="Toggle menu" style="display:none;">
			<div></div>
			<div></div>
			<div></div>
		</button>
		<nav class="nav-links">
			<a href="/nosservices">Nos services</a>
			<!-- <a href="https://youtu.be/LLfHZywisa4">A propos</a> -->
			<a href="#performance">Performance</a>
			<a href="#contact">Contact</a>
		</nav>
	</div>
</header>
