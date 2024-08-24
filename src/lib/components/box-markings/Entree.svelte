<script lang="ts">
	import classnames from 'classnames';
	export let meal;
</script>

<div class="flex flex-col text-pretty">
	<h1 class="text-xl underline">Entree:</h1>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.entree === 'SANDWICH' })}></div>
		<span>Original Chick-Fil-A Chicken Sandwich</span>
	</div>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.entree === 'SPICY' })}></div>
		<span>Chick-Fil-A Spicy Chicken Sandwich</span>
	</div>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.entree === 'SUBBM' })}></div>
		<span>Chilled Grilled Chicken Sub Sandwich</span>
	</div>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.entree === 'NUGBM' })}></div>
		<span>Chick-Fil-A Nuggets</span>
	</div>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.entree === 'WRAPBM' })}></div>
		<span>Grilled Chicken Cool Wrap</span>
	</div>
	<div class="flex items-center gap-1">
		<div
			class={classnames({
				unselected: true,
				'bg-black':
					meal.entree === 'SPICYWRAPBM' ||
					meal.entree === 'VEGGIEWRAPBM' ||
					meal.entree === 'SPICYSUBBM'
			})}
		></div>
		{#if meal.entree === 'SPICYWRAPBM' || meal.entree === 'VEGGIEWRAPBM' || meal.entree === 'SPICYSUBBM'}
			<span class="w-48 underline underline-offset-4">{meal.display}</span>
		{:else}
			<span
				class="mt-2 h-4
   w-48 border-b border-black"
			></span>
		{/if}
	</div>
</div>

<style>
	.unselected {
		width: 1rem;
		height: 1rem;
		border: 1px solid black;
		border-radius: 50%;
	}
</style>
