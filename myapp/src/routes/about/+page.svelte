<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';
  import pic from '$lib/assets/images/pic.png';
  import { inViewport } from '$lib/inViewport';
  let aboutVisible = false;
  let experienceVisible = false;
  let playlistVisible = false;
  let videoVisible = false;

  const roles = [
    {
      date: 'May 2026 – Present',
      title: 'Software Engineer Intern',
      company: 'Fulgent Genetics, CA',
      bullets: [
        "Built and updated frontend page sections using Vue 3 Composition API components, including responsive layouts, cards, typography classes, icons, and section styling, leveraging an internal TypeScript-based component library and SCSS for consistent styling across Fulgent Genetics pages.",
        "Wrote unit tests using Vitest covering component rendering, API service logic, and data transformation edge cases, using mock APIs to isolate frontend behavior from backend dependencies and ensure reliable CI test coverage within a Vite-based build pipeline."
      ]
    },
    {
      date: 'Sep 2025 – Present',
      title: 'Undergraduate Researcher',
      company: 'Hume Center for National Security and Technology, VA',
      bullets: [
        "Developed and evaluated PyTorch convolutional autoencoders for unsupervised RF anomaly detection, processing windowed I/Q data and analyzing reconstruction error, latent-space UMAP clusters, constellation diagrams, and performance metrics such as precision, recall, F1, and ROC-AUC.",
        "Attend weekly 3-hour RF research seminars led by faculty, covering advanced concepts in signal theory, modulation, and spectrum utilization."
      ]
    },
    {
      date: 'Apr 2025 – Present',
      title: 'Undergraduate Researcher',
      company: 'Virginia Tech Department of Computer Science, VA',
      bullets: [
        "Developed a prototype math problem generator using 7B–70B parameter models to study LLMs' logical reasoning capabilities, creating a compiler to check for uniqueness and correctness through Lean 4 as an auto-formalization and in-formalization process.",
        "Analyzed 8,500+ math questions and evaluated variation in phrasing and computational structure for the basis of linguistic composition."
      ]
    },
    {
      date: 'Sep 2024 – May 2025',
      title: 'Information Technology Committee Member',
      company: 'Virginia Tech Student Engineering Council, VA',
      bullets: [
        "Debugged and refactored the Engineering Expo ID check-in application using JavaScript and Svelte, improving UI responsiveness and navigation time by 40% and cut software costs by 100%.",
        "Updated and maintained the SEC website by refining navigation and creating new page layouts using Ensemble for 13,000+ College of Engineering students."
      ]
    },
    {
      date: 'Aug 2021 – Jun 2024',
      title: 'Director of Web and Robotics Development Teams',
      company: 'FIRST Robotics Competition, CA',
      bullets: [
        "Directed a team of 14 full-time developers (and 80 total members), contributing 700+ hours to robotics and leadership operations.",
        "Implemented GitHub version control practices reducing code loss by 60%.",
        "Integrated new systems to improve robot accuracy by creating automated mechanisms using odometry, adaptive PID control, and AprilTag vision processing.",
        "Rebuilt software data collection infrastructure with React, Firebase, and MongoDB, increasing user engagement by 30%."
      ]
    }
  ];
</script>

<Navbar />

