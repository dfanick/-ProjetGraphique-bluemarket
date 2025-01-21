

<header>
	<a href="/" aria-label="Accueil">
		<img src="/logobm.png" alt="Bluemarket Logo" class="logo" />
	</a>
	<div class="menu">
		<button class="burger" aria-label="Toggle menu" style="display:none;">
			<div></div>
			<div></div>
			<div></div>
		</button>
		<nav class="nav-links">
			<a href="/nosservices">Nos services</a>
			<a href="/tableaudebord">Tableau de bord</a>
			<a href="/contact">Contact</a>
		</nav>
	</div>
</header>


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


	@media (max-width: 768px) {
	.nav-links {
		display: flex;
		flex-direction: column; 
		position: absolute;
		top: 120px; 
		right: 2%; 
		left: 2%; 
		background-color: #003366;
		text-align: center;
		padding: 1rem 0;
		gap: 1rem; 
		
	}
	

	
	.burger {
		display: none; 
	}
}

</style>

