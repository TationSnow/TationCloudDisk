<template>
  <LandingPage v-if="!page || page.layout === 'landing'" />
  <AuthShell v-else-if="page.layout === 'auth'" :page="page" />
  <DesktopShell v-else-if="page.layout === 'desktop'" :page="page" />
  <AppShell v-else :page="page" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { findPage } from '@/data/site';
import LandingPage from '@/components/LandingPage.vue';
import AuthShell from '@/components/AuthShell.vue';
import DesktopShell from '@/components/DesktopShell.vue';
import AppShell from '@/components/AppShell.vue';

const route = useRoute();
const page = computed(() => findPage(route.path));
</script>