<main class="wrap">
  <div use:inViewport={(v) => (aboutVisible = v)} class="fade-in" class:show={aboutVisible}>
    <section class="hero">
      <div class="portrait-col">
        <div class="portrait-frame">
          <img class="portrait" src={pic} alt="Lisa Chen" />
        </div>
        <div class="portrait-caption">cafe hopping, 2025</div>
      </div>

      <div class="hero-copy">
        <div class="eyebrow">About &mdash; Portfolio</div>
        <h1 class="hero-title">Hi, I'm Lisa Chen.</h1>
        <div class="hero-subtitle">Software engineer, building things that feel human.</div>

        <p>
          I'm a software engineer who loves building applications and projects. I first got into
          coding back in high school when I was 15 years old, programming for my FRC robotics team
          &mdash; and I've never stopped since.
        </p>
        <p>
          With a background in computer engineering and computer science, I've worked with a
          variety of programming languages and enjoy taking on challenging problems. I'm always
          excited to learn new technologies and find creative ways to turn ideas into real, working
          solutions.
        </p>
        <p>
          I want to redefine technology to improve how we live, work, and connect with one another
          &mdash; pushing the limits of what's possible while making it feel natural, human, and
          accessible.
        </p>
        <p>
          When I'm not coding, you can find me running, playing video games, video editing, or
          trying out new recipes in the kitchen. I love picking up new hobbies and exploring things
          I've never tried before.
        </p>
      </div>
    </section>
  </div>

  <hr class="divider" />

  <div use:inViewport={(v) => (experienceVisible = v)} class="fade-in" class:show={experienceVisible}>
    <section class="experience">
      <div class="eyebrow">Experience</div>
      <h2>Where I've Worked</h2>

      {#each roles as role}
        <div class="role">
          <div class="role-date">{role.date}</div>
          <div class="role-body">
            <h3>{role.title}</h3>
            <div class="role-company">{role.company}</div>
            <ul>
              {#each role.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </section>
  </div>

  <hr class="divider" />

  <div use:inViewport={(v) => (playlistVisible = v)} class="fade-in" class:show={playlistVisible}>
    <section class="playlist">
      <div class="eyebrow center">Listening</div>
      <h2 class="center">My Playlist</h2>
      <p class="center">
        Songs I listen to while coding or just relaxing &mdash; mostly RnB and pop.
      </p>
      <div class="playlist-embed">
        <!-- svelte-ignore a11y_missing_attribute -->
        <iframe
          src="https://open.spotify.com/embed/playlist/4bah7m1Pmy6VmsKjvBjRB4?utm_source=generator"
          width="100%"
          height="352"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>
    </section>
  </div>

  <hr class="divider" />

  <div use:inViewport={(v) => (videoVisible = v)} class="fade-in" class:show={videoVisible}>
    <section class="vlogs">
      <div class="eyebrow center">On Film</div>
      <h2 class="center">My Travel Vlogs</h2>
      <p class="center">
        Video editing has been a hobby since I was little. For every trip, I cut together the clips
        I've filmed.
      </p>
      <div class="video-grid">
        <figure>
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/qJui-0I9NQw"
              title="Travel Vlog 1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
          <figcaption>Japan</figcaption>
        </figure>

        <figure>
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/TtTkm9OwOuM"
              title="Travel Vlog 2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
          <figcaption>Las Vegas</figcaption>
        </figure>
      </div>
    </section>
  </div>
</main>

<style>
  /* Animations */
  .fade-in {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .show {
    opacity: 1;
    transform: translateY(0);
  }

  .wrap {
    background: var(--bg);
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: clamp(72px, 8vw, 120px) 2rem 4rem;
    box-sizing: border-box;
    max-width: 1040px;
    margin-inline: auto;
  }

  .divider {
    height: 1px;
    border: 0;
    margin: 3.5rem 0;
    background: var(--border);
  }

  .eyebrow {
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.75rem;
  }
  .eyebrow.center {
    text-align: center;
  }

  /* Hero */
  .hero {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
  }

  @media (max-width: 760px) {
    .hero {
      flex-direction: column;
    }
  }

  .portrait-col {
    flex: 0 0 auto;
  }

  .portrait-frame {
    background: var(--card);
    border: 6px solid var(--card);
    outline: 1px solid var(--border);
    width: 260px;
  }

  .portrait {
    display: block;
    width: 260px;
    height: 320px;
    object-fit: cover;
  }

  .portrait-caption {
    font-size: 0.7rem;
    margin-top: 0.5rem;
    color: var(--muted);
    font-style: italic;
  }

  .hero-copy {
    flex: 1;
    min-width: 280px;
  }

  .hero-title {
    font-weight: 600;
    font-size: clamp(2.2rem, 5vw, 3.25rem);
    line-height: 1.08;
    letter-spacing: -0.015em;
    margin: 0 0 0.5rem;
  }

  .hero-subtitle {
    font-size: 1.05rem;
    font-style: italic;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }

  .hero-copy p {
    margin: 0 0 0.85rem;
    font-size: 1rem;
    line-height: 1.7;
    text-align: justify;
  }

  /* Experience */
  .experience h2 {
    font-weight: 600;
    font-size: 2rem;
    margin: 0 0 1.5rem;
  }

  .role {
    display: flex;
    gap: 2rem;
    padding-bottom: 1.75rem;
    margin-bottom: 1.75rem;
    border-bottom: 1px solid var(--border);
  }

  .role:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }

  @media (max-width: 700px) {
    .role {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .role-date {
    flex: 0 0 200px;
    color: var(--muted);
    font-size: 0.85rem;
    font-style: italic;
  }

  .role-body {
    flex: 1;
    min-width: 280px;
  }

  .role-body h3 {
    font-weight: 600;
    font-size: 1.25rem;
    margin: 0 0 0.2rem;
  }

  .role-company {
    font-size: 0.9rem;
    color: var(--muted);
    margin-bottom: 0.85rem;
  }

  .role-body ul {
    margin: 0;
    padding-left: 1.1em;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .role-body li {
    margin-bottom: 0.4rem;
  }

  /* Playlist */
  .playlist h2 {
    font-weight: 600;
    font-size: 2rem;
    margin: 0 0 0.85rem;
  }

  .playlist p {
    max-width: 520px;
    margin: 0 auto 1.5rem;
    color: var(--muted);
  }

  .playlist-embed {
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.15rem;
    background: var(--card);
  }

  .playlist-embed iframe {
    border: none;
    border-radius: 4px;
    display: block;
  }

  /* Vlogs */
  .vlogs h2 {
    font-weight: 600;
    font-size: 2rem;
    margin: 0 0 0.85rem;
  }

  .vlogs p {
    max-width: 560px;
    margin: 0 auto 2rem;
    color: var(--muted);
  }

  .video-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  @media (min-width: 700px) {
    .video-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .video-grid figure {
    margin: 0;
  }

  .video-frame {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    border: 6px solid var(--card);
    outline: 1px solid var(--border);
    box-sizing: border-box;
  }

  .video-frame iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video-grid figcaption {
    font-size: 0.7rem;
    margin-top: 0.5rem;
    color: var(--muted);
    font-style: italic;
  }

  .center {
    text-align: center;
  }
</style>
