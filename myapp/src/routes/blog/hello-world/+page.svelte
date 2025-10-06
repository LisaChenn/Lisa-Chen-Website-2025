<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
  
    // If you want this to be dynamic, pass a Date or ISO string in via props.
    const published = new Date('2025-10-05');
    const publishedLabel = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long'
    }).format(published);
  </script>
  
  <Navbar />
  
  <main class="wrap">
    <article class="post">
      <header class="post__header">
        <h1 class="post__title">The Ethics Behind the Use of AI</h1>
        <p class="post__meta">
          <time datetime={published.toISOString()}>{publishedLabel}</time>
        </p>
      </header>
  
      <section class="post__content">
        <p>
          Every day there are new discoveries, published technologies, and developed software—and with them,
          real ethical and humanitarian concerns. Most recently, the use of AI has brought a surge of people
          advocating for its discontinuation for reasons such as environmental costs, human-rights risks, job
          displacement, and data security. Even among engineers—the people who build these systems—opinions are
          divided. Governments worldwide are integrating AI into modern warfare and national security. At the
          same time, netizens with malicious intentions create deepfakes; many are non-consensual and explicit,
          disproportionately targeting women. Meanwhile, AI is becoming routine in everyday life and education:
          <sup>[1]</sup> 92% of university students report using AI for homework, tests, studying, and email.
          AI is rapidly becoming embedded in every sense of the word. Because of this, the speed of change is
          forcing us to confront not only what these systems can do, but what they should do.
        </p>
  
        <p>
          Google once had an unofficial motto: “Don’t be evil.” This motto was meant to guide actions and
          decisions; however, in 2025 that changed. In February 2025, <sup>[2]</sup> Google quietly updated its AI
          principles and removed its previous pledge against using its technology for military weapons or
          surveillance. It reached an agreement with the U.S. government and helped implement AI software
          within military systems. Now, people may die at the hands of artificial intelligence rather than a
          human—for the sake of efficiency, convenience, and, most importantly, cost.
        </p>
  
        <p>
          Is it right or is it wrong? Much of AI’s appeal is convenience—drafting a paper, an email, a
          speech—yet the same convenience can be bent toward harmful ends, including lethal or malicious uses.
          Many worry AI could accelerate social harms and call for limits or moratoria, while others see
          transformative benefits. <sup>[3]</sup> AI can increase efficiency and productivity by automating
          repetitive tasks, improve decision-making with pattern analysis, accelerate R&amp;D through simulation
          and optimization, enhance safety with predictive maintenance and anomaly detection, and broaden
          accessibility via translation and assistive tools. So what is the right call? What should we do with
          AI’s development?
        </p>
  
        <p>
          Personally, I believe responsible AI use ultimately comes down to education—education on how to use
          AI, how to verify its outputs, and when not to use it. We need to reinforce that AI is a tool, not a
          replacement for a human. It’s important to know when not to use AI: in high-stakes contexts without
          human oversight, where data consent is unclear, or where using AI would undermine learning or
          professional standards. With that foundation, AI becomes less a shortcut and more a disciplined
          instrument that augments human judgment. Additionally, lawmakers should ban the creation of deepfakes
          and harmful AI-generated videos to curb misinformation and defamation. As for AI embedded in military
          platforms, I have no definitive stance. It can save lives and it can take lives; there isn’t yet
          enough public evidence to reach a firm conclusion.
        </p>
      </section>
  
      <!-- Optional: add references if you later link them -->
      <footer class="post__footer">
        <h2 class="visually-hidden">References</h2>
        <ol class="refs">
          <li id="ref-1">[1] Campbell Academic Technology Services, “AI in Higher Education: A Meta Summary of Recent Surveys of Students and Faculty,” Mar. 6, 2025. [Online]. Available: https://sites.campbell.edu/academictechnology/2025/03/06/ai-in-higher-education-a-summary-of-recent-surveys-of-students-and-faculty/. Accessed: Oct. 5, 2025. Campbell Sites</li>
          <li id="ref-2">[2] P. Dave and C. Haskins, “Google Lifts a Ban on Using Its AI for Weapons and Surveillance,” WIRED, Feb. 4, 2025. [Online]. Available: https://www.wired.com/story/google-responsible-ai-principles/. Accessed: Oct. 5, 2025. WIRED</li>
          <li id="ref-3">[3] University of Cincinnati Online, “9 Benefits of Artificial Intelligence (AI) in 2025.” [Online]. Available: https://online.uc.edu/blog/artificial-intelligence-ai-benefits/. Accessed: Oct. 5, 2025. University of Cincinnati</li>
        </ol>
      </footer>
    </article>
  </main>
  
  <style>
    :root {
      --bg: #121212;
      --card: #1c1c1c;
      --text: #eaeaea;
      --muted: #bdbdbd;
      --accent: #7dd3fc; /* subtle cyan for links if added later */
      --radius: 18px;
      --shadow: 0 10px 30px rgba(0,0,0,.35);
    }
  
    /* Layout */
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
  
    /* Header */
    .post__header {
      margin-block-end: 1.25rem;
    }
  
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
  
    /* Content */
    .post__content :where(p, h2, h3, blockquote, ul, ol) {
      margin-block: 1.1rem;
    }
  
    .post__content p {
      line-height: 1.75;
      font-size: clamp(1rem, 1.1vw, 1.08rem);
      text-wrap: pretty;
    }
  
    .post__content sup {
      font-size: 0.75em;
      vertical-align: super;
      line-height: 0;
    }
  
    blockquote {
      margin: 1.25rem 0;
      padding: .75rem 1rem;
      border-left: 3px solid var(--muted);
      background: color-mix(in srgb, var(--card) 85%, white 15%);
      border-radius: 8px;
    }
  
    /* Footer / references */
    .post__footer {
      margin-top: 1.75rem;
      border-top: 1px solid color-mix(in srgb, var(--card) 70%, white 30%);
      padding-top: 1rem;
    }
  
    .refs {
      margin: .25rem 0 0;
      padding-left: 1.2rem;
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  
    /* A11y helpers */
    .visually-hidden {
      position: absolute !important;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
      white-space: nowrap;
    }
  </style>
  