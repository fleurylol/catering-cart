<script lang="ts">
	import { trays } from '$lib/trayList';
	import { allTrays } from '$lib/traySearch';
	import type { TrayType, OrderType } from '$lib/types';
	import classnames from 'classnames';
	let trayFilter = $state(trays.filter((tray) => tray.type === ''));
	let selectedTray = $state('');
	let selectedSize = $state('');
	let trayCart = $state<TrayType>([]);
	let order = $state({
		spoonTotal: 0,
		tongTotal: 0,
		free8oz: 0,
		honey: 0,
		roasted_almonds: 0,
		dressings: 0
	});
	function setActiveTab(tab: string) {
		selectedSize = '';
		selectedTray = '';
		trayFilter = trays.filter((tray) => tray.type === tab);
	}
	function selectTray(tray: string) {
		selectedTray = tray;
	}
	function setSize(size: string) {
		selectedSize = size;
	}
	function addTrayToCart(selectedTray: string, selectedSize: string) {
		if (trayCart.find((tray) => tray.tray === selectedTray && tray.size === selectedSize)) {
			const trayIndex = trayCart.findIndex(
				(tray) => tray.tray === selectedTray && tray.size === selectedSize
			);
			trayCart[trayIndex].trayQty += 1;
		} else {
			trayCart.push({
				id: crypto.randomUUID(),
				trayQty: 1,
				utensil: allTrays.find((t) => t.name === selectedTray)?.utensil!,
				tray: selectedTray,
				size: selectedSize
			});
		}
	}

	function removeTray(trayQty: number, trayid: string) {
		if (trayQty > 1) {
			const trayIndex = trayCart.findIndex((tray) => tray.id === trayid);
			trayCart[trayIndex].trayQty -= 1;
		} else {
			trayCart = trayCart.filter((tray) => tray.id !== trayid);
		}
	}

	function submitCart() {
		trayCart.forEach((tray) => {
			if (tray.utensil === 'Spoon') {
				order.spoonTotal += tray.trayQty;
			} else if (tray.utensil === 'Tong') {
				if (tray.tray === 'Grilled Bundle') {
					console.log('Grilled Bundle');
					order.tongTotal += 3;
				} else {
					order.tongTotal += tray.trayQty;
				}
			} else {
				console.log('Utensil not found');
			}
			console.log(tray.tray);

			const trayIndex = allTrays.findIndex((t) => t.name === tray.tray);
			if (trayIndex !== -1) {
				if (tray.size === 'S') {
					order.free8oz += allTrays[trayIndex].sizes.S?.free8oz!;
					order.honey += allTrays[trayIndex].sizes.S?.honey!;
					order.roasted_almonds += allTrays[trayIndex].sizes.S?.roasted_almonds!;
				}
				if (tray.size === 'M') {
					order.free8oz += allTrays[trayIndex].sizes.M?.free8oz!;
					order.honey += allTrays[trayIndex].sizes.M?.honey!;
					order.roasted_almonds += allTrays[trayIndex].sizes.M?.roasted_almonds!;
				}
				if (tray.size === 'L') {
					order.free8oz += allTrays[trayIndex].sizes.L?.free8oz!;
					order.honey += allTrays[trayIndex].sizes.L?.honey!;
					order.roasted_almonds += allTrays[trayIndex].sizes.L?.roasted_almonds!;
				}
			} else {
				console.log('Tray not found' + tray.tray);
			}
		});
	}
</script>

<div class="m-2 w-full">
	<div class="flex gap-1">
		<button class="item" onclick={() => setActiveTab('hot')}>Hot Tray </button>
		<button class="item" onclick={() => setActiveTab('cold')}>Cold Tray</button>
		<button class="item" onclick={() => setActiveTab('box')}>Box Meal</button>
		<button class="item" onclick={() => setActiveTab('salad')}>Salad Kits</button>
		<button class="item" onclick={() => setActiveTab('dry')}>Dry Goods</button>
	</div>
	<div class="mt-2 grid grid-cols-2 gap-2">
		{#each trayFilter as tray}
			<button
				class={classnames({ trayItem: true, 'bg-gray-200': tray.name === selectedTray })}
				onclick={() => selectTray(tray.name)}>{tray.name}</button
			>
		{/each}
	</div>
	{#if selectedTray}
		{#each trayFilter as tray}
			{#if tray.name === selectedTray}
				<div class="mt-2 flex gap-2">
					{#each tray.sizes as size}
						<button
							class={classnames({ 'size rounded-md': true, 'bg-gray-200': size === selectedSize })}
							onclick={() => setSize(size)}>{size}</button
						>
					{/each}
				</div>
			{/if}
		{/each}
	{/if}
	{#if selectedSize}
		<button
			class="mt-2 rounded-lg bg-black p-2 text-white"
			onclick={() => addTrayToCart(selectedTray, selectedSize)}>Add to Cart</button
		>
	{/if}
	<div class="mt-2">
		<h2 class="text-lg font-bold">Cart:</h2>
		{#if trayCart.length === 0}
			<div>Cart is empty</div>
		{/if}
		{#each trayCart as tray}
			<div class="flex space-x-1">
				<!-- remove func  -->
				<div>
					{tray.trayQty}{' x '}
					{tray.tray}
					{#if tray.size !== 'One Size'}{' - '}{tray.size}{' | '}{/if}
				</div>
				<button
					class="font-bold text-red-500"
					onclick={() => {
						removeTray(tray.trayQty, tray.id);
					}}>X</button
				>
			</div>
		{/each}
		{#if trayCart.length >= 1}
			<button class="mt-2 rounded-lg bg-black p-2 text-white" onclick={() => submitCart()}
				>Submit</button
			>
		{/if}
	</div>
	<div class="mt-2">
		<h2 class="text-lg font-bold">Utensil Totals:</h2>
		<div>Spoons: {order.spoonTotal}</div>
		<div>Tongs: {order.tongTotal}</div>
		<div>Free 8oz: {order.free8oz}</div>
		<div>Honey: {order.honey}</div>
		<div>Roasted Almonds: {order.roasted_almonds}</div>
		<div>Dressings: {order.dressings}</div>
	</div>
</div>

<style>
	.item,
	.size {
		flex: 1;
		font-size: large;
		padding: 0.5rem;
		text-align: center;
		border: black 1px solid;
	}
	.item:hover,
	.trayItem:hover,
	.size:hover {
		background-color: #f1f1f1;
		cursor: pointer;
	}

	.trayItem {
		border-radius: 10px;
		border: black 1px solid;
		font-size: large;
		padding: 8px;
		padding: 0.5rem;
	}
</style>
