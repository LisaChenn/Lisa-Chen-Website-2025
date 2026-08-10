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
      <h1 class="post__title">Comparing Smith, Marx, and Keynes</h1>
      <p class="post__meta">
        <time datetime={published.toISOString()}>{publishedLabel}</time>
      </p>
    </header>

    <section class="post__content">
      <p>
        As an economics student delving into the realm of economic theories, the works of Adam
        Smith, Karl Marx, and John Maynard Keynes present distinct perspectives on how economies
        function and how governments should intervene. Each thinker offers unique insights into the
        nature of markets, the role of government, and the pursuit of economic prosperity. In this
        essay, I will compare and contrast the economic views of these three prominent figures and
        explain which economic philosophy resonates most with me.
      </p>

      <p>
        Adam Smith, often considered the father of modern economics, introduced the concept of the
        “invisible hand” in his seminal work, “The Wealth of Nations.” Smith’s laissez-faire approach
        emphasizes minimal government intervention in markets, asserting that individuals pursuing
        self-interest inadvertently promote collective welfare. Markets, in Smith’s view, should be
        allowed to operate freely, as competition and self-regulation lead to optimal outcomes.
        Smith’s “invisible hand” concept implies that when individuals act in their own interest, they
        inadvertently contribute to the overall well-being of society. In contrast, Karl Marx offered
        a scathing critique of capitalism in his seminal work, “Das Kapital.” Marx argued that
        capitalism inherently leads to class struggle and exploitation of the working class by the
        bourgeoisie. He predicted that capitalism’s internal contradictions would eventually lead to
        its downfall, making way for a proletarian revolution and the establishment of a classless
        society. Marx believed that government intervention was necessary to address the inequalities
        and injustices inherent in capitalism. John Maynard Keynes introduced a new paradigm during
        the aftermath of the Great Depression with his work, “The General Theory of Employment,
        Interest, and Money.” Keynesian economics advocates for government intervention to stabilize
        economies, especially during times of recession. Keynes believed that during economic
        downturns, governments should increase public spending to stimulate demand, thereby creating
        jobs and boosting economic activity. This approach emphasizes the importance of managing
        aggregate demand to prevent prolonged periods of high unemployment. Among these three
        economic philosophies, Keynesian economics resonates most with me. While I appreciate the
        insights of Adam Smith and recognize the importance of market-driven economies, the practical
        realities of economic fluctuations and the potential for systemic crises underscore the need
        for government intervention. The recent global financial crisis and the ongoing challenges
        posed by income inequality highlight the limitations of laissez-faire approaches. Keynesian
        economics, with its emphasis on government intervention to manage economic fluctuations,
        offers a pragmatic framework that can help prevent prolonged periods of recession and high
        unemployment. The 2008 financial crisis, for instance, showcased the effectiveness of
        stimulus measures and increased government spending in stabilizing economies and restoring
        growth. The COVID-19 pandemic further reinforced the importance of Keynesian principles, as
        governments worldwide implemented fiscal policies to mitigate the economic impact.
      </p>

      <p>
        In conclusion, the economic views of Adam Smith, Karl Marx, and John Maynard Keynes represent
        a spectrum of thought on the role of government in economic affairs. While each perspective
        offers valuable insights, Keynesian economics aligns most closely with my understanding of
        economic dynamics and the need for proactive government intervention to promote stability,
        address inequalities, and ensure sustainable economic growth.
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
