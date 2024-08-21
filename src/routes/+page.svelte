<script lang="ts">
	import { trays } from '$lib/trayInfoList';
	import type { TrayCart, BoxMeal } from '$lib/types';
	import classnames from 'classnames';
	import { submitCart } from '$lib/theFunction';
	import BoxMealDisplay from '$lib/components/box-markings/BoxMealDisplay.svelte';
	import TrayContent from '$lib/components/tray-content/TrayContent.svelte';
	const tabs = [
		{ tab: 'HT', label: 'Hot Tray' },
		{ tab: 'CT', label: 'Cold Tray' },
		{ tab: 'BM', label: 'Box Meal' },
		{ tab: 'SK', label: 'Salad Kit' },
		{ tab: 'DG', label: 'Dry Good' }
	];
	const contentTabs = [
		{
			tab: 'tray',
			label: 'Trays'
		},
		{
			tab: 'boxMeal',
			label: 'Box Meals'
		},
		{
			tab: 'saladKits',
			label: 'Salad Kits'
		}
	];
	let tab = $state('');
	let processedOrder = $state({
		tongsTotal: 0,
		spoonTotal: 0,
		free8oz: 0,
		honey: 0,
		honeyRoastedBBQ: 0,
		roastedAlmonds: 0,
		dressings: {
			avoRanch: 0,
			ranch: 0,
			zestyAppleCider: 0,
			fatFreeHoneyMustard: 0,
			lightBalsamicVinaigrette: 0,
			lightItalian: 0,
			creamySalsa: 0
		},
		boxMeals: [] as BoxMeal[],
		saladKits: {
			cob: false,
			spicy: false,
			market: false
		}
	});
	let boxMeals = $state<BoxMeal[]>([]);
	let orderContentTab = $state('tray');
	let trayFilter = $state(trays.filter((tray) => tray.type === ''));
	let selectedTray = $state('');
	let trayDisplay = $state('');
	let selectedSize = $state('');
	let selectedPremium = $state('');
	let trayQty = $state(1);
	let orderSubmitted = $state(false);
	let trayCart = $state<TrayCart[]>([]);

	function selectTray(id: string, name: string) {
		selectedTray = id;
		trayDisplay = name;
	}

	function addToCart() {
		const TRAYID = (tab + '|' + selectedTray + '|' + selectedSize + '|' + selectedPremium).replace(
			/\s/g,
			''
		);
		const trayItem = {
			TRAYID: TRAYID,
			qty: trayQty,
			display: trayDisplay + ' ' + selectedSize + ' ' + selectedPremium
		};
		const index = trayCart.findIndex((item) => item.TRAYID === TRAYID);
		if (index !== -1) {
			trayCart[index].qty += trayQty;
		} else {
			trayCart.push(trayItem);
		}
	}

	function resetCart() {
		trayCart = [];
		orderSubmitted = false;
		resetOrder();
	}

	function resetOrder() {
		selectedTray = '';
		selectedSize = '';
		selectedPremium = '';
		trayQty = 1;
		trayFilter = trays.filter(() => '');
	}

	function selectTab(id: string) {
		resetOrder();
		tab = id;
		trayFilter = trays.filter((tray) => tray.type === id);
	}
	function removeTray(TRAYID: string, qty: number) {
		if (qty > 1) {
			const index = trayCart.findIndex((item) => item.TRAYID === TRAYID);
			trayCart[index].qty -= 1;
		} else {
			trayCart = trayCart.filter((item) => item.TRAYID !== TRAYID);
		}
	}

	function submitOrder() {
		processedOrder = submitCart(trayCart);
		boxMeals = processedOrder.boxMeals;
		orderSubmitted = true;
		console.log(boxMeals);
	}
</script>

<div class="m-2 w-full space-y-2">
	<div class="flex gap-1">
		<!-- Label Select -->
		{#each tabs as { tab, label }}
			<button value={tab} class="item" onclick={() => selectTab(tab)}>{label}</button>
		{/each}
	</div>
	<div class="grid grid-cols-2 gap-2">
		<!-- Tray Select -->
		{#each trayFilter as tray}
			<button
				class={classnames({ 'size rounded-md': true, 'bg-gray-200': selectedTray === tray.id })}
				onclick={() => selectTray(tray.id, tray.name)}>{tray.name}</button
			>
		{/each}
	</div>
	{#if selectedTray}
		{#each trayFilter as tray}
			{#if tray.id === selectedTray}
				<div class="flex gap-2">
					<!-- Size Select -->
					{#each tray.sizes as size}
						<button
							class={classnames({ 'size rounded-md': true, 'bg-gray-200': selectedSize === size })}
							onclick={() => (selectedSize = size)}>{size}</button
						>
					{/each}
				</div>
				{#if selectedSize}
					<div class="flex gap-2">
						{#each tray.premium as premium}
							<button
								class={classnames({
									'size rounded-md': true,
									'bg-gray-200': selectedPremium === premium
								})}
								onclick={() => (selectedPremium = premium)}>{premium}</button
							>
						{/each}
					</div>
				{/if}

				<!-- add to cart -->
				{#if (selectedSize && tab !== 'BM') || (tab === 'BM' && selectedSize && selectedPremium)}
					<button class="rounded-md bg-black p-2 text-white" onclick={() => addToCart()}
						>Add to cart</button
					>
					<input
						class="mt-2 size-10 border text-center"
						type="number"
						value={1}
						onchange={(e) => {
							const target = e.target as HTMLInputElement;
							if (target) {
								trayQty = parseInt(target.value);
							}
						}}
					/>
				{/if}
			{/if}
		{/each}
	{/if}
	<div class="flex flex-col gap-2">
		{#if trayCart.length === 0}
			<div>Cart is empty</div>
		{/if}
		{#each trayCart as { display, qty, TRAYID }}
			<div class="flex items-center gap-2">
				<span>{display}</span>
				-
				<span>{qty}</span>
				|
				<button
					class="font-bold text-red-500"
					onclick={() => {
						removeTray(TRAYID, qty);
					}}>X</button
				>
			</div>
		{/each}
	</div>
	<!-- Submit Cart -->
	{#if trayCart.length > 0}
		<div class="flex space-x-2">
			<button
				class="rounded-md bg-black p-2 text-white"
				onclick={() => {
					submitOrder();
				}}>Submit Cart</button
			>
			{#if orderSubmitted}
				<button class="rounded-md bg-red-500 p-2 text-white" onclick={() => resetCart()}
					>Reset</button
				>
			{/if}
		</div>
	{/if}
	{#if orderSubmitted}
		<div class="flex gap-2">
			{#each contentTabs as { tab, label }}
				<button
					class={classnames({ 'size rounded-md': true, 'bg-gray-200': orderContentTab === tab })}
					onclick={() => (orderContentTab = tab)}>{label}</button
				>
			{/each}
		</div>
		{#if orderContentTab === 'tray'}
			<TrayContent {processedOrder} />
		{/if}
		{#if orderContentTab === 'boxMeal'}
			<div class="flex flex-col gap-2">
				<BoxMealDisplay {boxMeals} />
			</div>
		{/if}
		{#if orderContentTab === 'saladKits'}
			<div class="flex flex-col gap-2">
				<div>Cobb: {processedOrder.saladKits.cob ? 'Yes' : 'No'}</div>
				<div>Spicy: {processedOrder.saladKits.spicy ? 'Yes' : 'No'}</div>
				<div>Market: {processedOrder.saladKits.market ? 'Yes' : 'No'}</div>
			</div>
		{/if}
	{/if}
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
