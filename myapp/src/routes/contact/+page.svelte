<script>
  import Navbar from '$lib/Navbar.svelte';

  let name = '';
  let email = '';
  let subject = '';
  let message = '';

  function handleSubmit() {
    const to = 'lisachen077@gmail.com'; 
    const mailSubject = subject || 'Contact from think.';
    const mailBody = `Name: ${name}
Email: ${email}

${message}`;

    const href = `mailto:${to}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = href;
  }
</script>

<Navbar />

<section class="main">
  <div class="container">
    <header class="intro">
      <h1>Contact</h1>
      <p>Questions, ideas, or opportunities? Send a note—I’ll get back to you.</p>

      <div class="cards">
        <div class="card">
          <h2>Email</h2>
          <a class="link" href="mailto:hello@yourdomain.com">lisachen077@gmail.com</a>
        </div>
        <div class="card">
          <h2>Location</h2>
          <p>Blacksburg, VA</p>
        </div>
        <div class="card">
          <h2>Social</h2>
          <div class="socials">
            <a class="chip" href="https://www.linkedin.com/in/lisa-chen077/" rel="noopener">LinkedIn</a>
            <a class="chip" href="https://github.com/LisaChenn" rel="noopener">GitHub</a>
          </div>
        </div>
      </div>
    </header>

    <form class="form" on:submit|preventDefault={handleSubmit}>
      <div class="row">
        <label>
          <span>Name</span>
          <input
            type="text"
            bind:value={name}
            name="name"
            required
            autocomplete="name"
            placeholder="Jane Doe" />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            bind:value={email}
            name="email"
            required
            autocomplete="email"
            placeholder="jane@example.com" />
        </label>
      </div>

      <label>
        <span>Subject</span>
        <input
          type="text"
          bind:value={subject}
          name="subject"
          placeholder="Let’s collaborate" />
      </label>

      <label>
        <span>Message</span>
        <textarea
          bind:value={message}
          name="message"
          required
          rows="6"
          placeholder="Tell me a bit about your project or question…"></textarea>
      </label>

      <button class="btn" type="submit">Send Message</button>
    </form>
    <p class="spacer"></p>
  </div>
</section>

<style>
  :root {
    --bg: #343434;
    --fg: #ffffff;
    --muted: #cfcfcf;
    --card: #2b2b2b;
    --accent: #f7f7f7;
    --focus: #9ad0ff;
    --border: #444;
    --radius: 16px;
  }

  .main {
    background-color: var(--bg);
    min-height: 100svh; /* iOS */
    height: 100dvh;
    height: 100vh; /* fallback */
    width: 100%;
    margin: 0;
    padding: max(env(safe-area-inset-top), 100px) 2rem max(env(safe-area-inset-bottom), 2rem);
    box-sizing: border-box;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  /* Stack on small screens */
  @media (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
    }
  }

  h1 {
    color: var(--fg);
    font-size: clamp(2rem, 5vw, 3rem);
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  .intro p {
    color: var(--muted);
    margin: 0 0 1.5rem 0;
  }

  .cards {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1rem 1.25rem;
  }

  .card h2 {
    margin: 0 0 0.25rem 0;
    color: var(--fg);
    font-size: 1.1rem;
    font-weight: 600;
  }

  .card p {
    margin: 0;
    color: var(--muted);
  }

  .link {
    color: var(--accent);
    text-decoration: none;
  }
  .link:hover { text-decoration: underline; }

  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .chip {
    display: inline-block;
    padding: 0.4rem 0.7rem;
    border-radius: 999px;
    background: #3b3b3b;
    color: var(--fg);
    font-size: 0.9rem;
    border: 1px solid var(--border);
    text-decoration: none;
  }
  .chip:hover { background: #474747; }

  .form {
    background: #2f2f2f;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem;
    display: grid;
    gap: 1rem;
  }

  .row {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    .row { grid-template-columns: 1fr; }
  }

  label {
    display: grid;
    gap: 0.5rem;
    color: var(--fg);
    font-size: 0.95rem;
  }

  input, textarea {
    width: 100%;
    box-sizing: border-box;
    background: #1f1f1f;
    color: var(--fg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0.8rem 0.9rem;
    font: inherit;
    outline: none;
    transition: border-color 150ms ease, box-shadow 150ms ease;
  }

  input::placeholder, textarea::placeholder {
    color: #9a9a9a;
  }

  input:focus, textarea:focus {
    border-color: var(--focus);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--focus) 25%, transparent);
  }

  .btn {
    appearance: none;
    border: 0;
    border-radius: 14px;
    background: #2c2c2c;
    color: var(--fg);
    padding: 0.9rem 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 200ms ease, background 200ms ease;
    justify-self: start;
    min-width: 11rem;
  }
  .btn:hover {
    background: var(--accent);
    color: #000;
    box-shadow: rgba(0,0,0,0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  .btn:active {
    box-shadow: none;
    transform: translateY(0);
  }
  .spacer{
    padding-bottom: 15%;
    margin-bottom: 15%;
  }
  /* iOS older fallback */
  @supports (-webkit-touch-callout: none) {
    .main { min-height: -webkit-fill-available; }
  }
</style>
