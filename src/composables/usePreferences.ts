import { computed, reactive, watchEffect } from 'vue';

export type ThemeMode = 'light' | 'dark';
export type LocaleMode = 'zh' | 'en';

const state = reactive({
  theme: 'light' as ThemeMode,
  locale: 'zh' as LocaleMode,
});

let initialized = false;

function syncDocument() {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.locale === 'zh' ? 'zh-CN' : 'en';
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('tationcloud-theme', state.theme);
    window.localStorage.setItem('tationcloud-locale', state.locale);
  }
}

function initPreferences() {
  if (initialized) return;
  initialized = true;

  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem('tationcloud-theme');
    const savedLocale = window.localStorage.getItem('tationcloud-locale');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      state.theme = savedTheme;
    }

    if (savedLocale === 'zh' || savedLocale === 'en') {
      state.locale = savedLocale;
    }
  }

  watchEffect(() => {
    syncDocument();
  });
}

export function usePreferences() {
  initPreferences();

  const toggleTheme = () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
  };

  const toggleLocale = () => {
    state.locale = state.locale === 'zh' ? 'en' : 'zh';
  };

  return {
    state,
    themeLabel: computed(() => (state.theme === 'light' ? '浅色' : '深色')),
    localeLabel: computed(() => (state.locale === 'zh' ? '中 / EN' : 'EN / 中')),
    toggleTheme,
    toggleLocale,
  };
}
