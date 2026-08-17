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
        <h3 class="category-title">{{ category.name }}</h3>
        <div class="patents__list">
          <article
            v-for="patent in category.items"
            :key="patent.number"
            class="patent-item"
          >
            <div class="patent-item__header">
              <h4 class="patent-item__title">{{ patent.title }}</h4>
              <span class="patent-item__year">{{ patent.year }}</span>
            </div>
            <p class="patent-item__number">{{ patent.number }}</p>
            <p v-if="patent.role" class="patent-item__role">{{ patent.role }}</p>
            <div class="patent-item__tags">
              <span v-for="tag in patent.tags" :key="tag" class="patent-tag">{{ tag }}</span>
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
    max-width: 1000px;
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
    margin-bottom: 2.5rem;

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
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }
}

.section-title {
  margin: 0 0 3rem;
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
}

.category-title {
  margin: 0 0 1rem;
  padding-left: 1rem;
  border-left: 3px solid var(--color-primary);
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
}

.patent-item {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.25rem;
  background: var(--color-card-light);
  border-radius: var(--radius-lg);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(139, 92, 246, 0.12);
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  &__title {
    margin: 0;
    color: #1a1a2e;
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.45;
  }

  &__year {
    flex-shrink: 0;
    color: #6a6a8a;
    font-size: 0.75rem;
    font-weight: 600;
  }

  &__number {
    margin: 0.5rem 0 0;
    color: #4a4a6a;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    line-height: 1.4;
  }

  &__role {
    margin: 0.4rem 0 0;
    color: #6a6a8a;
    font-size: 0.75rem;
    line-height: 1.45;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: auto;
    padding-top: 0.75rem;
  }
}

.patent-tag {
  padding: 0.1875rem 0.5rem;
  color: var(--color-primary);
  background: rgba(139, 92, 246, 0.1);
  border-radius: var(--radius-sm);
  font-size: 0.6875rem;
  font-weight: 500;
}
</style>
