export function initRevealOnScroll() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const isSmall = window.innerWidth <= 850
  const options = {
    root: null,
    // On small screens, make the observer more lenient so sections reveal reliably
    rootMargin: isSmall ? '0px 0px -30% 0px' : '0px 0px -8% 0px',
    threshold: isSmall ? 0.12 : 0.4,
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

    // If the element is already sufficiently visible (edge cases on mobile), reveal immediately
    try {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0)
      const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0
      if (visibleRatio >= options.threshold) {
        el.classList.add('reveal')
        el.classList.remove('reveal-hidden')
        Array.from(el.children).forEach((child) => {
          child.style.transitionDelay = ''
        })
        revealObserver.unobserve(el)
      }
    } catch (e) {
      // ignore measurement errors
    }
  })
}
