import type { PageServerLoad } from './$types';
import { getCraftEntry } from '$lib/functions/craftFetch.svelte'
import type { CraftPageEntry } from '$lib/types';
import { getCraftCurrentSite, getCraftUri} from '$lib/functions/common.svelte'

export const load: PageServerLoad = async ({ params }) => {
  const uri = getCraftUri()
  const { id } = getCraftCurrentSite() 
  console.log('loaded')
  return { 
    slug: params.slug,
    page: await getCraftEntry<CraftPageEntry>().uri(uri).siteId(id).one()
  };
};
