export function inViewport(
    node: HTMLElement,
    callback: (visible: boolean) => void
  ) {
    const observer = new IntersectionObserver(
      ([entry]) => callback(entry.isIntersecting),
      { threshold: 0.2 }
    );
  
    observer.observe(node);
  
    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }
  