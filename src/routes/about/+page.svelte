<script lang="ts">
	import { getQueryApiConfig } from '$lib/config.svelte';
	const config = getQueryApiConfig();
</script>

<div>
	<h1>About</h1>
	<pre>
		{JSON.stringify(config, null, 2)}
	</pre>
</div>
