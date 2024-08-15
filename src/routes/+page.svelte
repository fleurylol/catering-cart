<script lang="ts">
	import { trays } from '$lib/trayList';
	import BoxLabels from '$lib/components/box-markings/BoxLabels.svelte';
	import OrderDisplay from '$lib/components/OrderDisplay.svelte';
	import { allTrays } from '$lib/traySearch';
	import type { TrayType, Notes, BoxType, BoxMealType } from '$lib/types';
	import classnames from 'classnames';
	import { createBoxMeal } from '$lib/theFunction';
	let trayFilter = $state(trays.filter((tray) => tray.type === ''));
	let selectedTab = $state('');
	let selectedTray = $state('');
	let selectedSize = $state('');
	let premium = $state('');
	let trayQty = $state(1);
	let boxMeals = $state<BoxMealType>([]);
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
	let boxMealOrder = $state<BoxType>([]);
	function setActiveTab(tab: string) {
		selectedSize = '';
		selectedTray = '';
		premium = '';
		trayQty = 1;
		trayFilter = trays.filter((tray) => tray.type === tab);
		selectedTab = tab;
	}
	function selectTray(tray: string) {
		selectedTray = tray;
	}
	function setSize(size: string) {
		selectedSize = size;
	}
	function setPremium(item: string) {
		premium = item;
	}

	function addTrayToCart(selectedTray: string, selectedSize: string) {
		if (
			trayCart.find(
				(tray) =>
					tray.tray === selectedTray && tray.size === selectedSize && tray.boxExtra === premium
			)
		) {
			const trayIndex = trayCart.findIndex(
				(tray) => tray.tray === selectedTray && tray.size === selectedSize
			);
			trayCart[trayIndex].trayQty += trayQty;
		} else {
			trayCart.push({
				id: crypto.randomUUID(),
				trayQty: trayQty,
				utensil: allTrays.find((t) => t.name === selectedTray)?.utensil!,
				notes: allTrays.find((t) => t.name === selectedTray)?.notes!,
				tray: selectedTray,
				size: selectedSize,
				boxExtra: premium
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
		orderClear();
		trayCart.forEach((tray) => {
			if (tray.notes) {
				const noteExists = notes.some((noteObj) => noteObj.note === tray.notes);
				if (!noteExists) {
					notes.push({ note: tray.notes });
				}
			}

			if (tray.boxExtra) {
				const boxId = tray.tray + '|' + tray.size + '|' + tray.boxExtra;
				const boxIndex = boxMealOrder.findIndex((box) => box.id === boxId);
				if (boxIndex !== -1) {
					boxMealOrder[boxIndex].trayQty += tray.trayQty;
				} else {
					boxMealOrder.push({
						id: boxId,
						trayQty: tray.trayQty
					});
					boxMealOrder.forEach((box) => {
						const boxMeal = createBoxMeal(box.id);
						boxMeals.push(boxMeal);
					});
				}
			}

			if (tray.utensil === 'Spoon') {
				order.spoonTotal += tray.trayQty;
			} else if (tray.utensil === 'Tong') {
				if (tray.tray === 'Grilled Bundle') {
					order.tongTotal += 3 * tray.trayQty;
					order.honeyRoastedBBQ += 10 * tray.trayQty;
				} else {
					order.tongTotal += tray.trayQty;
				}
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
			}
		});
		orderSubmitted = true;
	}

	function orderClear() {
		boxMeals = [];
		boxMealOrder = [];
		trayQty = 1;
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
	}

	function resetOrder() {
		orderClear();
		premium = '';
		trayCart = [];
		notes = [];
		orderSubmitted = false;
		setActiveTab('');
	}
</script>

<div class="m-2 w-full">
	<div class="flex gap-1">
		<button
			class={classnames({ item: true, 'bg-gray-200': selectedTab === 'hot' })}
			onclick={() => setActiveTab('hot')}
			>Hot Tray
		</button>
		<button
			class={classnames({ item: true, 'bg-gray-200': selectedTab === 'cold' })}
			onclick={() => setActiveTab('cold')}>Cold Tray</button
		>
		<button
			class={classnames({ item: true, 'bg-gray-200': selectedTab === 'box' })}
			onclick={() => setActiveTab('box')}>Box Meal</button
		>
		<!-- <button class={classnames({ item: true, 'bg-gray-200': selectedTab === 'salad' })} onclick={() => setActiveTab('salad')}>Salad Kits</button> -->
		<button
			class={classnames({ item: true, 'bg-gray-200': selectedTab === 'dry' })}
			onclick={() => setActiveTab('dry')}>Dry Goods</button
		>
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
				<h3 class="text-xl">
					Select a {selectedTab === 'box' ? 'Treat:' : 'Size:'}
				</h3>
				<div class="mt-2 flex gap-2">
					{#each tray.sizes as size}
						<button
							class={classnames({ 'size rounded-md': true, 'bg-gray-200': size === selectedSize })}
							onclick={() => setSize(size)}>{size}</button
						>
					{/each}
				</div>
				<div class="mt-2">
					{#if selectedTab === 'box' && selectedSize}
						<h3 class="text-xl">Has a Kale Crunch or a Fruit Cup?</h3>
						<div class="mt-2 flex gap-2">
							{#each tray.premium! as item}
								<button
									class={classnames({
										'size rounded-md': true,
										'bg-gray-200': item === premium
									})}
									onclick={() => setPremium(item)}>{item}</button
								>
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	{/if}
	<div class="flex justify-between space-x-2">
		{#if (selectedSize && selectedTab !== 'box') || (selectedTab === 'box' && premium)}
			<div>
				<button
					class="mr-4 mt-2 rounded-lg bg-black p-2 text-white"
					onclick={() => addTrayToCart(selectedTray, selectedSize)}>Add to Cart</button
				>
				<span class="text-sm">Qty:</span>
				<input
					class="mt-2 size-10 border text-center"
					value="1"
					onchange={(e) => {
						const target = e.target as HTMLInputElement;
						if (target) {
							trayQty = parseInt(target.value);
						}
					}}
				/>
			</div>
		{/if}
		{#if orderSubmitted === true}
			<button class="mt-2 rounded-lg bg-red-500 p-2 text-white" onclick={() => resetOrder()}
				>Reset Cart</button
			>
		{/if}
	</div>
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
					{#if tray.boxExtra !== 'N/A'}{tray.boxExtra}{/if}
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
	<div class="mt-2 space-y-3">
		<OrderDisplay {order} {notes} />
		<!-- <BoxPage {boxMealOrder} /> -->
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
