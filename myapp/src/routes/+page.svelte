<script lang="ts">
  let flipped = false;
  import { base } from '$app/paths';
  const toggle = () => (flipped = !flipped);
</script>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<div class="content">
  <div class="card" class:flipped on:click={toggle} aria-label="flip card">
    <div class="card__side card__side--front">
      <div class="card__cont">
        <span class="blue">alert</span>
        <span>(<span class="green">'Hello! Welcome to Lisa's Website.'</span>)</span>
      </div>
    </div>

    <div class="card__side card__side--back">
      <div class="card__cta">
        <p>
          <span class="purple">const</span> aboutMe <span class="cyan">=</span> 
        </p>
          <a href="{base}/about" class="button-28">Get Started</a>
          
        
      </div>
    </div>
  </div>
</div>

<style>
* {
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
    "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
}

:root{
  --blue: #29b6f6;
  --green: #9ccc65;
  --purple: #ba68c8;
  --orange: #f57c00;
  --red: #ef5350;
  --cyan: #4dd0e1;
  --bg-light: #ffa726;
  --bg-dark: #ff9800;
}

body {
  background-image: linear-gradient(to bottom right, var(--bg-dark), var(--bg-light));
}

.blue { color: var(--blue); }
.green { color: var(--green); }
.purple { color: var(--purple); }
.cyan { color: var(--cyan); }
.red { color: var(--red); }

.content {
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  perspective: 150rem;
  height: 20rem;
  width: 30rem;
  position: relative;
  cursor: pointer;
}

.card__side {
  height: 15rem;
  transition: transform 0.8s ease, box-shadow 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  width: 30rem;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.4);
}

.card__side--front { background-color: #1c1c1c; }
.card__side--back  { background-color: #1c1c1c; transform: rotateY(180deg); }

/* hover flip (desktop) */
.card:hover .card__side--front { transform: rotateY(-180deg); }
.card:hover .card__side--back  { transform: rotateY(0deg); }

/* tap-to-flip (mobile) */
.card.flipped .card__side--front { transform: rotateY(-180deg); }
.card.flipped .card__side--back  { transform: rotateY(0deg); }

.card__cont {
  height: 15rem;
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__cta {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 90%;
  color: white;
}

.card__cta p { margin-left: 1rem; }
.card__cta .space { margin-left: 2rem; }


.button-28 {
  justify-self: center;
    appearance: none;
    background-color: #2c2c2c;
    border: 0;
    border-radius: 15px;
    box-sizing: border-box;
    color: #fafafa;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;

    min-height: 52px;

    padding: 14px 100px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    /* Replace fixed 20% width with responsive limits */
    width: auto;
    max-width: 90vw;
  }

  .button-28:hover {
    color: #000;
    background-color: #f7f7f7;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .button-28:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .button-28:disabled {
    pointer-events: none;
  }

  @media (max-width: 600px) {
    .content { gap: 0.75rem; }
    .button-28 {
      width: 100%;
      max-width: 300px; 
    }
  }

  /* Older iOS fallback */
  @supports (-webkit-touch-callout: none) {
    .content {
      min-height: -webkit-fill-available;
    }
  }
</style>
