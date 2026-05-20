export function initRevealOnScroll() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const options = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.06,
  }

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal')
        entry.target.classList.remove('reveal-hidden')
        obs.unobserve(entry.target)
      }
    })
  }, options)

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    el.classList.add('reveal-hidden')
    revealObserver.observe(el)
  })
}
