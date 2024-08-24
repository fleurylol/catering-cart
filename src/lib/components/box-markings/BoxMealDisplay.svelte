<script>
	export let boxMeals;
	import Entree from './Entree.svelte';
	import Side from './Side.svelte';
	let boxIndex = 0;
	function nextBox() {
		boxIndex = (boxIndex + 1) % boxMeals.length;
	}
</script>

{#if boxMeals.length > 0}
	<button class="rounded-md bg-black text-white" onclick={() => nextBox()}>Next Box Meal</button>
	<h1 class="text-xl font-bold">{boxMeals[boxIndex].qty} - {boxMeals[boxIndex].display}</h1>
	<div class="grid grid-cols-1 gap-4">
		<Entree meal={boxMeals[boxIndex]} />
		<Side meal={boxMeals[boxIndex]} />
	</div>
{/if}
