<script>
	let hotTab = $state(false);
	let coldTab = $state(false);
	let boxTab = $state(false);
	let saladTab = $state(false);
	let tray = $state('');
	let size = $state('');
	// @ts-ignore
	let selectedTrays = $state([]);
	/**
	 * @param {string} tab
	 */
	function setActiveTab(tab) {
		hotTab = coldTab = boxTab = saladTab = false;
		tray = '';
		size = '';
		if (tab === 'hot') hotTab = true;
		if (tab === 'cold') coldTab = true;
		if (tab === 'box') boxTab = true;
		if (tab === 'salad') saladTab = true;
	}
	/**
	 * @param {string} selcTray
	 */
	function selectTray(selcTray) {
		tray = selcTray;
	}

	/**
	 * @param {string} selcSize
	 */
	function setSize(selcSize) {
		size = selcSize;
	}

	/**
	 * @param {{ tray: string, size: string }} tray
	 */
	function addTrayToCart(tray) {
		selectedTrays = [...selectedTrays, tray];
	}

	const hotTrays = [
		{ name: 'Nuggets' },
		{ name: 'Strips' },
		{ name: 'Mac & Cheese' },
		{ name: 'Chick-n-Mini' },
		{ name: 'Grilled Bundle' }
	];
	const coldTrays = [
		{ name: 'Fruit' },
		{ name: 'Salad' },
		{ name: 'Kale' },
		{ name: 'Wrap' },
		{ name: 'Grilled' }
	];
</script>

<div class="m-2 w-full">
	<div class="flex gap-1">
		<button class="item" onclick={() => setActiveTab('hot')}>Hot Tray </button>
		<button class="item" onclick={() => setActiveTab('cold')}>Cold Tray</button>
		<button class="item" onclick={() => setActiveTab('box')}>Box Meal</button>
		<button class="item" onclick={() => setActiveTab('salad')}>Salad Kits</button>
	</div>
	{#if hotTab}
		<div class="mt-2 grid grid-cols-2 gap-2">
			{#each hotTrays as hotTray}
				<button class="trayItem" onclick={() => selectTray(hotTray.name)}>{hotTray.name}</button>
			{/each}
		</div>
		{#if tray === 'Nuggets'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('M')}>M</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
		{#if tray === 'Strips'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('M')}>M</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
		{#if tray === 'Mac & Cheese'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
		{#if tray === 'Chick-n-Mini'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
		{#if tray === 'Grilled Bundle'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('X')}>X</button>
			</div>
		{/if}
		<div class="mt-2 text-xl">{tray} {size}</div>
		{#if size}
			<button
				class="rounded-lg bg-black p-2 text-white"
				onclick={() => addTrayToCart({ tray, size })}>Add to Cart</button
			>
		{/if}
	{/if}
	{#if coldTab}
		<div class="mt-2 grid grid-cols-2 gap-2">
			{#each coldTrays as coldTray}
				<button class="trayItem" onclick={() => selectTray(coldTray.name)}>{coldTray.name}</button>
			{/each}
		</div>
		{#if tray === 'Salad'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
		{#if tray === 'Fruit'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
		{#if tray === 'Kale'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
		{#if tray === 'Wrap'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('M')}>M</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
		{#if tray === 'Grilled'}
			<div class="mt-2 flex gap-2">
				<button class="size rounded-md" onclick={() => setSize('S')}>S</button>
				<button class="size rounded-md" onclick={() => setSize('M')}>M</button>
				<button class="size rounded-md" onclick={() => setSize('L')}>L</button>
			</div>
		{/if}
	{/if}
	{#if boxTab}
		<div>box area</div>
	{/if}
	{#if saladTab}
		<div>salad area</div>
	{/if}
	<div class="mt-2">
		<h2 class="text-lg font-bold">Cart:</h2>
		{#if selectedTrays.length === 0}
			<div>Cart is empty</div>
		{/if}
		{#each selectedTrays as tray}
			<div>{tray.tray} {tray.size}</div>
		{/each}
	</div>
</div>

<style>
	.item,
	.size {
		flex: 1;
		font-size: large;
		padding: 1rem;
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
