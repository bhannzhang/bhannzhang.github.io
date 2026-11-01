<template>
  <figure class="research-figure" :class="`research-figure--${size}`">
    <img v-if="figure.src" :src="figure.src" :alt="figure.alt" :loading="priority ? 'eager' : 'lazy'" :fetchpriority="priority ? 'high' : 'auto'" />
    <div v-else class="research-figure__placeholder" role="img" :aria-label="figure.label">
      <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="8" width="36" height="32" /><path d="M6 31l10-9 8 7 6-5 12 10" /><circle cx="32" cy="17" r="3" /></svg>
      <span>{{ figure.label }}</span>
    </div>
    <figcaption>{{ figure.caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({ figure: { type: Object, required: true }, size: { type: String, default: 'standard' }, priority: { type: Boolean, default: false } })
</script>

<style scoped>
.research-figure { margin: 0; min-width: 0; }
.research-figure img { width: 100%; height: auto; display: block; border: 1px solid var(--benchmark-line); background: transparent; object-fit: contain; }
.research-figure__placeholder { min-height: 280px; padding: 2rem; display: grid; place-items: center; align-content: center; gap: 1rem; color: var(--benchmark-muted); border: 1px solid var(--benchmark-line); background: transparent; text-align: center; }
.research-figure__placeholder svg { width: 40px; height: 40px; fill: none; stroke: var(--benchmark-accent); stroke-width: 1; }
.research-figure__placeholder span { max-width: 34rem; font: 500 .72rem/1.55 var(--font-mono); letter-spacing: .05em; }
.research-figure--hero .research-figure__placeholder { min-height: 430px; }
.research-figure--diagram .research-figure__placeholder { min-height: 390px; }
.research-figure--wide .research-figure__placeholder { min-height: 340px; }
figcaption { padding-top: .75rem; color: var(--benchmark-muted); font-size: .72rem; line-height: 1.5; }
@media (max-width: 620px) { .research-figure__placeholder, .research-figure--hero .research-figure__placeholder, .research-figure--diagram .research-figure__placeholder, .research-figure--wide .research-figure__placeholder { min-height: 230px; padding: 1.25rem; } }
</style>
