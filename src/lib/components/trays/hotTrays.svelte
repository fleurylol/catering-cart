<script>
	import { selectSize } from '../SizeButton.svelte';
	import { selectTray } from '../TraySelect.svelte';
	let size = selectSize();
	let tray = selectTray();
</script>

{#if tray.name === 'Nuggets'}
	<div class="mt-2 flex gap-2">
		<button class="size rounded-md" onclick={() => (size.size = 'S')}>S</button>
		<button class="size rounded-md" onclick={() => (size.size = 'M')}>M</button>
		<button class="size rounded-md" onclick={() => (size.size = 'L')}>L</button>
	</div>
{/if}
{#if tray.name === 'Strips'}
	<div class="mt-2 flex gap-2">
		<button class="size rounded-md" onclick={() => (size.size = 'S')}>S</button>
		<button class="size rounded-md" onclick={() => (size.size = 'M')}>M</button>
		<button class="size rounded-md" onclick={() => (size.size = 'L')}>L</button>
	</div>
{/if}
{#if tray.name === 'Mac & Cheese'}
	<div class="mt-2 flex gap-2">
		<button class="size rounded-md" onclick={() => (size.size = 'S')}>S</button>
		<button class="size rounded-md" onclick={() => (size.size = 'L')}>L</button>
	</div>
{/if}
{#if tray.name === 'Chick-n-Mini'}
	<div class="mt-2 flex gap-2">
		<button class="size rounded-md" onclick={() => (size.size = 'S')}>S</button>
		<button class="size rounded-md" onclick={() => (size.size = 'L')}>L</button>
	</div>
{/if}
{#if tray.name === 'Grilled Bundle'}
	<div class="mt-2 flex gap-2">
		<button class="size rounded-md" onclick={() => (size.size = 'X')}>L</button>
	</div>
{/if}

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
