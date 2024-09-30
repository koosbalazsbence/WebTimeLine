import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  const toggleLanguage = (lang: "hu" | "en") => {
    i18n.changeLanguage(lang)
    localStorage.setItem("language", lang)
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl p-2">Internet</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 hover:scale-110 transition duration-300 cursor-pointer"
          onClick={() => toggleLanguage(i18n.language === "hu" ? "en" : "hu")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </div>
      <hr className="border-t-2" />
    </>
  )
}

export default Header
