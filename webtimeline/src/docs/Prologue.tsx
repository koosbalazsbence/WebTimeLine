import { useTranslation } from "react-i18next"

const History = () => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className="p-3 font-monsterrat mt-8 mb-10" id="prologue">
        <p className="text-3xl p-3">{t("prologueTitle")}</p>
        <blockquote className="p-3 border-s-8 border-blue-700">
          <p dangerouslySetInnerHTML={{ __html: t("prolougeContent") }}></p>
        </blockquote>
      </div>
    </>
  )
}

export default History
