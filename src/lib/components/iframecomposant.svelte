<!-- 
Composant affichant un iframe pour 
afficher un tableau de bord Metabase.
Il est utilisé dans tableaudebord.svelte pour afficher 
chaque URL reçue de l’API. 
-->

<script>
	
	export let src; 
	export let title = 'tableau de bord'; 
</script>

<iframe
	src={src}
	title={title}
	width="100%"
	height="500"
	frameborder="0"
	allowfullscreen
	loading="lazy"
></iframe>
