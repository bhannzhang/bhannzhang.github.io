<template>
  <section id="prototypes" class="individual-work">
    <div class="individual-work__container">
      <h2 class="section-title">{{ content.individualWork.sectionTitle }}</h2>
      <p class="individual-work__intro">{{ content.individualWork.intro }}</p>

      <div v-for="group in content.individualWork.groups" :key="group.name" class="individual-work__group">
        <h3 class="individual-work__group-title">{{ group.name }}</h3>
        <ul class="individual-work__list">
          <li
            v-for="item in group.items"
            :key="item.title"
            class="work-item"
          >
            <a v-if="item.link" class="work-item__title work-item__title--link" :href="item.link">{{ item.title }}:</a>
            <span v-else class="work-item__title">{{ item.title }}:</span>
            <span class="work-item__desc">
              {{ item.description }}
              <span class="work-item__year">({{ item.year }})</span>
            </span>
          </li>
        </ul>
      </div>
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

  &__intro {
    max-width: 780px;
    margin: -1.25rem auto 2.5rem;
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
    line-height: 1.7;
    text-align: center;
  }

  &__group {
    margin-bottom: 2.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__group-title {
    margin: 0 0 1rem;
    padding-left: 1rem;
    border-left: 3px solid var(--color-primary);
    color: var(--color-primary);
    font-size: 1rem;
    font-weight: 600;
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

    &--link {
      text-decoration: underline;
      text-decoration-color: rgba(183, 166, 255, .5);
      text-underline-offset: .2em;

      &:hover { color: var(--color-primary-light); }
    }
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
