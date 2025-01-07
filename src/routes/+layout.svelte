<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
 </script>
 
 <Header />
 
 <main>
	<slot></slot>
 </main>
 
 <Footer />
 