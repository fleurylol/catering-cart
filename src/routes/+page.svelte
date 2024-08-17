<script lang="ts">
	import { trays } from '$lib/trayInfoList';
	import classnames from 'classnames';
	const tabs = [
		{ id: 'HT', label: 'Hot Tray' },
		{ id: 'CT', label: 'Cold Tray' },
		{ id: 'BM', label: 'Box Meal' },
		// { id: 'SK', label: 'Salad Kit' },
		{ id: 'DG', label: 'Dry Good' }
	];
	let tab = $state('');
	let trayFilter = $state(trays.filter((tray) => tray.type === ''));
	let selectedTray = $state('');
	let selectedSize = $state('');
	let selectedPremium = $state('');
	let trayQty = $state(1);
	type TrayCart = { TRAYID: string; qty: number };
	let trayCart = $state<TrayCart[]>([]);

	function addToCart() {
		const TRAYID = (tab + '|' + selectedTray + '|' + selectedSize + '|' + selectedPremium).replace(
			/\s/g,
			''
		);
		const trayItem = {
			TRAYID: TRAYID,
			qty: trayQty
		};
		const index = trayCart.findIndex((item) => item.TRAYID === TRAYID);
		if (index !== -1) {
			trayCart[index].qty += trayQty;
		} else {
			trayCart.push(trayItem);
		}
		console.log(trayCart);
	}

	function selectTab(id: string) {
		selectedTray = '';
		selectedSize = '';
		tab = id;
		trayFilter = trays.filter((tray) => tray.type === id);
	}
</script>

<div class="m-2 w-full space-y-2">
	<div class="flex gap-1">
		<!-- Label Select -->
		{#each tabs as { id, label }}
			<button value={id} class="item" onclick={() => selectTab(id)}>{label}</button>
		{/each}
	</div>
	<div class="grid grid-cols-2 gap-2">
		<!-- Tray Select -->
		{#each trayFilter as tray}
			<button
				class={classnames({ 'size rounded-md': true, 'bg-gray-200': selectedTray === tray.id })}
				onclick={() => (selectedTray = tray.id)}>{tray.name}</button
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
