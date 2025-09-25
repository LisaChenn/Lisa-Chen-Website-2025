<script>
    export let text = "Click me";   // props
    export let onClick = () => {};  // callback
  </script>
  
  <button on:click={onClick}>
    {text}
  </button>
  
  <style>
    button {
      padding: 0.5rem 1rem;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    button:hover {
      background: #4338ca;
    }
  </style>
  