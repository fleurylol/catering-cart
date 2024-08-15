<script lang="ts">
	import classnames from 'classnames';
	export let boxMealOrder;

	interface BoxMealOrder {
		id: string;
		qty: number;
	}

	boxMealOrder.forEach((box: BoxMealOrder) => {
		console.log(box.id);
	});
</script>

{#each boxMealOrder as box}
	<h1 class="text-xl font-bold">Box Meal {box.id}:</h1>
	<h1 class="text-lg underline">Entree:</h1>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span>Original Chick-Fil-A Chicken Sandwich</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span>Chick-Fil-A Spicy Chicken Sandwich</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span>Chilled Grilled Chicken Sub Sandwich</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span>Chick-Fil-A Nuggets</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span>Grilled Chicken Cool Wrap</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span
			class="h-4
   w-64 border-b border-black"
		></span>
	</div>

	<h1 class="text-lg underline">Sides:</h1>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black bg-black"></div>
		<span>Chick-Fil-A Waffle Potato Chips</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span>Fruit Cup</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span>Kale Crunch Side</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="size-5 rounded-full border border-black"></div>
		<span>Chocolate Chunk Cookie</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class="unselected"></div>
		<span>Chocolate Fudge Brownie</span>
	</div>
{/each}
<button onclick={() => console.log(boxMealOrder)}>Test</button>
<h1 class="text-xl font-bold">Box Meal Labels:</h1>

<style>
	.unselected {
		width: 1.25rem;
		height: 1.25rem;
		border: 1px solid black;
		border-radius: 50%;
	}
</style>
