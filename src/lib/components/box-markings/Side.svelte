<script>
	import classnames from 'classnames';
	export let meal;
</script>

<div class="flex flex-col text-pretty">
	<h1 class="text-xl underline">Side:</h1>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': true })}></div>
		<span>Chick-Fil-A Waffle Potato Chips</span>
	</div>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.premium === 'Fruit' })}></div>
		<span>Fruit Cup</span>
	</div>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.premium === 'Kale' })}></div>
		<span>Kale Crunch Side</span>
	</div>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.side === 'Cookie' })}></div>
		<span>Chocolate Chunk Cookie</span>
	</div>
	<div class="flex items-center gap-1">
		<div class={classnames({ unselected: true, 'bg-black': meal.side === 'Brownie' })}></div>
		<span>Chocolate Fudge Brownie</span>
	</div>
	<div class="flex items-center gap-1">
		<div class="unselected"></div>
		<span
			class="mt-2 h-4
w-48 border-b border-black"
		></span>
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
