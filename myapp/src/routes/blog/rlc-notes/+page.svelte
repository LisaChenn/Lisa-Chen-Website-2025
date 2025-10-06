<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
  
    const published = new Date('2025-10-05'); // update if needed
    const publishedLabel = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(published);
  </script>
  
  <Navbar />
  
  <main class="wrap">
    <article class="post">
      <header class="post__header">
        <h1 class="post__title">Meritocracy and the “Myth of the Metals” in Plato’s <em>Republic</em></h1>
        <p class="post__meta">
          <time datetime={published.toISOString()}>{publishedLabel}</time>
        </p>
      </header>
  
      <section class="post__content">
        <p>
          In the <em>Republic</em>, Plato—speaking through Socrates—argues that an ideal city educates citizens
          to accept and understand the justification for their social role. The famous “myth of the metals”
          teaches that individuals may have gold, silver, or bronze souls regardless of birth or background.
          The point is twofold: to make citizens “care more for the city and for one another” and to keep them
          open to the possibility that their children may rightly serve in a different class than they do.
        </p>
  
        <p>
          On this view, a quasi–civil religion can help stabilize a meritocracy: roles are assigned according to
          ability and fitness, not lineage or wealth. Justice then becomes each person’s doing the work suited
          to their nature, so that the city functions well as a whole. The story sacralizes this arrangement,
          encouraging equal civic dignity while anchoring duties in a shared moral narrative.
        </p>
  
        <p>
          A central objection presses on authority and wellbeing: who decides which citizens are “gold,”
          “silver,” or “bronze,” and by what reliable standard? Misclassification threatens both fairness and
          stability. Even if the assignment were accurate, coerced fit may leave individuals alienated or
          dissatisfied, undermining the very justice the system aims to realize.
        </p>
  
        <p>
          The Platonic reply is that, when nature and training align, a person finds fulfillment in performing
          the function they are best suited to; the city’s aim is not maximizing any one group’s happiness but
          making the whole community as good—and thereby as happy—as possible. Individuals, especially
          guardians, are educated to value the common good over private preference. Whether this suffices
          against modern concerns about autonomy and paternalism remains contested, but it clarifies the logic
          of Plato’s meritocratic ideal.
        </p>
      </section>
    </article>
  </main>
  
  <style>
    :root {
      --bg: #121212;
      --card: #1c1c1c;
      --text: #eaeaea;
      --muted: #bdbdbd;
      --radius: 18px;
      --shadow: 0 10px 30px rgba(0,0,0,.35);
    }
  
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
  