<script>
	/**
	 * The Link to the URI resource you're trying to link to.
	 * @type {String}
	 */
	export let href;

	/**
	 * Additional class.
	 * @type {String}
	 */
	 export let className;
</script>

<a class={`transition-opacity hover:opacity-50 ${className ? className : ''}`} {href}><slot/></a>
