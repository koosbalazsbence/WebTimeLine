import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTrs from "../locale/en.json"
import huTrs from "../locale/hu.json"

i18n.use(initReactI18next).init({
  resources: {
    hu: {
      translation: huTrs,
    },
    en: {
      translation: enTrs,
    },
  },
  lng: localStorage.getItem("language") || "hu",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
