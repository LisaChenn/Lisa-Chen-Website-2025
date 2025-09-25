<section class="main">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </section>
  
  <style>
    .main {
      margin: 0;
      background: #2c2b2b;
      padding: 1rem 0;       /* space around links */
      width: 100%;           /* span full width */
      position: fixed;       /* stick to top */
      top: 0;
      left: 0;
      z-index: 1000;         /* stay above other content */
    }
  
    ul {
      margin: 0 auto;        /* center the UL container */
      padding: 10px;
      list-style: none;
      display: flex;         /* flexbox layout */
      justify-content: center; /* center horizontally */
      gap: 2rem;             /* spacing between items */
    }
  
    li {
      display: inline;
    }
  
    a {
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.15em;
      padding: 0.5rem 1rem;
      position: relative;
    }
  
    a:after {
      background: none;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #fff;
      transition: width 0.3s ease, left 0.3s ease;
      width: 0;
    }
  
    a:hover:after {
      width: 100%;
      left: 0;
    }
  </style>
  