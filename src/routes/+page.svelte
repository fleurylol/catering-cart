<script lang="ts">
	import { trays } from '$lib/trayInfoList';
	import type { TrayCart, BoxMeal, PaperGoods } from '$lib/types';
	import classnames from 'classnames';
	import { submitCart } from '$lib/theFunction';
	import BoxMealDisplay from '$lib/components/box-markings/BoxMealDisplay.svelte';
	import TrayContent from '$lib/components/tray-content/TrayContent.svelte';
	const tabs = [
		{ tab: 'HT', label: 'Hot Tray' },
		{ tab: 'CT', label: 'Cold Tray' },
		{ tab: 'BM', label: 'Box Meal' },
		{ tab: 'SK', label: 'Salad Kit' },
		{ tab: 'DG', label: 'Dry Good' },
		{ tab: 'OT', label: 'Others' }
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
	let hasPaperGoods = $state(false);
	let processedOrder = $state({
		guestCount: 0,
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
		paperGoods: {} as PaperGoods,
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
			cartDisplay: trayDisplay + ' ' + selectedSize + ' ' + selectedPremium,
			display: trayDisplay
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
		processedOrder.guestCount = 0;
		hasPaperGoods = false;
		orderSubmitted = false;
		trayDisplay = '';
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
		processedOrder = submitCart(trayCart, hasPaperGoods, processedOrder.guestCount);
		boxMeals = processedOrder.boxMeals;
		orderSubmitted = true;
		//debugging
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
						class="mt-2 h-10 w-10 border text-center"
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
			<div>Add an item to get started.</div>
			{#if orderSubmitted}
				<button class="rounded-md bg-red-500 p-2 text-white" onclick={() => resetCart()}
					>Reset</button
				>
			{/if}
		{/if}
		{#if trayCart.length !== 0}
			<div class="rounded-md border border-black p-2">
				<div class="flex size-fit flex-col p-2 text-lg">
					<label class="flex items-center"
						><input
							type="checkbox"
							class="mr-2 size-5"
							onchange={() => {
								hasPaperGoods = !hasPaperGoods;
							}}
						/>Paper Goods?</label
					>
					<label class="flex items-center"
						>Guest Count:<input
							class="ml-2 w-10 rounded-md border border-black text-center"
							value={'0'}
							onchange={(e) => {
								const target = e.target as HTMLInputElement;
								if (target) {
									processedOrder.guestCount = parseInt(target.value);
								}
							}}
						/></label
					>
				</div>
				{#each trayCart as { cartDisplay, qty, TRAYID }}
					<div class="flex items-center gap-2 rounded-md border-t py-2">
						<span>{cartDisplay}</span>
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
		{/if}
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
			<TrayContent {processedOrder} {hasPaperGoods} />
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
