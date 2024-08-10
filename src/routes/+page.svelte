<script lang="ts">
	import { trays } from '$lib/trayList';
	import { allTrays } from '$lib/traySearch';
	import type { TrayType, Notes } from '$lib/types';
	import classnames from 'classnames';
	let trayFilter = $state(trays.filter((tray) => tray.type === ''));
	let selectedTray = $state('');
	let selectedSize = $state('');
	let orderSubmitted = $state(false);
	let trayCart = $state<TrayType>([]);
	let notes = $state<Notes>([]);
	let order = $state({
		spoonTotal: 0,
		tongTotal: 0,
		free8oz: 0,
		honey: 0,
		roasted_almonds: 0,
		honeyRoastedBBQ: 0,
		dressings: {
			avoRanch: 0,
			ranch: 0,
			zestyAppleCider: 0,
			fatFreeHoneyMustard: 0,
			lightBalsamicVinaigrette: 0,
			lightItalian: 0,
			creamySalsa: 0
		}
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
				notes: allTrays.find((t) => t.name === selectedTray)?.notes!,
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
		order = {
			spoonTotal: 0,
			tongTotal: 0,
			free8oz: 0,
			honey: 0,
			roasted_almonds: 0,
			dressings: {
				avoRanch: 0,
				ranch: 0,
				zestyAppleCider: 0,
				fatFreeHoneyMustard: 0,
				lightBalsamicVinaigrette: 0,
				lightItalian: 0,
				creamySalsa: 0
			},
			honeyRoastedBBQ: 0
		};
		trayCart.forEach((tray) => {
			if (tray.notes) {
				const noteExists = notes.some((noteObj) => noteObj.note === tray.notes);
				if (!noteExists) {
					notes.push({ note: tray.notes });
				}
			}
			if (tray.utensil === 'Spoon') {
				order.spoonTotal += tray.trayQty;
			} else if (tray.utensil === 'Tong') {
				if (tray.tray === 'Grilled Bundle') {
					order.tongTotal += 3;
					order.honeyRoastedBBQ += 10;
				} else {
					order.tongTotal += tray.trayQty;
				}
			} else {
				console.log('Utensil not found');
			}

			const trayIndex = allTrays.findIndex((t) => t.name === tray.tray);
			if (trayIndex !== -1) {
				if (tray.size === 'S') {
					order.free8oz += allTrays[trayIndex].sizes.S?.free8oz!;
					order.honey += allTrays[trayIndex].sizes.S?.honey!;
					order.roasted_almonds += allTrays[trayIndex].sizes.S?.roasted_almonds!;
					order.dressings.avoRanch += allTrays[trayIndex].sizes.S?.dressings?.avoRanch!;
					order.dressings.ranch += allTrays[trayIndex].sizes.S?.dressings?.ranch!;
					order.dressings.zestyAppleCider +=
						allTrays[trayIndex].sizes.S?.dressings?.zestyAppleCider!;
					order.dressings.fatFreeHoneyMustard +=
						allTrays[trayIndex].sizes.S?.dressings?.fatFreeHoneyMustard!;
					order.dressings.lightBalsamicVinaigrette +=
						allTrays[trayIndex].sizes.S?.dressings?.lightBalsamicVinaigrette!;
					order.dressings.lightItalian += allTrays[trayIndex].sizes.S?.dressings?.lightItalian!;
					order.dressings.creamySalsa += allTrays[trayIndex].sizes.S?.dressings?.creamySalsa!;
				}
				if (tray.size === 'M') {
					order.free8oz += allTrays[trayIndex].sizes.M?.free8oz!;
					order.honey += allTrays[trayIndex].sizes.M?.honey!;
					order.roasted_almonds += allTrays[trayIndex].sizes.M?.roasted_almonds!;
					order.dressings.avoRanch += allTrays[trayIndex].sizes.M?.dressings?.avoRanch!;
					order.dressings.ranch += allTrays[trayIndex].sizes.M?.dressings?.ranch!;
					order.dressings.zestyAppleCider +=
						allTrays[trayIndex].sizes.M?.dressings?.zestyAppleCider!;
					order.dressings.fatFreeHoneyMustard +=
						allTrays[trayIndex].sizes.M?.dressings?.fatFreeHoneyMustard!;
					order.dressings.lightBalsamicVinaigrette +=
						allTrays[trayIndex].sizes.M?.dressings?.lightBalsamicVinaigrette!;
					order.dressings.lightItalian += allTrays[trayIndex].sizes.M?.dressings?.lightItalian!;
					order.dressings.creamySalsa += allTrays[trayIndex].sizes.M?.dressings?.creamySalsa!;
				}
				if (tray.size === 'L') {
					order.free8oz += allTrays[trayIndex].sizes.L?.free8oz!;
					order.honey += allTrays[trayIndex].sizes.L?.honey!;
					order.roasted_almonds += allTrays[trayIndex].sizes.L?.roasted_almonds!;
					order.dressings.avoRanch += allTrays[trayIndex].sizes.L?.dressings?.avoRanch!;
					order.dressings.ranch += allTrays[trayIndex].sizes.L?.dressings?.ranch!;
					order.dressings.zestyAppleCider +=
						allTrays[trayIndex].sizes.L?.dressings?.zestyAppleCider!;
					order.dressings.fatFreeHoneyMustard +=
						allTrays[trayIndex].sizes.L?.dressings?.fatFreeHoneyMustard!;
					order.dressings.lightBalsamicVinaigrette +=
						allTrays[trayIndex].sizes.L?.dressings?.lightBalsamicVinaigrette!;
					order.dressings.lightItalian += allTrays[trayIndex].sizes.L?.dressings?.lightItalian!;
					order.dressings.creamySalsa += allTrays[trayIndex].sizes.L?.dressings?.creamySalsa!;
				}
			} else {
				console.log('Tray not found' + tray.tray);
			}
		});
		orderSubmitted = true;
	}

	function resetOrder() {
		order = {
			spoonTotal: 0,
			tongTotal: 0,
			free8oz: 0,
			honey: 0,
			roasted_almonds: 0,
			dressings: {
				avoRanch: 0,
				ranch: 0,
				zestyAppleCider: 0,
				fatFreeHoneyMustard: 0,
				lightBalsamicVinaigrette: 0,
				lightItalian: 0,
				creamySalsa: 0
			},
			honeyRoastedBBQ: 0
		};
		trayCart = [];
		orderSubmitted = false;
		setActiveTab('');
	}
</script>

<div class="m-2 w-full">
	<div class="flex gap-1">
		<button class="item" onclick={() => setActiveTab('hot')}>Hot Tray </button>
		<button class="item" onclick={() => setActiveTab('cold')}>Cold Tray</button>
		<!-- <button class="item" onclick={() => setActiveTab('box')}>Box Meal</button> -->
		<!-- <button class="item" onclick={() => setActiveTab('salad')}>Salad Kits</button> -->
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
		<div class="flex justify-between">
			<button
				class="mt-2 rounded-lg bg-black p-2 text-white"
				onclick={() => addTrayToCart(selectedTray, selectedSize)}>Add to Cart</button
			>
			{#if orderSubmitted === true}
				<button class="mt-2 rounded-lg bg-red-500 p-2 text-white" onclick={() => resetOrder()}
					>Reset Cart</button
				>
			{/if}
		</div>
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
		<h2 class="text-lg font-bold">Totals:</h2>
		<div class="m-auto flex w-[200px] justify-between p-2">
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
	.dressing {
		text-align: center;
		border-radius: 10px;
		border: black 1px solid;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
	}
</style>
