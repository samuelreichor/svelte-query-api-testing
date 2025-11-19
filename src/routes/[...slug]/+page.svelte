<script lang="ts">
	import CraftPage from '$lib/components/CraftPage.svelte';
	import CraftNotImplemented from '$lib/components/CraftNotImplemented.svelte';
	import Home from '$lib/content/pages/Home.svelte';
	import HeadlineBlock from '$lib/content/blocks/HeadlineBlock.svelte';
	import { getEntry } from './data.remote'

	const entry = $derived(await getEntry());

	const { data } = $props();

	const config = {
		pages: {
			home: Home,
			news: CraftNotImplemented
		},
		components: {
			headline: HeadlineBlock,
			imageText: CraftNotImplemented,
			hyperLink: CraftNotImplemented,
			link: CraftNotImplemented
		}
	};
</script>

<div>
	<CraftPage content={data.page} {config} />
	<pre>
		{JSON.stringify(entry, null, 2)}
	</pre>
</div>
