<script>
	import { onMount } from 'svelte'; 
 
	let addresses = [];  
	let error = null;    
 
	
	onMount(async () => {
	  try {
		 
		 const response = await fetch('/api/adresse');  
		 if (!response.ok) {
			throw new Error('Erreur lors de la récupération des adresses');
		 }
		
		 addresses = await response.json();
	  } catch (err) {
		 error = err.message; 
	  }
	});
 </script>
 
 <style>
	main {
	  margin: 2rem;
	}
 </style>
 
 <main>
	<h1>Adresses</h1>
 
	{#if error}
	  <p>Erreur : {error}</p> 
	{:else if addresses.length === 0}
	  <p>Aucune adresse trouvée.</p> 
	{:else}
	  <ul>
		 {#each addresses as address}
			<li>{address.name}, {address.city}</li> 
		 {/each}
	  </ul>
	{/if}
 </main>
 
 