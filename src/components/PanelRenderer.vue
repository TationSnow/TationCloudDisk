<template>
  <section class="panel">
    <div v-if="panel.title || panel.note" class="panel-head">
      <div>
        <h3>{{ panel.title }}</h3>
      </div>
      <p v-if="panel.note" class="panel-note">{{ panel.note }}</p>
    </div>

    <template v-if="panel.kind === 'metric'">
      <div class="metric-card">
        <strong>{{ panel.value }}</strong>
        <p>{{ panel.note }}</p>
      </div>
    </template>

    <template v-else-if="panel.kind === 'list'">
      <div class="list-stack">
        <component
          :is="item.path ? RouterLink : 'article'"
          v-for="item in panel.items"
          :key="`${panel.title}-${item.title}`"
          class="list-row"
          :to="item.path"
        >
          <div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.meta }}</p>
          </div>
          <span class="status-pill" :data-tone="item.tone || 'muted'">
            {{ item.status || '查看' }}
          </span>
        </component>
      </div>
    </template>

    <template v-else-if="panel.kind === 'cards'">
      <div class="card-grid" :data-columns="panel.columns || 2">
        <component
          :is="item.path ? RouterLink : 'article'"
          v-for="item in panel.items"
          :key="`${panel.title}-${item.title}`"
          class="mini-card"
          :to="item.path"
        >
          <span v-if="item.badge" class="badge" :data-tone="item.tone || 'mint'">{{ item.badge }}</span>
          <h4>{{ item.title }}</h4>
          <p class="meta">{{ item.meta }}</p>
          <p v-if="item.body" class="body">{{ item.body }}</p>
        </component>
      </div>
    </template>

    <template v-else-if="panel.kind === 'progress'">
      <div class="progress-stack">
        <article v-for="item in panel.items" :key="`${panel.title}-${item.title}`" class="progress-row">
          <div class="progress-copy">
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.meta }}</p>
            </div>
            <span>{{ item.status || `${item.progress}%` }}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: `${item.progress}%` }"></div>
          </div>
        </article>
      </div>
    </template>

    <template v-else-if="panel.kind === 'timeline'">
      <div class="timeline-stack">
        <component
          :is="item.path ? RouterLink : 'article'"
          v-for="item in panel.items"
          :key="`${panel.title}-${item.title}`"
          class="timeline-item"
          :to="item.path"
        >
          <div class="timeline-dot"></div>
          <div>
            <h4>{{ item.title }}</h4>
            <p class="meta">{{ item.meta }}</p>
            <p v-if="item.body" class="body">{{ item.body }}</p>
          </div>
        </component>
      </div>
    </template>

    <template v-else-if="panel.kind === 'chips'">
      <div class="chip-row">
        <RouterLink v-for="link in panel.links" :key="link.path" :to="link.path" class="chip-link">
          {{ link.label }}
        </RouterLink>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

type Panel = {
  kind: string;
  title: string;
  note?: string;
  eyebrow?: string;
  value?: string;
  columns?: 2 | 3;
  items?: any[];
  links?: any[];
};

defineProps<{
  panel: Panel;
}>();
</script>

<style scoped>
.panel {
  display: grid;
  gap: 14px;
  padding: 18px;
  border-radius: var(--radius-3xl);
  background: var(--surface-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
}

.panel-head h3 {
  margin: 0;
  font-size: 1rem;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

.panel-note {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.85rem;
  max-width: 18rem;
}

.metric-card {
  padding: 4px 0 2px;
  display: grid;
  gap: 8px;
}

.metric-card strong {
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  line-height: 1;
}

.metric-card p,
.meta,
.body,
.list-row p,
.timeline-item p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
}

.list-stack,
.progress-stack,
.timeline-stack {
  display: grid;
  gap: 10px;
}

.list-row,
.timeline-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(27, 58, 40, 0.06);
}

.timeline-item {
  align-items: start;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 6px;
  background: var(--accent-primary);
  box-shadow: 0 0 0 6px rgba(45, 94, 58, 0.08);
}

.list-row h4,
.timeline-item h4,
.mini-card h4 {
  margin: 0 0 4px;
  font-size: 0.95rem;
}

.status-pill,
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
}

.status-pill[data-tone='success'],
.badge[data-tone='mint'] {
  background: rgba(79, 168, 124, 0.18);
  color: var(--success);
}

.status-pill[data-tone='warning'],
.badge[data-tone='sun'] {
  background: rgba(197, 138, 75, 0.18);
  color: var(--warning);
}

.status-pill[data-tone='danger'] {
  background: rgba(208, 90, 90, 0.18);
  color: var(--danger);
}

.status-pill[data-tone='muted'],
.badge[data-tone='sky'] {
  background: rgba(74, 134, 168, 0.14);
  color: var(--accent-sky);
}

.badge[data-tone='violet'] {
  background: rgba(122, 105, 198, 0.16);
  color: var(--accent-violet);
}

.card-grid {
  display: grid;
  gap: 12px;
}

.card-grid[data-columns='3'] {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card-grid[data-columns='2'] {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.mini-card {
  display: grid;
  gap: 8px;
  padding: 16px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.95));
  border: 1px solid rgba(27, 58, 40, 0.06);
  min-height: 120px;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip-link {
  padding: 10px 14px;
  border-radius: var(--radius-full);
  background: rgba(45, 94, 58, 0.1);
  color: var(--accent-primary);
  font-weight: 700;
  font-size: 0.8rem;
}

.progress-row {
  display: grid;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(27, 58, 40, 0.06);
}

.progress-copy {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 12px;
}

.progress-track {
  height: 8px;
  border-radius: 999px;
  background: rgba(45, 94, 58, 0.12);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-mint));
}

@media (max-width: 900px) {
  .card-grid[data-columns='3'],
  .card-grid[data-columns='2'] {
    grid-template-columns: 1fr;
  }
}
</style>
