import { defineStore } from 'pinia'
import type { TAppTheme, TAppLanguage } from '@/models/types/TAppConfig'

export const useCounterStore = defineStore('appConfig', {
  state: () => ({
    theme: 'light',
    language: 'en'
  }),
  getters: { getTheme: (state) => state.theme, getLanguage: (state) => state.language },
  actions: {
    setTheme(theme: TAppTheme) {
      this.theme = theme
    },
    setLanguage(language: TAppLanguage) {
      this.language = language
    }
  }
})
