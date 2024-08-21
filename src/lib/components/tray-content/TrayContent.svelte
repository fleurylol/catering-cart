<script>
	export let processedOrder;
</script>

<div class="flex flex-col">
	<h2>Utensils:</h2>
	<div class="flex space-x-2">
		<span class="border p-2">Tongs: {processedOrder.tongsTotal}</span>
		<span class="border p-2">Spoons: {processedOrder.spoonTotal}</span>
	</div>
	<h2>Dry Content:</h2>
	<div class="">
		<div class="flex items-center border">
			<img src="Sauces.png" class="size-20" alt="Roasted Almonds" />
			<span class="ml-2">Free 8oz: {processedOrder.free8oz}</span>
		</div>
		<div class="flex items-center border">
			<img src="PureCloverHoney.png" class="size-20" alt="Roasted Almonds" />
			<span>Honey: {processedOrder.honey}</span>
		</div>
		<div class="flex items-center border">
			<img src="HoneyRoastedBBQSauce.png" class="size-20" alt="Roasted Almonds" />
			<span>Honey Roasted BBQ: {processedOrder.honeyRoastedBBQ}</span>
		</div>
		<div class="flex items-center border">
			<img src="RoastedAlmonds.png" class="size-20" alt="Roasted Almonds" />
			<span>Roasted Almonds: {processedOrder.roastedAlmonds}</span>
		</div>
	</div>
</div>
<div>
	<h2>Dressings:</h2>
	<div class="flex flex-col border">
		<span class="dressing">Avocado Lime Ranch: {processedOrder.dressings.avoRanch}</span>
		<span class="dressing">Garden Herb Ranch: {processedOrder.dressings.ranch}</span>
		<span class="dressing">Zesty Apple Cider: {processedOrder.dressings.zestyAppleCider}</span>
		<span class="dressing"
			>Fat Free Honey Mustard: {processedOrder.dressings.fatFreeHoneyMustard}</span
		>
		<span class="dressing">Light Balsamic: {processedOrder.dressings.lightBalsamicVinaigrette}</span
		>
		<span class="dressing">Light Italian: {processedOrder.dressings.lightItalian}</span>
		<span class="dressing">Creamy Salsa: {processedOrder.dressings.creamySalsa}</span>
	</div>
</div>

<style>
	.dressing {
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
	}
</style>
