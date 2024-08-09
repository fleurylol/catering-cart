<script>
	$effect(() => {
		const order = localStorage.getItem('order');
		const orders = order ? JSON.parse(order) : [];
		console.log(orders);
	});
</script>

<div></div>
