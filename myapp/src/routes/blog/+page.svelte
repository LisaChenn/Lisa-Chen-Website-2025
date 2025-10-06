<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';

  export let data: {
    posts: Array<{
      slug: string; title: string; date: string;
      description?: string; tags?: string[]; cover?: string;
    }>;
    tags: string[];
  } = { posts: [], tags: [] };

  let q = '';
  let activeTag: string | 'all' = 'all';

  $: filtered = (data?.posts ?? []).filter((p) => {
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      (p.description ?? '').toLowerCase().includes(q.toLowerCase()) ||
      (p.tags ?? []).some((t) => t.toLowerCase().includes(q.toLowerCase()));
    const matchesTag = activeTag === 'all' || (p.tags ?? []).includes(activeTag);
    return matchesQ && matchesTag;
  });

  function fmtDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  }
</script>

<Navbar />

<section class="main">
  <div class="container">
    <header class="header">
      <h1>BLOG</h1>
      <p class="sub">Writing on engineering, projects, and notes in progress.</p>

      <div class="toolbar">
        <input
          class="search"
          type="search"
          placeholder="Search posts…"
          bind:value={q}
          aria-label="Search blog posts" />

        <div class="tags">
          <button
            class="chip {activeTag === 'all' ? 'active' : ''}"
            on:click={() => (activeTag = 'all')}
            type="button">
            All
          </button>
          {#each data.tags as t}
            <button
              class="chip {activeTag === t ? 'active' : ''}"
              on:click={() => (activeTag = t)}
              type="button">
              {t}
            </button>
          {/each}
        </div>
      </div>
    </header>

    {#if filtered.length === 0}
      <p class="empty">No posts match your search.</p>
    {/if}

    <div class="grid">
      {#each filtered as post}
        <a class="card" href={`/blog/${post.slug}`}>
          {#if post.cover}
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <div class="thumb" style={`background-image:url(${post.cover})`} />
          {/if}
          <div class="body">
            <h2>{post.title}</h2>
            <div class="meta">{fmtDate(post.date)}</div>
            {#if post.description}<p class="desc">{post.description}</p>{/if}
            {#if post.tags?.length}
              <div class="tagrow">
                {#each post.tags.slice(0, 4) as tag}
                  <span class="tag">{tag}</span>
                {/each}
                {#if (post.tags?.length ?? 0) > 4}
                  <span class="tag more">+{post.tags.length - 4}</span>
                {/if}
              </div>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  :root {
    --bg: #343434; --fg: #ffffff; --muted: #cfcfcf; --card: #2b2b2b;
    --border: #444; --accent: #f7f7f7; --focus: #9ad0ff; --radius: 16px;
  }
  .main {
    /* lock these for THIS page */
    --bg: #343434;
    --card: #2b2b2b;

    background: var(--bg);
    min-height: 100svh;
    height: 100dvh;
    margin: 0;
    padding: max(env(safe-area-inset-top), 100px) 2rem max(env(safe-area-inset-bottom), 2rem);
    box-sizing: border-box;
  }
  .container { max-width: 1100px; margin: 0 auto; display: grid; gap: 1.5rem; }
  .header h1 { color: var(--fg); font-size: clamp(2rem, 6vw, 3rem); margin: 0; letter-spacing: .4px; }
  .sub { color: var(--muted); margin: .25rem 0 1rem 0; }
  .toolbar { display: grid; gap: .75rem; }
  .search {
    width: 100%; background: #1f1f1f; color: var(--fg); border: 1px solid var(--border);
    border-radius: 12px; padding: .8rem .9rem; font: inherit; outline: none;
    transition: border-color .15s, box-shadow .15s;
  }
  .search:focus { border-color: var(--focus); box-shadow: 0 0 0 3px color-mix(in srgb, var(--focus) 25%, transparent); }
  .tags { display: flex; flex-wrap: wrap; gap: .5rem; }
  .chip {
    border: 1px solid var(--border); background: #3b3b3b; color: var(--fg);
    border-radius: 999px; padding: .4rem .75rem; font-size: .9rem; cursor: pointer;
  }
  .chip.active { background: var(--accent); color: #000; border-color: var(--accent); }
  .grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 1000px){ .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px){ .grid { grid-template-columns: 1fr; } }
  /* CARD: explicitly set hover on the card only */
  .card {
    display: grid;
    grid-template-rows: auto 1fr;
    text-decoration: none;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    transition: transform 120ms, box-shadow 200ms, border-color 200ms, background-color 200ms;
  }

  .card:hover {
    background-color: color-mix(in srgb, var(--card) 88%, white 12%);
    transform: translateY(-2px);
    box-shadow: rgba(75, 75, 75, 0.25) 0 8px 15px;
    border-color: #555;
  }
  .thumb { background-size: cover; background-position: center; aspect-ratio: 16/9; }
  .body { padding: 1rem; display: grid; gap: .5rem; }
  h2 { margin: 0; color: var(--fg); font-size: 1.2rem; font-weight: 600; }
  .meta { color: #bdbdbd; font-size: .85rem; }
  .desc { color: var(--muted); margin: 0; }
  .tagrow { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: .2rem; }
  .tag { font-size: .75rem; background: #3b3b3b; color: var(--fg); border: 1px solid var(--border); border-radius: 999px; padding: .2rem .5rem; }
  .tag.more { opacity: .7; }
  @supports (-webkit-touch-callout: none) { .main { min-height: -webkit-fill-available; } }
  .empty{ color: #ffffff; }

</style>
