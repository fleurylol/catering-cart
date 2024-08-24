<script lang="ts">
	import type { ProcessedOrder } from '$lib/types';
	export let processedOrder: ProcessedOrder;
	export let hasPaperGoods;
</script>

<div class="flex flex-col">
	<h2>Utensils & Paper Goods:</h2>
	<div class="flex space-x-2">
		<span class="border p-2">Tongs: {processedOrder.tongsTotal}</span>
		<span class="border p-2">Spoons: {processedOrder.spoonTotal}</span>
		{#if hasPaperGoods}
			<span class="border p-2">Plates: {processedOrder.paperGoods.plates}</span>
			{#if processedOrder.paperGoods.utensilsKits >= 1}
				<span class="border p-2">Utensil Kits: {processedOrder.paperGoods.utensilsKits}</span>
			{/if}
			{#if processedOrder.paperGoods.utensilsKits === undefined}
				<span class="border p-2">Napkins: Yes</span>
			{/if}
		{/if}
	</div>
	<h2>Dry Content:</h2>
	<div class="">
		{#if processedOrder.free8oz >= 1}
			<div class="flex items-center border">
				<img src="Sauces.png" class="size-20" alt="Roasted Almonds" />
				<span class="ml-2">Free 8oz: {processedOrder.free8oz}</span>
			</div>
		{/if}
		{#if processedOrder.honey >= 1}
			<div class="flex items-center border">
				<img src="PureCloverHoney.png" class="size-20" alt="Roasted Almonds" />
				<span>Honey: {processedOrder.honey}</span>
			</div>
		{/if}
		{#if processedOrder.honeyRoastedBBQ >= 1}
			<div class="flex items-center border">
				<img src="HoneyRoastedBBQSauce.png" class="size-20" alt="Roasted Almonds" />
				<span>Honey Roasted BBQ: {processedOrder.honeyRoastedBBQ}</span>
			</div>
		{/if}
		{#if processedOrder.roastedAlmonds >= 1}
			<div class="flex items-center border">
				<img src="RoastedAlmonds.png" class="size-20" alt="Roasted Almonds" />
				<span>Roasted Almonds: {processedOrder.roastedAlmonds}</span>
			</div>
		{/if}
	</div>
</div>
{#if processedOrder.dressings.avoRanch >= 1}
	<div>
		<h2>Dressings:</h2>
		<div class="flex flex-col border">
			<span class="dressing">Avocado Lime Ranch: {processedOrder.dressings.avoRanch}</span>
			<span class="dressing">Garden Herb Ranch: {processedOrder.dressings.ranch}</span>
			<span class="dressing">Zesty Apple Cider: {processedOrder.dressings.zestyAppleCider}</span>
			<span class="dressing"
				>Fat Free Honey Mustard: {processedOrder.dressings.fatFreeHoneyMustard}</span
			>
			<span class="dressing"
				>Light Balsamic: {processedOrder.dressings.lightBalsamicVinaigrette}</span
			>
			<span class="dressing">Light Italian: {processedOrder.dressings.lightItalian}</span>
			<span class="dressing">Creamy Salsa: {processedOrder.dressings.creamySalsa}</span>
		</div>
	</div>
{/if}

<style>
	.dressing {
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
	}
</style>
