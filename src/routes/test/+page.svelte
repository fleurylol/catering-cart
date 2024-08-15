<script lang="ts">

</script>

<div class="m-2 w-full">
	<div class="flex gap-1">
		<button class="item">Hot Trays</button>
		<button class="item">Cold Trays</button>
		<button class="item">Box Meals</button>
		<button class="item">Salad Kits</button>
		<button class="item">Dry Goods</button>
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
