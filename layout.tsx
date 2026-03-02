@import "tailwindcss";

/* =========
   Design tokens
   ========= */
:root{
  --brand-blue: #4EA9DD;
  --brand-yellow: #FFCD1B;
  --ink: #0B1220;
  --soft: #F7FAFF;
}

/* Smooth scrolling for anchor nav (respect reduced motion). */
html{ scroll-behavior:smooth; }
@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior:auto; }
}

::selection{
  background: color-mix(in oklab, var(--brand-yellow) 70%, white);
  color: var(--ink);
}

/* Focus ring baseline (AA contrast). */
:focus-visible{
  outline: 3px solid color-mix(in oklab, var(--brand-yellow) 75%, white);
  outline-offset: 3px;
}

/* Better tap targets on mobile */
button, a{ -webkit-tap-highlight-color: transparent; }

/* Utility: subtle dotted background for sections */
.bg-dots{
  background-image:
    radial-gradient(circle at 1px 1px, rgba(11,18,32,.10) 1px, transparent 0);
  background-size: 18px 18px;
}
