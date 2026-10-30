<template>
  <header class="research-topbar">
    <a class="research-topbar__brand" :href="homeUrl">Bihan Zhang</a>
    <div class="research-topbar__actions">
      <a class="research-topbar__back" :href="`${homeUrl}#research-projects`">
        <span aria-hidden="true">&larr;</span> Back to research projects
      </a>
      <button
        class="research-topbar__theme"
        type="button"
        :aria-label="isLightMode ? 'Switch to dark mode' : 'Switch to light mode'"
        @click="toggleTheme"
      >
        <svg v-if="isLightMode" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" /></svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'

defineProps({ homeUrl: { type: String, required: true } })

const isLightMode = ref(false)

onMounted(() => {
  isLightMode.value = localStorage.getItem('theme') === 'light'
  document.documentElement.classList.toggle('light', isLightMode.value)
})

const toggleTheme = () => {
  isLightMode.value = !isLightMode.value
  document.documentElement.classList.toggle('light', isLightMode.value)
  localStorage.setItem('theme', isLightMode.value ? 'light' : 'dark')
}
</script>

<style scoped>
.research-topbar { width: min(1180px, calc(100% - 3rem)); min-height: 72px; margin-inline: auto; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--color-border); }
.research-topbar__brand { color: var(--color-text); font-size: .92rem; font-weight: 700; letter-spacing: -.01em; }
.research-topbar__actions { display: flex; align-items: center; gap: 1.25rem; }
.research-topbar__back { color: var(--color-text-secondary); font-size: .78rem; }
.research-topbar__back:hover { color: var(--color-text); }
.research-topbar__theme { width: 34px; height: 34px; padding: 7px; color: var(--color-text-secondary); border: 1px solid var(--color-border); background: transparent; cursor: pointer; }
.research-topbar__theme:hover { color: var(--color-text); border-color: var(--color-text-secondary); }
.research-topbar__theme svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
@media (max-width: 900px) {
  .research-topbar { width: min(100% - 2rem, 1180px); min-height: 64px; }
  .research-topbar__back { font-size: 0; }
  .research-topbar__back span { font-size: 1rem; }
}
</style>
