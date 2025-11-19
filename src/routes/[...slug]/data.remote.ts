import { query } from '$app/server';
import { getCraftEntry } from '$lib/functions/craftFetch.svelte';
import type { CraftPageEntry } from '$lib/types';
import { getCraftCurrentSite, getCraftUri } from '$lib/functions/common.svelte';


export const getEntry = query(async () => {
  const uri = getCraftUri();
	const { id } = getCraftCurrentSite();

	return await getCraftEntry<CraftPageEntry>().uri(uri).siteId(id).one();
});
