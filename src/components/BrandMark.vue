<template>
  <div class="brand-mark" :class="{ compact }">
    <div class="brand-badge">{{ initials }}</div>
    <div v-if="!compact" class="brand-copy">
      <strong>{{ label }}</strong>
      <span>{{ subtitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    subtitle?: string;
    compact?: boolean;
  }>(),
  {
    label: 'TationCloud',
    subtitle: '个人云盘 / Personal Cloud',
    compact: false,
  },
);

const initials = 'TC';
</script>

<style scoped>
.brand-mark {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark.compact {
  gap: 8px;
}

.brand-badge {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: var(--accent-primary);
  color: var(--text-inverse);
  display: grid;
  place-items: center;
  font-weight: 700;
  box-shadow: var(--shadow-soft);
}

.brand-mark.compact .brand-badge {
  width: 32px;
  height: 32px;
  border-radius: 12px;
  font-size: 0.85rem;
}

.brand-copy {
  display: grid;
  gap: 2px;
}

.brand-copy strong {
  font-size: 1rem;
  line-height: 1.1;
}

.brand-copy span {
  font-size: 0.8rem;
  color: var(--text-secondary);
}
</style>
