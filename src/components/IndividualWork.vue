<template>
  <section id="individual-work" class="individual-work">
    <div class="individual-work__container">
      <h2 class="section-title">{{ content.individualWork.sectionTitle }}</h2>

      <ul class="individual-work__list">
        <li
          v-for="(item, index) in content.individualWork.items"
          :key="index"
          class="work-item"
        >
          <!-- Bullet handled via CSS; bold title, then italic description + year -->
          <span class="work-item__title">{{ item.title }}:</span>
          <span class="work-item__desc">
            {{ item.description }}
            <span class="work-item__year">({{ item.year }})</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '../content/siteContent.js'

defineOptions({
  name: 'IndividualWorkSection',
})

const content = siteContent
</script>

<style lang="scss" scoped>
.individual-work {
  position: relative;
  padding: 4rem 0;
  z-index: 1;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* ── bullet list ── */
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }
}

/* ── Section Title ── */
.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
  margin: 0 0 2.5rem;
}

/* ── Work Item ── */
.work-item {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35em;
  font-size: 0.95rem;
  line-height: 1.65;
  padding-left: 1.4rem;
  position: relative;

  /* custom bullet */
  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--color-text);
    font-size: 1rem;
    line-height: 1.65;
  }

  &__title {
    font-weight: 700;
    font-style: italic;
    color: var(--color-text);
    white-space: nowrap;
  }

  &__desc {
    font-style: italic;
    color: var(--color-text-secondary);
  }

  &__year {
    // year inherits italic from parent; keep same colour
    color: var(--color-text-secondary);
  }
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .individual-work__container {
    padding: 0 1rem;
  }

  .work-item {
    font-size: 0.875rem;
  }
}
</style>
