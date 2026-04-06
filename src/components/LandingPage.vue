<template>
  <main class="landing">
    <section class="hero">
      <div class="hero-copy">
        <BrandMark />
        <div class="hero-heading">
          <p class="eyebrow">Pencil → Vue</p>
          <h1>把原型变成可浏览的 Vue 展示站</h1>
          <p>
            桌面端和 App 端都已经拆成清晰的路由，页面之间可以顺着导航和快捷入口继续浏览。
          </p>
        </div>
        <div class="hero-actions">
          <RouterLink class="primary" to="/desktop/home">进入桌面端</RouterLink>
          <RouterLink class="secondary" to="/app/home">进入 App 端</RouterLink>
        </div>
      </div>
      <div class="hero-card">
        <p class="eyebrow">Route Map</p>
        <h2>页面地图</h2>
        <div class="route-columns">
          <div>
            <h3>桌面端</h3>
            <div class="chip-row">
              <RouterLink v-for="link in desktopLinks" :key="link.path" class="chip" :to="link.path">
                {{ link.label }}
              </RouterLink>
            </div>
          </div>
          <div>
            <h3>App 端</h3>
            <div class="chip-row">
              <RouterLink v-for="link in appLinks" :key="link.path" class="chip" :to="link.path">
                {{ link.label }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BrandMark from './BrandMark.vue';
import { getLandingLinks } from '@/data/site';

const desktopLinks = getLandingLinks('desktop');
const appLinks = getLandingLinks('app');
</script>

<style scoped>
.landing {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  place-items: center;
}

.hero {
  width: min(1180px, 100%);
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 24px;
}

.hero-copy,
.hero-card {
  padding: 28px;
  border-radius: var(--radius-3xl);
  background: var(--surface-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.hero-heading {
  display: grid;
  gap: 14px;
  margin-top: 24px;
}

.hero-heading h1,
.hero-card h2 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 0.98;
}

.hero-heading p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 44rem;
}

.hero-actions {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.primary,
.secondary {
  padding: 14px 18px;
  border-radius: var(--radius-full);
  font-weight: 700;
}

.primary {
  background: var(--accent-primary);
  color: var(--text-inverse);
}

.secondary {
  background: rgba(45, 94, 58, 0.1);
  color: var(--accent-primary);
}

.route-columns {
  display: grid;
  gap: 18px;
  margin-top: 18px;
}

.route-columns h3 {
  margin: 0 0 10px;
  font-size: 0.95rem;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  padding: 10px 14px;
  border-radius: var(--radius-full);
  background: rgba(45, 94, 58, 0.1);
  color: var(--accent-primary);
  font-weight: 700;
  font-size: 0.82rem;
}

.eyebrow {
  margin: 0;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

@media (max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .landing {
    padding: 16px;
  }

  .hero-copy,
  .hero-card {
    padding: 20px;
  }
}
</style>
