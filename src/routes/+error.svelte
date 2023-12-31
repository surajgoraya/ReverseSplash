<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import Link from '$lib/components/Link.svelte';
</script>

<h1 class="font-bold text-3xl md:text-2xl">{$page.status}</h1>
{#if $page.error.code && $page.error.code === 'VERIFICATION_BIT_FAILED'}
	<h2 class="font-light text-2xl md:text-xl my-4">{`Invalid Unsplash Image. Filename of the file doesn't match the file name convention unsplash images use. See example below:`}</h2>
	<h3 class="font-extralight text-xl md:text-lg mb-4"><kbd class="bg-ctp-crust p-2 font-mono rounded-lg">xxx-xxx-xxxx-unsplash.jpg</kbd></h3>
{:else}
	<h2 class="font-light text-2xl md:text-xl my-4">{$page.error.message}</h2>
{/if}
<Link className={'text-ctp-pink mt-8'} href={'/'}>&larr; Return Home</Link>
