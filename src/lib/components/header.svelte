<script>
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
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

	@media (max-width: 768px) {
		.nav-links {
			display: none;
			flex-direction: column;
			position: absolute;
			top: 60px;
			right: 0;
			background-color:  #003366;
			width: 100%;
			text-align: center;
		}

		.nav-links.open {
			display: flex;
		}

		.burger {
			display: flex;
		}
	}
</style>

<header>
	<img src="/logobm.png" alt="BlueMarket Logo" class="logo" />
	<div class="menu">
		<button class="burger" on:click={toggleMenu} on:keydown={(e) => e.key === 'Enter' && toggleMenu()} aria-label="Toggle menu">
			<div></div>
			<div></div>
			<div></div>
		</button>
		<nav class={`nav-links ${isOpen ? 'open' : ''}`}>
			<a href="#home">Home</a>
			<a href="#about">About</a>
			<a href="#services">Services</a>
			<a href="#contact">Contact</a>
		</nav>
	</div>
</header>
