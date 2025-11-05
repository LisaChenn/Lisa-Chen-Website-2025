<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';
  import pic from '$lib/assets/images/pic.png';
  import { inViewport } from '$lib/inViewport';
  let aboutVisible = false;
  let projectsVisible = false;
  let videoVisible = false;
</script>

<Navbar />

<section class="main">
  <div use:inViewport={(v) => (aboutVisible = v)} class="fade-in" class:show={aboutVisible}>
    <div class="about-container">
        <img class="pic" src={pic} alt="pic of me" />

        

      <div class="about-section">
        <h1 class="about">HI, I'M LISA CHEN</h1>
        <p>
          I’m a software engineer who loves building applications and projects. <br /><br />
          I first got into coding back in high school when I was 15 years old, programming for my FRC robotics team, and I've never stopped since. With a background in computer engineering and computer science, I’ve worked with a variety of programming languages/softwares and enjoy taking on challenging problems. I’m always excited to learn new technologies and find creative ways to turn ideas into real, working solutions.
          <br /><br />
          I want to redefine technology to improve how we live, work, and connect with one another. I’m passionate about pushing the limits of what’s possible, but also about making technology feel natural, human, and accessible.
          <br /><br />
          When I’m not coding, you can find me running, playing video games, video editing, or trying out new recipes in the kitchen. I also love trying out new hobbies and exploring/learning new things.
        </p>
      </div>
    </div>
  </div>
  
  <hr>

  <div class="playlist-section"> 
    <h2>MY PLAYLIST</h2>
    <p>Here are some of the songs that I listen to while coding or just relaxing. My favorite genres are RnB and pop. </p>
  </div>
  <div class="music">
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

  <hr>
  <!-- Video Section -->
  <div use:inViewport={(v) => (videoVisible = v)} class="fade-in" class:show={videoVisible}>
    <section class="video-section">
      <h2>MY TRAVEL VLOGS</h2>
      <p>Here are some of my travel vlogs from my trips around the world. Video editing has become one of my hobbies since I was little. For every place that I travel to, I put together clips that I've filmed.</p>
      <div class="video-grid">
        <!-- First video -->
        <div class="video-container">
          <iframe 
            src="https://www.youtube.com/embed/qJui-0I9NQw" 
            title="Travel Vlog 1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
  
        <!-- Second video -->
        <div class="video-container">
          <iframe 
            src="https://www.youtube.com/embed/TtTkm9OwOuM" 
            title="Travel Vlog 2" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
  
    </section>
  </div>
  
</section>

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

/* Main Layout */
.main {
  background-color: #343434;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 2rem;
  padding-top: 90px; /* space for navbar */
  box-sizing: border-box;
  color: white;
  font-weight: 300;
}

/* ABOUT ME */
.about-container {
  display: flex; 
  gap: 1rem; 
  align-items: flex-start;        
}

/* Small screens only */
@media (max-width: 768px) {
  .about-container {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    flex-direction: column; 
  }
}


.about-section {
  padding-bottom: 3%;
}

.pic {
  padding-top: 2%;
  height: 350px;
  border-radius: 8px;
  object-fit: cover;
}
.about {
  font-size: 2rem;
  margin-bottom: 1rem;
}
p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  /* padding-right: 35%; */
}

/* Projects */
.music {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.music iframe {
  width: 100%;
  height: 500px;
  border: none;
}
.playlist-section {
  text-align: center;
  margin-bottom: 1rem;
  padding-top: 2%;
}

.playlist-section h2{
  text-align: center;
  font-size: 1.7rem;
  margin-bottom: 1rem;
  padding-top: 2%;
}

/* Video */
.video-section {
  text-align: center;
  margin: 3rem 0;
}

.video-grid {
  display: grid;
  grid-template-columns: 1fr; /* one column on mobile */
  gap: 2rem;
  margin-top: 2rem;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

/* Switch to 2 columns on larger screens */
@media (min-width: 900px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>
