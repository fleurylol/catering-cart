<script lang="ts">
	export let boxMealOrder;

	boxMealOrder.forEach((box: { id: string }) => {
		console.log(box.id);
	});
</script>

<div></div>
