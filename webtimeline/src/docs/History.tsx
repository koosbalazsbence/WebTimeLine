import { useTranslation } from "react-i18next"

const Improve = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1
        className="text-3xl font-semibold text-gray-600 dark:text-white font-raleway m-2 p-3 mt-8"
        id="history"
      >
        {t("historyTitle")}
      </h1>
      <hr className="border-t-2" />
      <div className="flex items-center justify-center md:flex-row flex-col gap-2 mt-12">
        <div className="w-1/2 px-3 flex justify-center">
          <h2 className="text-6xl text-center font-monsterrat">1960-</h2>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <p dangerouslySetInnerHTML={{ __html: t("historyContent") }} />
        </div>
      </div>
    </>
  )
}

export default Improve
