import { useTranslation } from "react-i18next"
import { useState } from "react"

const TableOfContents = () => {
  const [activeItem, setActiveItem] = useState(null)
  const { t } = useTranslation()
  return (
    <div className="fixed top-36 left-24 font-monsterrat overflow-clip p-3 hidden 2xl:block">
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
      <ul className="mt-4 my-2">
        <li>
          <a
            className={
              activeItem === "prologue"
                ? "bg-blue-600 text-gray-50 transition duration-500 ease-in-out font-semibold px-2 p-1"
                : "my-2 transition ease-in-out px-2 p-1"
            }
            onClick={() => setActiveItem("prologue")}
            href="#prologue"
          >
            {t("contentPrologue")}
          </a>
        </li>
        <li className="my-2">
          <a
            className={
              activeItem === "history"
                ? "bg-blue-600 text-gray-50 transition duration-500 ease-in-out font-semibold px-2 p-1"
                : "my-2 transition ease-in-out px-2 p-1"
            }
            onClick={() => setActiveItem("history")}
            href="#history"
          >
            {t("contentHistory")}
          </a>
        </li>
        <li className="my-2">
          <a
            className={
              activeItem === "improve"
                ? "bg-blue-600 text-gray-50 transition duration-500 ease-in-out font-semibold px-2 p-1"
                : "my-2 transition ease-in-out px-2 p-1"
            }
            onClick={() => setActiveItem("improve")}
            href="#improve"
          >
            {t("contentImprove")}
          </a>
        </li>
        <li className="my-2">
          <a
            className={
              activeItem === "nowadays"
                ? "bg-blue-600 text-gray-50 transition duration-500 ease-in-out font-semibold px-2 p-1"
                : "my-2 transition ease-in-out px-2 p-1"
            }
            onClick={() => setActiveItem("nowadays")}
            href="#nowadays"
          >
            {t("contentNowadays")}
          </a>
        </li>
        <li className="my-2">
          <a
            className={
              activeItem === "hungary"
                ? "bg-blue-600 text-gray-50 transition duration-500 ease-in-out font-semibold px-2 p-1"
                : "my-2 transition ease-in-out px-2 p-1"
            }
            onClick={() => setActiveItem("hungary")}
            href="#hungary"
          >
            {t("contentHungary")}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TableOfContents
