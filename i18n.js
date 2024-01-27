import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from '@/locales/en/translation.json'
import translationFR from '@/locales/fr/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en'
})

export default i18next
