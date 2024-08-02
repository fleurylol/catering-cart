<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<NavBar />
<div class="m-auto flex max-w-[500px] justify-center">
	<slot></slot>
</div>
