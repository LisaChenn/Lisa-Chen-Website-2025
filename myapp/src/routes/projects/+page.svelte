<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';

  const projects = [
    {
      num: '01',
      title: "Lisa Chen's Website",
      desc: "This is currently the product that you're on right now!",
      date: 'Mar 2025 – Present',
      tags: ['Svelte', 'TypeScript'],
      href: 'https://github.com/LisaChenn/Lisa-Chen-Website-2025'
    },
    {
      num: '02',
      title: 'Math Q LLM Generator Using LEAN4',
      desc: "A research project; inside you'll find a lot of testing code used to run my data.",
      date: 'May 2025 – Present',
      tags: ['Python', 'LEAN4'],
      href: 'https://github.com/LisaChenn/LLM-Math-Generator'
    },
    {
      num: '03',
      title: 'Harmonized Tariff Schedule Classification Website',
      desc: 'Used to classify HTS codes using an LLM.',
      date: 'Jun 2025 – Present',
      tags: ['TypeScript', 'Mantine', 'React'],
      href: 'https://github.com/LisaChenn/CCHTSX'
    },
    {
      num: '04',
      title: 'NutriScan: Food Health/Allergen Tracker',
      desc: 'Built an application for food barcode scanning and nutrition tracking.',
      date: 'Jun 2024 – Aug 2024',
      tags: ['EJS', 'JS', 'TypeScript'],
      href: 'https://github.com/LorenSLiu/PioneerHacksV'
    },
    {
      num: '05',
      title: 'FRC Robot Competition Code',
      desc: '2024 FRC Forte robot code.',
      date: 'Aug 2023 – Apr 2024',
      tags: ['Java'],
      href: 'https://github.com/PhantomCatz/RobotCode2024-Forte'
    },
    {
      num: '06',
      title: '2024 FRC Scouting App',
      desc: 'Data collection, real-time analysis — used by the Strategy Subteam to decide on gameplay.',
      date: 'Aug 2023 – Oct 2024',
      tags: ['ReactDOM', 'TypeScript'],
      href: 'https://github.com/PhantomCatz/2024IntegratedScoutingApps'
    }
  ];
</script>

<Navbar />

<main class="wrap">
  <div class="intro">
    <div class="eyebrow">Selected Work</div>
    <h1>Projects</h1>
    <p>
      Things I've built &mdash; from research code to full products, robotics to the occasional
      weekend hack. (Note: Most of these repos are private).
    </p>
  </div>

  <div class="proj-grid">
    {#each projects as p}
      <a class="proj-card" href={p.href} target="_blank" rel="noopener">
        <div class="proj-card__top">
          <span class="proj-card__num">{p.num}</span>
          <span class="proj-card__date">{p.date}</span>
        </div>
        <h2>{p.title}</h2>
        <p>{p.desc}</p>
        <div class="proj-card__tags">
          {#each p.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      </a>
    {/each}
  </div>
</main>

<style>
  .wrap {
    background: var(--bg);
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: clamp(72px, 8vw, 120px) 2rem 4rem;
    box-sizing: border-box;
    max-width: 1160px;
    margin-inline: auto;
  }

  .intro {
    margin-bottom: 3.5rem;
  }

  .eyebrow {
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.75rem;
  }

  .intro h1 {
    font-weight: 600;
    font-size: clamp(2rem, 4.5vw, 2.75rem);
    line-height: 1.1;
    margin: 0 0 0.85rem;
  }

  .intro p {
    max-width: 560px;
    margin: 0;
    color: var(--muted);
  }

  .proj-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }

  @media (max-width: 1000px) {
    .proj-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 640px) {
    .proj-grid {
      grid-template-columns: 1fr;
    }
  }

  .proj-card {
    display: flex;
    flex-direction: column;
    min-height: 230px;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.4rem;
    text-decoration: none;
    color: var(--text);
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  .proj-card:hover {
    border-color: var(--accent);
    color: var(--text);
    transform: translateY(-2px);
  }

  .proj-card__top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.75rem;
  }

  .proj-card__num {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.6rem;
    color: rgba(248, 244, 244, 0.35);
    font-variant-numeric: tabular-nums;
  }

  .proj-card__date {
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  .proj-card h2 {
    font-weight: 600;
    font-size: 1.35rem;
    line-height: 1.2;
    margin: 0 0 0.6rem;
  }

  .proj-card p {
    font-size: 0.9rem;
    color: rgba(248, 244, 244, 0.75);
    margin: 0 0 1.2rem;
    flex: 1;
  }

  .proj-card__tags {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 0.7rem;
    letter-spacing: 0.02em;
    padding: 0.2rem 0.65rem;
    border: 1px solid var(--border);
    border-radius: 3px;
    color: rgba(248, 244, 244, 0.75);
  }
</style>
