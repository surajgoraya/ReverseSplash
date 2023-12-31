<script>
    /**
     * Any additional classes.
	 * @type {String?}
	 */
     export let className;
</script>

<main class={`container min-h-[screen] mx-auto px-4 ${className ? className : ''}`}>
    <slot/>
</main>