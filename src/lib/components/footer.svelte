<div class="footer">
	<img src="/logobm.png" alt="BlueMarket Logo" class="logo" />
	<p><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></p>
	<p><a href="mailto:contact@bluemarket.fr">contact@bluemarket.fr</a></p> <!-- Lien mailto ajouté -->
</div>

<style>
	
.footer {
    text-align: center;
    background-color: #003366;
    color: white;
    padding: 30px 20px;
    display: flex;
    flex-direction: row; 
    justify-content: center; 
    gap: 10px;
    margin-top: 15px; 
}


.logo {
    max-width: 150px; 
    display: block;
}


.footer p {
    margin: 0;
}

.footer a {
    color: white;
    text-decoration: none;
}




	@media (max-width: 768px) {
		.footer {
			padding: 12px 8px; 
			flex-direction: column; 
			align-items: center; 
			justify-content: center; 
			max-height: auto; 
		}
		.logo {
			max-width: 250px; 
			margin-bottom: 10px; 
		}

		.footer p {
			font-size: 0.85rem; 
			margin: 2px 0;
		}

		.footer img {
			width: 250px; 
			margin-bottom: 8px; 
		}
	}
</style>
