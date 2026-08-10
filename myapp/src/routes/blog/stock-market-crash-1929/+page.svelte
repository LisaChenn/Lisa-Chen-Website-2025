<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';

  const published = new Date('2026-08-09');
  const publishedLabel = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long'
  }).format(published);
</script>

<Navbar />

<main class="wrap">
  <article class="post">
    <header class="post__header">
      <h1 class="post__title">The Stock Market Crash of 1929 and the Great Depression</h1>
      <p class="post__meta">
        <time datetime={published.toISOString()}>{publishedLabel}</time>
      </p>
    </header>

    <section class="post__content">
      <p>
        The Stock Market Crash of 1929, an emblematic event in the annals of American economic
        history, was a precursor to the profound economic tribulations of the Great Depression in
        the 1930s. However, the extent to which the crash directly caused the subsequent depression
        remains a topic of spirited debate among historians. While some contend that the crash
        itself triggered the cascade of events leading to the Great Depression, a more nuanced
        perspective highlights the crash as a potent catalyst that exposed and aggravated underlying
        economic vulnerabilities.
      </p>

      <p>
        The stock market crash of 1929 was undeniably a seismic event that shattered investor
        confidence and destabilized the financial landscape. In the years leading up to the crash,
        exuberant speculation had inflated stock prices to unsustainable levels, facilitated by the
        widespread use of margin buying and an absence of effective regulation. According to
        historian Robert S. McElvaine, “The market crash revealed the extent of the nation’s
        speculative fever and the dangers of mass participation in the stock market.” When the
        market began its precipitous decline in late October 1929, panic ensued, resulting in a
        catastrophic loss of wealth for many individuals and businesses. The immediate impact was
        evident as consumer spending plummeted, industrial production contracted, and unemployment
        surged. Historian John Kenneth Galbraith notes, “The collapse of the stock market in October
        1929 was not the great cause of the Depression but something of a sideshow.” However,
        attributing the entire weight of the Great Depression to the crash alone would be an
        oversimplification. The pre-existing vulnerabilities in the American economy, some dating
        back to the aftermath of World War I, played a pivotal role in magnifying the crisis.
        Agricultural overproduction, coupled with falling demand and low crop prices, had already
        strained rural communities and led to the collapse of many banks in agricultural regions even
        before the crash. According to economist Milton Friedman and historian Anna Schwartz, “The
        agricultural depression was already underway before the stock-market crash and was probably
        only aggravated by it.” Furthermore, policy responses to the crash and ensuing economic
        downturn significantly influenced the trajectory of the Great Depression. The Federal
        Reserve’s contractionary monetary policy in the years following the crash contributed to a
        severe reduction in the money supply, exacerbating the deflationary pressures that were
        already at play. The enactment of the Smoot-Hawley Tariff in 1930, which imposed high
        tariffs on imported goods, not only incited retaliatory trade barriers from other countries
        but also constricted international trade, deepening the global economic downturn. Historian
        Eric Rauchway argues, “The tariff hurt global trade and the national economy, making the
        Depression worse.”
      </p>

      <p>
        In summation, the Stock Market Crash of 1929 was undeniably a pivotal event that set in
        motion a chain of economic events culminating in the Great Depression. While the crash
        served as a spark that ignited the crisis, it is crucial to recognize that the economic
        turmoil of the 1930s had deeper roots. Pre-existing vulnerabilities, exacerbated by the
        crash, interacted with ill-advised policy responses to create a perfect storm of economic
        distress. Thus, the debate over the causal relationship between the crash and the Great
        Depression underscores the complex interplay of economic, social, and policy factors in
        shaping historical outcomes. It is a reminder that understanding historical events requires
        a multifaceted perspective that takes into account a broad array of contributing factors.
      </p>
    </section>
  </article>
</main>

<style>
  :root {
    --bg: #201f1d;
    --card: #2a2927;
    --text: #f8f4f4;
    --muted: rgba(248, 244, 244, 0.65);
    --accent: #e1ad66;
    --radius: 4px;
    --shadow: 0 10px 30px rgba(0,0,0,.35);
  }

  .post__title { font-family: 'Cormorant Garamond', Georgia, serif; }

  .wrap {
    background: var(--bg);
    min-height: 100svh;
    padding: clamp(72px, 8vw, 120px) 1rem 3rem;
    box-sizing: border-box;
  }

  .post {
    width: min(820px, 92vw);
    margin: 0 auto;
    background: var(--card);
    color: var(--text);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: clamp(1.25rem, 3vw, 2rem) clamp(1.25rem, 4vw, 2.25rem);
  }

  .post__header { margin-block-end: 1.25rem; }

  .post__title {
    margin: 0 0 .25rem;
    font-size: clamp(1.9rem, 4.2vw, 2.5rem);
    line-height: 1.15;
    letter-spacing: -0.01em;
  }

  .post__meta {
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .post__content :where(p, h2, h3, blockquote, ul, ol) { margin-block: 1.1rem; }

  .post__content p {
    line-height: 1.75;
    font-size: clamp(1rem, 1.1vw, 1.08rem);
    text-wrap: pretty;
  }
</style>
