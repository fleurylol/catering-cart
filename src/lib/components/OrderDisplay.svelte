<script>
	export let order;
	export let notes;
</script>

<div class="mt-2">
	<h2 class="text-lg font-bold">Totals:</h2>
	<div class="mb-2 flex w-fit justify-between gap-2">
		<div class="dressing">Spoons: {order.spoonTotal}</div>
		<div class="dressing">Tongs: {order.tongTotal}</div>
	</div>
	<div class="grid grid-cols-2 gap-2">
		<div class="dressing">Free 8oz: {order.free8oz}</div>
		<div class="dressing">Honey: {order.honey}</div>
		<div class="dressing">Roasted Almonds: {order.roasted_almonds}</div>
		<div class="dressing">Honey Roasted BBQ: {order.honeyRoastedBBQ}</div>
	</div>
	{#if notes.length > 0}
		<h1 class="pt-2 text-xl font-bold">Notes:</h1>
		<div class="grid grid-cols-1 gap-4 p-2">
			{#each notes as note}
				<div class="dressing">
					<span>{note.note}</span>
				</div>
			{/each}
		</div>
	{/if}
	{#if order.dressings.avoRanch > 0}
		<h1 class="pt-2 text-xl font-bold">Dressings:</h1>
		<div class="grid grid-cols-3 gap-4 p-2">
			<div class="dressing">
				<span> Avocado Lime Ranch </span><span>{order.dressings.avoRanch}</span>
			</div>
			<div class="dressing">
				<span>Garden Herb Ranch</span><span>{order.dressings.ranch}</span>
			</div>
			<div class="dressing">
				<span>Zesty Apple Cider</span><span>{order.dressings.zestyAppleCider}</span>
			</div>
			<div class="dressing">
				<span>Fat Free Honey Mustard</span><span>{order.dressings.fatFreeHoneyMustard}</span>
			</div>
			<div class="dressing">
				<span>Light Balsamic Vinaigrette</span><span
					>{order.dressings.lightBalsamicVinaigrette}</span
				>
			</div>
			<div class="dressing">
				<span>Light Italian</span><span>{order.dressings.lightItalian}</span>
			</div>
			<div class="dressing">
				<span>Creamy Salsa</span><span>{order.dressings.creamySalsa}</span>
			</div>
		</div>
	{/if}
</div>

<style>
	.dressing {
		text-align: center;
		border-radius: 10px;
		border: black 1px solid;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
	}
</style>
