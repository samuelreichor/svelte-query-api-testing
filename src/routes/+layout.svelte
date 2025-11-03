<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="app">
	<nav>
		<ul class="flex gap-4">
			<li><a href="/">Home</a></li>
			<li><a href="/es">Home ES</a></li>
			<li><a href="/de">Home DE</a></li>
		</ul>
	</nav>
	<main>
		{@render children()}
	</main>
</div>

<style>
	.app {
		padding: 2rem;
		min-height: 100vh;
		background-color: black;
		color: white;
	}
</style>
