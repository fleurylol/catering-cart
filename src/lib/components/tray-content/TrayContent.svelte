<script lang="ts">
	import type { ProcessedOrder } from '$lib/types';
	export let processedOrder: ProcessedOrder;
	export let hasPaperGoods;
</script>

{#if processedOrder.tongsTotal || processedOrder.spoonTotal > 0}
	<div class="flex flex-col">
		<h2 class="text-lg">Utensils & Paper Goods:</h2>
		<div class="flex">
			<div class="mr-2 flex flex-col rounded-md border border-black">
				<span class="border-b p-2">Tongs: {processedOrder.tongsTotal}</span>
				<span class="p-2">Spoons: {processedOrder.spoonTotal}</span>
			</div>
			{#if hasPaperGoods}
				<div class="mr-2 flex flex-col rounded-md border border-black">
					<span class="border-b p-2">Plates: {processedOrder.paperGoods.plates}</span>
					<span class="p-2">Mint & Wipe Kits: {processedOrder.paperGoods.mintWipeKits}</span>
				</div>
				<div class="mr-2 flex flex-col rounded-md border border-black">
					{#if processedOrder.paperGoods.utensilsKits >= 1}
						<span class="border-b p-2">Utensil Kits: {processedOrder.paperGoods.utensilsKits}</span>
					{/if}
					{#if processedOrder.paperGoods.utensilsKits === undefined}
						<span class="border-b p-2">Napkins: Yes</span>
					{/if}
					<span class="p-2">Cups: {processedOrder.paperGoods.cups}</span>
				</div>
			{/if}
		</div>
		<h2 class="text-lg">Dry Content:</h2>
		<div class="rounded-md border border-black">
			{#if processedOrder.free8oz >= 1}
				<div class="flex items-center rounded-md border-t py-1">
					<img src="Sauces.png" class="size-20" alt="Roasted Almonds" />
					<span class="ml-2">Free 8oz: {processedOrder.free8oz}</span>
				</div>
			{/if}
			{#if processedOrder.honey >= 1}
				<div class="flex items-center rounded-md border-t py-1">
					<img src="PureCloverHoney.png" class="size-20" alt="Roasted Almonds" />
					<span>Honey: {processedOrder.honey}</span>
				</div>
			{/if}
			{#if processedOrder.honeyRoastedBBQ >= 1}
				<div class="flex items-center rounded-md border-t py-1">
					<img src="HoneyRoastedBBQSauce.png" class="size-20" alt="Roasted Almonds" />
					<span>Honey Roasted BBQ: {processedOrder.honeyRoastedBBQ}</span>
				</div>
			{/if}
			{#if processedOrder.roastedAlmonds >= 1}
				<div class="flex items-center rounded-md border-t py-1">
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
{/if}

<style>
	.dressing {
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
	}
</style>
