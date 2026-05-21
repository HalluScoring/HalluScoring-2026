export function initRevealOnScroll() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const options = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.4,
  }

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target

        // Add reveal class to trigger CSS transitions
        el.classList.add('reveal')
        el.classList.remove('reveal-hidden')

        // Clear any inline transition delays we added during setup
        Array.from(el.children).forEach((child) => {
          child.style.transitionDelay = ''
        })

        obs.unobserve(el)
      }
    })
  }, options)

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    // Hide container initially
    el.classList.add('reveal-hidden')

    // Mark immediate children for staggered reveal and set delays.
    // You can customize the initial delay (ms) per container via
    // `data-reveal-delay="400"` or the per-step increment via
    // `data-reveal-step="100"` on the `.reveal-on-scroll` element.
    const baseDelay = el.dataset.revealDelay ? parseInt(el.dataset.revealDelay, 10) : 240
    const step = el.dataset.revealStep ? parseInt(el.dataset.revealStep, 10) : 80

    Array.from(el.children).forEach((child, idx) => {
      child.classList.add('reveal-child')
      child.style.transitionDelay = `${baseDelay + idx * step}ms`
    })

    revealObserver.observe(el)
  })
}
