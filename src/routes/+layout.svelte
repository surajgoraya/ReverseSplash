<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Container from '$lib/components/Container.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>ReverseSplash | Reverse search for Unsplash Images</title>
	<meta
		name="description"
		content="Reverse find Unsplash images you've downloaded (provided they have their original filename)"
	/>
</svelte:head>
<Navigation />
<Container className="mt-4">
	<slot />
</Container>
