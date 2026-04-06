<template>
  <main class="shell desktop-shell">
    <aside class="sidebar">
      <BrandMark />

      <nav class="nav-list">
        <RouterLink
          v-for="item in desktopNav"
          :key="item.path"
          :to="item.path"
          class="nav-link"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <section class="sidebar-card">
        <p class="card-title">空间使用</p>
        <strong>1.2 TB / 2 TB</strong>
        <div class="meter">
          <span />
        </div>
        <p class="card-note">已连接 3 台设备，18 个加密文件。</p>
      </section>

      <section class="sidebar-card vip-card">
        <p class="card-title">会员中心</p>
        <p class="card-note">VIP / SVIP 权益、到期与账单统一展示。</p>
        <RouterLink to="/desktop/membership" class="sidebar-button">升级 SVIP</RouterLink>
      </section>
    </aside>

    <section class="workspace">
      <header class="topbar">
        <div class="search-pill">
          <span>搜索文件、文件夹、内容...</span>
        </div>
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
          <RouterLink
            v-if="page.hero.secondary"
            :to="page.hero.secondary.path"
            class="hero-secondary"
          >
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

      <section class="content-grid">
        <div class="content-main">
          <PanelRenderer v-for="panel in preset.main" :key="panel.title" :panel="panel" />
        </div>
        <aside class="content-rail">
          <PanelRenderer v-for="panel in preset.rail" :key="panel.title" :panel="panel" />
        </aside>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import BrandMark from './BrandMark.vue';
import PanelRenderer from './PanelRenderer.vue';
import { desktopNav, getPanelPreset, type PageConfig } from '@/data/site';
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
  padding: 24px;
}

.desktop-shell {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 24px;
}

.sidebar,
.workspace {
  min-width: 0;
}

.sidebar {
  display: grid;
  gap: 20px;
  align-content: start;
  padding: 20px;
  border-radius: var(--radius-3xl);
  background: rgba(216, 231, 205, 0.72);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  position: sticky;
  top: 24px;
  height: fit-content;
}

.nav-list {
  display: grid;
  gap: 8px;
}

.nav-link {
  padding: 12px 14px;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.36);
  color: var(--text-primary);
  font-weight: 700;
}

.nav-link.router-link-active {
  background: var(--accent-primary);
  color: var(--text-inverse);
}

.sidebar-card {
  display: grid;
  gap: 8px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.35);
}

.sidebar-card strong {
  font-size: 1.7rem;
}

.card-title,
.eyebrow,
.stat-card p {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.card-note,
.hero-copy,
.stat-card span {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.meter {
  height: 10px;
  border-radius: 999px;
  background: rgba(45, 94, 58, 0.12);
  overflow: hidden;
}

.meter span {
  display: block;
  width: 60%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-mint));
}

.sidebar-button,
.hero-primary,
.hero-secondary,
.action-pill,
.route-link {
  border-radius: var(--radius-full);
  font-weight: 700;
}

.sidebar-button,
.hero-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  background: var(--accent-primary);
  color: var(--text-inverse);
}

.hero-secondary,
.route-link,
.action-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  background: rgba(45, 94, 58, 0.1);
  color: var(--accent-primary);
}

.workspace {
  display: grid;
  gap: 20px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.search-pill {
  flex: 1;
  min-width: 0;
  padding: 12px 16px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  color: var(--text-secondary);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: var(--accent-primary);
  color: var(--text-inverse);
  font-weight: 700;
}

.hero-panel {
  display: grid;
  gap: 14px;
  padding: 24px;
  border-radius: var(--radius-3xl);
  background: rgba(243, 247, 236, 0.88);
  border: 1px solid rgba(27, 58, 40, 0.06);
}

.hero-panel h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1;
}

.hero-actions,
.tag-row,
.route-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 8px 12px;
  border-radius: var(--radius-full);
  background: rgba(45, 94, 58, 0.1);
  color: var(--accent-primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.route-links {
  padding: 4px 0;
}

.route-link.router-link-active {
  background: var(--accent-primary);
  color: var(--text-inverse);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.stat-card {
  padding: 18px;
  border-radius: var(--radius-2xl);
  background: var(--surface-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.stat-card strong {
  display: block;
  margin: 8px 0;
  font-size: 1.4rem;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.8fr);
  gap: 18px;
  align-items: start;
}

.content-main,
.content-rail {
  display: grid;
  gap: 16px;
  min-width: 0;
}

.content-rail {
  position: sticky;
  top: 24px;
}

@media (max-width: 1180px) {
  .desktop-shell {
    grid-template-columns: 1fr;
  }

  .sidebar,
  .content-rail {
    position: static;
  }
}

@media (max-width: 900px) {
  .stats-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .shell {
    padding: 16px;
  }
}
</style>
