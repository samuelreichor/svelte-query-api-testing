<script lang="ts">
	import { getCraftEntry } from '$lib/functions/craftFetch.svelte';
	import { onMount } from 'svelte';
  
  type News = {
    title: string,
  }

  let news: News[]

  async function fetchLatestNews() {        
    return await getCraftEntry<News[]>().section('news').limit(3).all()
  }

  onMount(async() => {
    news = await fetchLatestNews()
  })
</script>

<h2>Related News</h2>
{#if news?.length > 0}
  <ul>
    {#each news as newsArticle }
      <li>
        <h3>{newsArticle.title}</h3>
      </li>
    {/each}
  </ul>
{/if}
