import { useTranslation } from "react-i18next"

const TableOfContents = () => {
  const { t } = useTranslation()
  return (
    // <div className="absolute top-36 left-24 border-red-500 border-dotted border-2 p-3 font-monsterrat">
    <div className="fixed top-36 left-24 font-monsterrat overflow-clip lg:left-24 p-3">
      <div className="flex items-center justify-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 block md:hidden cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <h2 className="text-lg font-bold">{t("contentHeader")}</h2>
      <ul className="mt-4 my-2 indent-2">
        <li className="bg-blue-600 text-gray-50 p-2 my-2">
          <a className="font-semibold" href="#prologue">
            {t("contentPrologue")}
          </a>
        </li>
        <li className="my-2">
          <a className="" href="#history">
            {t("contentHistory")}
          </a>
        </li>
        <li className="my-2">
          <a className="" href="#improve">
            {t("contentImprove")}
          </a>
        </li>
        <li className="my-2">
          <a className="" href="#nowadays">
            {t("contentNowadays")}
          </a>
        </li>
        <li className="my-2">
          <a className="" href="#hungary">
            {t("contentHungary")}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TableOfContents
