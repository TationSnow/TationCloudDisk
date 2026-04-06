<template>
  <main class="shell app-shell">
    <header class="app-topbar">
      <BrandMark compact />
      <div class="top-actions">
        <button class="action-pill" type="button" @click="toggleLocale">{{ localeLabel }}</button>
        <button class="action-pill" type="button" @click="toggleTheme">{{ themeLabel }}</button>
        <span class="avatar">TC</span>
      </div>
    </header>

    <section class="hero-panel">
      <p v-if="page.breadcrumb" class="eyebrow">{{ page.breadcrumb }}</p>
      <h1>{{ page.title }}</h1>
      <p class="hero-copy">{{ page.subtitle }}</p>
      <div v-if="page.hero" class="hero-actions">
        <RouterLink :to="page.hero.primary.path" class="hero-primary">{{ page.hero.primary.label }}</RouterLink>
        <RouterLink v-if="page.hero.secondary" :to="page.hero.secondary.path" class="hero-secondary">
          {{ page.hero.secondary.label }}
        </RouterLink>
      </div>
      <div v-if="page.hero?.tags?.length" class="tag-row">
        <span v-for="tag in page.hero.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </section>

    <section v-if="page.quickLinks?.length" class="route-links">
      <RouterLink v-for="link in page.quickLinks" :key="link.path" :to="link.path" class="route-link">
        {{ link.label }}
      </RouterLink>
    </section>

    <section v-if="page.stats?.length" class="stats-grid">
      <article v-for="stat in page.stats" :key="stat.label" class="stat-card">
        <p>{{ stat.label }}</p>
        <strong>{{ stat.value }}</strong>
        <span v-if="stat.hint">{{ stat.hint }}</span>
      </article>
    </section>

    <section class="content-stack">
      <PanelRenderer v-for="panel in preset.main" :key="panel.title" :panel="panel" />
      <PanelRenderer v-for="panel in preset.rail" :key="panel.title" :panel="panel" />
    </section>

    <nav class="bottom-nav">
      <RouterLink v-for="item in appNav" :key="item.path" :to="item.path" class="bottom-link">
        {{ item.label }}
      </RouterLink>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import BrandMark from './BrandMark.vue';
import PanelRenderer from './PanelRenderer.vue';
import { appNav, getPanelPreset, type PageConfig } from '@/data/site';
import { usePreferences } from '@/composables/usePreferences';

const props = defineProps<{
  page: PageConfig;
}>();

const preset = computed(() => getPanelPreset(props.page.section));
const { themeLabel, localeLabel, toggleTheme, toggleLocale } = usePreferences();
</script>

<style scoped>
.shell {
  min-height: 100vh;
  padding: 16px;
}

.app-shell {
  max-width: 430px;
  margin: 0 auto;
  display: grid;
  gap: 14px;
  padding-bottom: 92px;
}

.app-topbar,
.top-actions,
.hero-actions,
.tag-row,
.route-links,
.bottom-nav {
  display: flex;
  align-items: center;
}

.app-topbar,
.route-links {
  justify-content: space-between;
  gap: 10px;
}

.top-actions {
  gap: 8px;
}

.action-pill,
.hero-primary,
.hero-secondary,
.route-link,
.bottom-link {
  padding: 10px 12px;
  border-radius: var(--radius-full);
  font-weight: 700;
}

.action-pill,
.hero-secondary,
.route-link,
.bottom-link {
  background: rgba(45, 94, 58, 0.1);
  color: var(--accent-primary);
}

.avatar {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--accent-primary);
  color: var(--text-inverse);
  font-weight: 700;
}

.hero-panel,
.content-stack {
  display: grid;
  gap: 12px;
}

.hero-panel {
  padding: 22px;
  border-radius: 22px;
  background: rgba(243, 247, 236, 0.92);
  border: 1px solid rgba(27, 58, 40, 0.06);
}

.hero-panel h1 {
  margin: 0;
  font-size: clamp(1.8rem, 8vw, 2.6rem);
  line-height: 1;
}

.hero-copy {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.eyebrow,
.stat-card p {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.tag-row {
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 8px 10px;
  border-radius: var(--radius-full);
  background: rgba(45, 94, 58, 0.1);
  color: var(--accent-primary);
  font-size: 0.78rem;
  font-weight: 700;
}

.route-links {
  flex-wrap: wrap;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.stat-card {
  padding: 16px;
  border-radius: 18px;
  background: var(--surface-card);
  border: 1px solid var(--border);
}

.stat-card strong {
  display: block;
  margin: 6px 0;
  font-size: 1.2rem;
}

.content-stack {
  gap: 14px;
}

.bottom-nav {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  padding: 10px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid var(--border);
  justify-content: space-between;
  box-shadow: var(--shadow);
  backdrop-filter: blur(16px);
}

.bottom-link.router-link-active {
  background: var(--accent-primary);
  color: var(--text-inverse);
}
</style>
