<script lang="ts">
	import RelatedNews from './RelatedNews.svelte';

	const { data } = $props();
</script>

<h1>{data.page.title}</h1>

<pre>
	{JSON.stringify(data.page, null, 2)}
</pre>

<RelatedNews/>
