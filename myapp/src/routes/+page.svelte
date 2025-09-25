<script>
  import hallway from '$lib/assets/images/hallway5.jpg';

  /**
   * contenders: hallway5, hallway 6, hallway3
  */

</script>

<section
  class="hallway"
  style={`background-image: url(${hallway}); background-size: cover; background-position: center;`}
>
  <div class="overlay">
    <h1>Welcome to think.</h1>
    <!-- <button class="button-28">Get Started</button> -->
    <a href="/about" class="button-28">Get Started</a>


  </div>
</section>

<style>

  .hallway {
    height: 100vh;
    width: 100%;          
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    position: relative;
  }

  h1{
    font-size: 4rem;
    margin: 0;
    padding-bottom: 3%;
    font-weight: 400;

  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }

.button-28 {
  appearance: none;
  background-color: transparent;
  border: 0px solid #343232;
  border-radius: 15px;
  box-sizing: border-box;
  color: #fafafa;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 20px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 20%;
  will-change: transform;
  /* background-color: #f7f7f7; */
  background-color: #2c2c2c;
}

.button-28:disabled {
  pointer-events: none;
}

.button-28:hover {
  color: #000;
  /* background-color: #1A1A1A; */
  background-color: #f7f7f7;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}

</style>
