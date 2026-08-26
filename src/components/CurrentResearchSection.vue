<template>
  <section id="current-research" class="current-research">
    <div class="current-research__container">
      <div class="section-heading">
        <p class="section-heading__kicker">{{ research.kicker }}</p>
        <h2>{{ research.sectionTitle }}</h2>
        <p>{{ research.intro }}</p>
      </div>

      <article
        class="feature-card"
        role="link"
        tabindex="0"
        @click="openProject"
        @keydown.enter="openProject"
      >
        <div class="feature-card__copy">
          <div class="feature-card__meta">
            <span>{{ research.project.category }}</span>
            <span class="feature-card__status">{{ research.project.status }}</span>
          </div>
          <h3>{{ research.project.title }}</h3>
          <p class="feature-card__question">{{ research.project.question }}</p>
          <p class="feature-card__description">{{ research.project.description }}</p>
          <div class="feature-card__tags">
            <span v-for="tag in research.project.tags" :key="tag">{{ tag }}</span>
          </div>
          <span class="feature-card__link">View research case study <span aria-hidden="true">&rarr;</span></span>
        </div>

        <div class="feature-card__visual">
          <img :src="research.project.image" :alt="research.project.imageAlt" />
          <span>Concept rendering · physical prototype documented in case study</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '../content/siteContent.js'

defineOptions({ name: 'CurrentResearchSection' })

const research = siteContent.currentResearch
const openProject = () => window.location.assign(research.project.link)
</script>

<style lang="scss" scoped>
.current-research {
  position: relative;
  z-index: 1;
  padding: 4.5rem 0 4rem;

  &__container {
    width: min(1200px, calc(100% - 4rem));
    margin: 0 auto;
  }
}

.section-heading {
  max-width: 760px;
  margin-bottom: 2.25rem;

  &__kicker {
    margin-bottom: .65rem;
    color: #b9a8ff;
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    color: var(--color-text);
    font-size: clamp(1.85rem, 4vw, 3.25rem);
    line-height: 1.08;
    letter-spacing: -.04em;
  }

  > p:last-child {
    max-width: 700px;
    margin-top: 1rem;
    color: var(--color-text-secondary);
    line-height: 1.75;
  }
}

.feature-card {
  min-height: 510px;
  display: grid;
  grid-template-columns: .92fr 1.08fr;
  overflow: hidden;
  border: 1px solid rgba(183, 166, 255, .22);
  border-radius: 1.5rem;
  background: #efe8fb;
  cursor: pointer;
  transition: transform .3s ease, box-shadow .3s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 24px 60px rgba(49, 5, 169, .2);
  }

  &__copy {
    padding: clamp(2rem, 5vw, 4rem);
    display: flex;
    flex-direction: column;
    color: #171421;
  }

  &__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    color: #4d2cc1;
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .09em;
    text-transform: uppercase;
  }

  &__status {
    padding: .35rem .7rem;
    border-radius: 999px;
    background: rgba(16, 185, 129, .12);
    color: #059669;
    letter-spacing: 0;
    text-transform: none;
  }

  h3 {
    margin: 2.2rem 0 1rem;
    font-size: clamp(2rem, 4.2vw, 3.8rem);
    line-height: 1.02;
    letter-spacing: -.055em;
  }

  &__question {
    max-width: 520px;
    color: #4f4661;
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.55;
  }

  &__description {
    max-width: 560px;
    margin-top: 1rem;
    color: #625a70;
    font-size: .9rem;
    line-height: 1.7;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: 1.7rem;

    span {
      padding: .35rem .65rem;
      border: 1px solid rgba(49, 5, 169, .24);
      border-radius: 999px;
      color: #4b3198;
      font-size: .7rem;
      font-weight: 600;
    }
  }

  &__link {
    margin-top: auto;
    padding-top: 2rem;
    color: #3105a9;
    font-size: .82rem;
    font-weight: 700;
  }

  &__visual {
    position: relative;
    min-height: 420px;
    overflow: hidden;
    background: #f7f7f7;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    span {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      padding: .45rem .65rem;
      border-radius: .5rem;
      background: rgba(9, 8, 14, .78);
      color: rgba(255, 255, 255, .82);
      font-size: .65rem;
    }
  }
}

@media (max-width: 840px) {
  .current-research__container { width: min(100% - 2rem, 1200px); }
  .feature-card { grid-template-columns: 1fr; }
  .feature-card__visual { min-height: 390px; order: -1; }
  .feature-card__copy { min-height: 470px; }
}

@media (max-width: 520px) {
  .feature-card__visual { min-height: 300px; }
  .feature-card__copy { min-height: auto; }
  .feature-card__link { margin-top: 1.8rem; }
}
</style>
