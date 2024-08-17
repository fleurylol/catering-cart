<script lang="ts">
	import classnames from 'classnames';
	import type { BoxMeal } from '$lib/types';
	type Props = {
		boxMealOrder: {
			id: string;
			trayQty: number;
			content: BoxMeal;
		}[];
	};
	let { boxMealOrder }: Props = $props();
</script>

{#each boxMealOrder as box}
	<h1 class="text-xl">{box.id.split('|')[0]} Box Meal</h1>
	<h1 class="text-lg underline">Entree:</h1>
	<div class="flex items-center space-x-2">
		<div
			class={classnames({
				unselected: true,
				'bg-black': box.content.entree === 'Chick-Fil-A Sandwich'
			})}
		></div>
		<span>Original Chick-Fil-A Chicken Sandwich</span>
	</div>
	<div class="flex items-center space-x-2">
		<div
			class={classnames({ unselected: true, 'bg-black': box.content.entree === 'Spicy Sandwich' })}
		></div>
		<span>Chick-Fil-A Spicy Chicken Sandwich</span>
	</div>
	<div class="flex items-center space-x-2">
		<div
			class={classnames({ unselected: true, 'bg-black': box.content.entree === 'Nuggets' })}
		></div>
		<span>Chilled Grilled Chicken Sub Sandwich</span>
	</div>
	<div class="flex items-center space-x-2">
		<div
			class={classnames({
				unselected: true,
				'bg-black': box.content.entree === 'Chilled Grilled Sub'
			})}
		></div>
		<span>Chick-Fil-A Nuggets</span>
	</div>
	<div class="flex items-center space-x-2">
		<div
			class={classnames({
				unselected: true,
				'bg-black': box.content.entree === 'Grilled Cool Wrap'
			})}
		></div>
		<span>Grilled Chicken Cool Wrap</span>
	</div>
	<div class="flex items-center space-x-2">
		<div></div>
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
		<div class={classnames({ unselected: true, 'bg-black': box.content.side === 'Fruit' })}></div>
		<span>Fruit Cup</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class={classnames({ unselected: true, 'bg-black': box.content.side === 'Kale' })}></div>
		<span>Kale Crunch Side</span>
	</div>
	<div class="flex items-center space-x-2">
		<div class={classnames({ unselected: true, 'bg-black': box.content.treat === 'Cookie' })}></div>
		<span>Chocolate Chunk Cookie</span>
	</div>
	<div class="flex items-center space-x-2">
		<div
			class={classnames({ unselected: true, 'bg-black': box.content.treat === 'Brownie' })}
		></div>
		<span>Chocolate Fudge Brownie</span>
	</div>
{/each}
<button onclick={() => console.log(boxMealOrder)}>Test</button>

<style>
	.unselected {
		width: 1.25rem;
		height: 1.25rem;
		border: 1px solid black;
		border-radius: 50%;
	}
</style>
