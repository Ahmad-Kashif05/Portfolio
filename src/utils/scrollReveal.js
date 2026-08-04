/**
 * initScrollReveal
 * ------------------------------------------------------------------
 * Subtle, dependency-free fade/translate-in effect for each top-level
 * <section>. Marks sections with [data-reveal] and toggles a
 * ".is-visible" class as they enter the viewport, using
 * IntersectionObserver. Falls back silently (sections stay visible)
 * if IntersectionObserver isn't supported. Respects
 * prefers-reduced-motion via CSS (see index.css).
 */
export function initScrollReveal() {
  const sections = document.querySelectorAll("section");

  if (!("IntersectionObserver" in window) || sections.length === 0) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  sections.forEach((section, index) => {
    section.setAttribute("data-reveal", "true");
    // First section (hero) should be visible immediately, not on scroll.
    if (index === 0) {
      section.classList.add("is-visible");
      return;
    }
    observer.observe(section);
  });
}
