<template>
  <section id="work-experience" class="work-experience">
    <div class="work-experience__container">
      <h2 class="section-title">{{ content.workExperience.sectionTitle }}</h2>

      <div class="work-experience__list">
        <div
          v-for="company in content.workExperience.companies"
          :key="company.name"
          class="company-block"
        >
          <!-- Company Header -->
          <div class="company-block__header">
            <div class="company-block__logo">
              <img
                v-if="company.logo"
                :src="company.logo"
                :alt="company.name"
                class="company-block__logo-img"
              />
              <span v-else class="company-block__logo-text">{{ company.logoText }}</span>
            </div>
            <div class="company-block__info">
              <span class="company-block__name">{{ company.name }}</span>
              <span class="company-block__type">{{ company.type }}</span>
            </div>
            <span class="company-block__spacer" aria-hidden="true" />
            <span class="company-block__location">{{ company.location }}</span>
          </div>

          <!-- Roles -->
          <div class="company-block__roles">
            <div
              v-for="role in company.roles"
              :key="role.title"
              class="role-entry"
            >
              <div class="role-entry__header">
                <h3 class="role-entry__title">{{ role.title }}</h3>
                <span class="role-entry__period">{{ role.period }}</span>
              </div>
              <ol class="role-entry__list">
                <li
                  v-for="(item, ii) in role.responsibilities"
                  :key="ii"
                  class="role-entry__item"
                >
                  {{ item }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteContent } from '../content/siteContent.js'

defineOptions({
  name: 'WorkExperienceSection',
})

const content = siteContent
</script>

<style lang="scss" scoped>
.work-experience {
  position: relative;
  padding: 4rem 0;
  z-index: 1;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

/* ── Company Block ── */
.company-block {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border-light);

  /* ---- header bar ---- */
  &__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.9rem 1.5rem;
    background: var(--color-card-light);
    border-bottom: 1px solid var(--color-border-light);
  }

  &__logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e0d4f7, #c4b5e8);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
  }

  &__logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__logo-text {
    font-size: 0.6rem;
    font-weight: 800;
    color: var(--color-primary);
    letter-spacing: 0.04em;
    line-height: 1;
    text-align: center;
  }

  /* name + type badge grouped together */
  &__info {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  &__name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary);
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  /* pill badge for FULL TIME / INTERNSHIP etc. */
  &__type {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-primary);
    background: rgba(var(--color-primary-rgb), 0.18);
    border: 1px solid rgba(var(--color-primary-rgb), 0.35);
    padding: 0.15rem 0.55rem;
    border-radius: var(--radius-full);
    white-space: nowrap;
  }

  &__spacer {
    flex: 1;
  }

  &__location {
    font-size: 1rem;
    color: var(--color-primary);
    white-space: nowrap;
  }

  /* ---- roles container ---- */
  &__roles {
    background: var(--color-bg-card);
    display: flex;
    flex-direction: column;
    gap: 0;
  }
}

/* ── Role Entry ── */
.role-entry {
  padding: 1.25rem 1.5rem 1.25rem 1.75rem;
  border-left: 10px solid var(--color-primary-light);
  margin: 1rem 1.5rem;
  background: transparent;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  transition: border-color var(--transition-fast);

  &:hover {
    border-left-color: var(--color-primary);
  }

  /* ---- header row: title + period ---- */
  &__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  &__title {
    font-size: 0.95rem;
    font-weight: 700;
    font-style: italic;
    color: var(--color-text);
    margin: 0;
    line-height: 1.4;
  }

  &__period {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* ---- numbered responsibility list ---- */
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: responsibility;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  &__item {
    counter-increment: responsibility;
    font-size: 0.875rem;
    font-style: italic;
    color: var(--color-text-secondary);
    line-height: 1.65;
    padding-left: 1.6rem;
    position: relative;

    &::before {
      content: counter(responsibility) ".";
      position: absolute;
      left: 0;
      font-style: normal;
      font-weight: 600;
      color: var(--color-text-secondary);
      min-width: 1.4rem;
    }
  }
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .role-entry {
    margin: 0.75rem 0.75rem;

    &__header {
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  .company-block__header {
    padding: 0.75rem 1rem;
  }
}
</style>
