import { useTranslation } from "react-i18next"

const nowadays = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1
        className="text-3xl font-semibold text-gray-600 dark:text-white font-raleway p-3 m-2 mt-8"
        id="improve"
      >
        {t("improveTitle")}
      </h1>
      <hr className="border-t-2" />
      <div className="flex items-center justify-center md:flex-row flex-col gap-2 mt-12 mb-12">
        <div className="md:w-1/2 w-full">
          <p dangerouslySetInnerHTML={{ __html: t("improveContent") }}></p>
        </div>
        <div className="w-1/2 px-3">
          <h2 className="text-6xl text-center font-monsterrat">
            '72, '74, '83, '88-
          </h2>
        </div>
      </div>
    </>
  )
}

export default nowadays
