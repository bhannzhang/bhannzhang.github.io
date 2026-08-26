<template>
  <section id="patents" class="patents">
    <div class="patents__container">
      <h2 class="section-title">{{ content.patents.sectionTitle }}</h2>
      <p class="patents__intro">{{ content.patents.intro }}</p>

      <div
        v-for="(category, categoryIndex) in content.patents.categories"
        :key="category.name"
        v-show="categoryIndex === 0 || showEarlierPatents"
        class="patents__category"
      >
        <div class="category-heading">
          <h3 class="category-title">{{ category.name }}</h3>
          <span>{{ category.items.length }} patents</span>
        </div>
        <div class="patents__list">
          <article
            v-for="(patent, patentIndex) in category.items"
            :key="patent.number"
            class="patent-item"
          >
            <span class="patent-item__index">{{ String(patentIndex + 1).padStart(2, '0') }}</span>
            <div class="patent-item__main">
              <h4 class="patent-item__title">{{ patent.title }}</h4>
              <p v-if="patent.role" class="patent-item__role">{{ patent.role }}</p>
            </div>
            <div class="patent-item__meta">
              <span class="patent-item__year">{{ patent.year }}</span>
              <p class="patent-item__number">{{ patent.number }}</p>
              <p class="patent-item__tags">{{ patent.tags.join(' · ') }}</p>
            </div>
          </article>
        </div>
      </div>

      <button
        class="patents__toggle"
        type="button"
        :aria-expanded="showEarlierPatents"
        @click="showEarlierPatents = !showEarlierPatents"
      >
        {{ showEarlierPatents ? 'Hide earlier patents' : `Show earlier patents (${earlierPatentCount})` }}
        <span aria-hidden="true">{{ showEarlierPatents ? '−' : '+' }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { siteContent } from '../content/siteContent.js'

defineOptions({
  name: 'PatentsSection'
})

const content = siteContent
const showEarlierPatents = ref(false)
const earlierPatentCount = computed(() => content.patents.categories.slice(1)
  .reduce((count, category) => count + category.items.length, 0))
</script>

<style lang="scss" scoped>
.patents {
  position: relative;
  padding: 4rem 0;
  z-index: 1;

  &__container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__intro {
    max-width: 760px;
    margin: -1.75rem auto 2.75rem;
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
    line-height: 1.7;
    text-align: center;
  }

  &__category {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-width: 220px;
    margin: 1.5rem auto 0;
    padding: 0.7rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    color: var(--color-text);
    background: transparent;
    font-size: 0.8125rem;
    font-weight: 600;
    transition: border-color 0.2s ease, color 0.2s ease;

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary-light);
    }
  }

  &__list {
    border-top: 1px solid var(--color-border);
  }
}

.section-title {
  margin: 0 0 3rem;
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
}

.category-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.65rem;

  > span {
    color: var(--color-text-muted);
    font-size: 0.6875rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}

.category-title {
  margin: 0;
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.patent-item {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr) minmax(250px, 0.7fr);
  gap: 1rem;
  align-items: start;
  min-width: 0;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.035);
  }

  &__index {
    padding-top: 0.125rem;
    color: var(--color-text-muted);
    font-family: var(--font-mono);
    font-size: 0.6875rem;
  }

  &__title {
    margin: 0;
    color: var(--color-text);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.45;
  }

  &__meta {
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 0.2rem 0.75rem;
    align-items: baseline;
    min-width: 0;
  }

  &__year {
    grid-row: 1 / span 2;
    color: var(--color-primary-light);
    font-size: 0.75rem;
    font-weight: 600;
  }

  &__number {
    margin: 0;
    color: var(--color-text-secondary);
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }

  &__role {
    margin: 0.25rem 0 0;
    color: var(--color-text-secondary);
    font-size: 0.6875rem;
    line-height: 1.45;
  }

  &__tags {
    margin: 0;
    color: var(--color-text-muted);
    font-size: 0.625rem;
    line-height: 1.45;
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    grid-template-columns: 2rem minmax(0, 1fr);
    gap: 0.75rem;

    &__meta {
      grid-column: 2;
      grid-template-columns: max-content minmax(0, 1fr);
      margin-top: -0.35rem;
    }
  }
}
</style>
