<template>
  <main class="shell auth-shell">
    <section class="promo-card">
      <BrandMark />
      <div class="promo-copy">
        <p class="eyebrow">{{ page.breadcrumb }}</p>
        <h1>{{ page.title }}</h1>
        <p>{{ page.subtitle }}</p>
      </div>
      <ul class="bullet-list">
        <li v-for="bullet in page.auth?.bullets || []" :key="bullet">{{ bullet }}</li>
      </ul>
    </section>

    <section class="form-card">
      <div class="tabs">
        <RouterLink v-for="tab in page.auth?.tabs || []" :key="tab.path" :to="tab.path" class="tab-link">
          {{ tab.label }}
        </RouterLink>
      </div>
      <p class="form-note">{{ page.auth?.note }}</p>
      <div class="field-stack">
        <label v-for="field in page.auth?.fields || []" :key="field.label" class="field">
          <span>{{ field.label }}</span>
          <input :placeholder="field.placeholder" disabled />
        </label>
      </div>
      <div class="helper-links">
        <RouterLink v-for="link in page.auth?.helperLinks || []" :key="link.path" :to="link.path" class="helper-link">
          {{ link.label }}
        </RouterLink>
      </div>
      <RouterLink :to="page.auth?.primary.path || '/'" class="submit-button">
        {{ page.auth?.primary.label }}
      </RouterLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BrandMark from './BrandMark.vue';
import type { PageConfig } from '@/data/site';

defineProps<{
  page: PageConfig;
}>();
</script>

<style scoped>
.auth-shell {
  min-height: 100vh;
  padding: 40px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.92fr);
  gap: 24px;
  align-items: center;
}

.promo-card,
.form-card {
  padding: 32px;
  border-radius: var(--radius-3xl);
  background: var(--surface-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.promo-card {
  display: grid;
  gap: 20px;
}

.promo-copy {
  display: grid;
  gap: 12px;
}

.promo-copy h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1;
}

.promo-copy p,
.form-note,
.bullet-list {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.7;
}

.bullet-list {
  padding-left: 20px;
  display: grid;
  gap: 8px;
}

.tabs,
.helper-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tab-link,
.helper-link {
  padding: 10px 14px;
  border-radius: var(--radius-full);
  background: rgba(45, 94, 58, 0.1);
  color: var(--accent-primary);
  font-weight: 700;
}

.form-card {
  display: grid;
  gap: 16px;
}

.field-stack {
  display: grid;
  gap: 12px;
}

.field {
  display: grid;
  gap: 8px;
}

.field span {
  font-size: 0.85rem;
  font-weight: 700;
}

.field input {
  width: 100%;
  border: 0;
  outline: none;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.75);
  color: var(--text-secondary);
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: var(--radius-full);
  background: var(--accent-primary);
  color: var(--text-inverse);
  font-weight: 700;
}

@media (max-width: 940px) {
  .auth-shell {
    grid-template-columns: 1fr;
    padding: 16px;
  }
}
</style>
