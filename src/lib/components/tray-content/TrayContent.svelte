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
	<h2>Dressings</h2>
	<div class="flex flex-col">
		<div class="flex items-center border">
			<span>Avocado Lime Ranch: {processedOrder.avocadoLimeRanch}</span>
		</div>
	</div>
</div>
