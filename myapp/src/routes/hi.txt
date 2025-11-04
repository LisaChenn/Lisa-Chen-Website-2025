<script>
  import hallway from '$lib/assets/images/hallway5.jpg';
</script>

<section
  class="hallway"
  style={`background-image: url(${hallway}); background-size: cover; background-position: center;`}
>
  <div class="overlay">
    <h1>Welcome to think.</h1>
    <a href="/about" class="button-28">Get Started</a>
  </div>
</section>

<style>
  .hallway {
    /* Fix iOS Safari viewport height issues */
    min-height: 100svh;          /* modern small viewport unit */
    height: 100dvh;              /* dynamic viewport height */
    /* fallback for older browsers */
    height: 100vh;

    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    position: relative;
  }

  /* Responsive heading */
  h1{
    /* desktop stays near original, mobile scales down */
    font-size: clamp(2rem, 8vw, 4rem);
    margin: 0;
    padding-bottom: 1.25rem;
    font-weight: 400;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.40);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;

    /* Keep content off the edges + handle notches */
    padding: max(env(safe-area-inset-top), 1rem) 1rem
             max(env(safe-area-inset-bottom), 2rem);
  }

  .button-28 {
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

    /* Mobile-friendly touch target */
    min-height: 52px;

    /* Let the button size to text on desktop, be fluid on mobile */
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

  /* Extra tweaks for small screens */
  @media (max-width: 600px) {
    .overlay { gap: 0.75rem; }
    .button-28 {
      width: 100%;
      max-width: 420px; /* keeps it from being too wide on phablets */
    }
  }

  /* Older iOS fallback */
  @supports (-webkit-touch-callout: none) {
    .hallway {
      min-height: -webkit-fill-available;
    }
  }
</style>
