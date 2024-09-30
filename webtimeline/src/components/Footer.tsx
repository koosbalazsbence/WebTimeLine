import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  const getFullYear = () => new Date().getFullYear()
  return (
    <>
      <footer className="bottom-0 w-full h-16 p-3 mb-5 font-monsterrat">
        <hr className="w-4/5 mx-auto" />
        <p className="text-sm text-center pt-3">
          &#169; {getFullYear()} - WebTimeLine
        </p>
        <p className="text-sm text-center pb-2">
          {t("footerSource")}{" "}
          <Link
            to="https://hu.wikipedia.org/wiki/Internet"
            target="_blank"
            className="hover:underline underline-offset-2 hover:text-blue-500 transition"
          >
            {t("footerSourceLink")}
          </Link>
        </p>
        <p className="text-sm text-center font-raleway pb-5">
          {t("footerDeveloper")}{" "}
          <Link
            to="https://github.com/koosbalazsbence"
            target="_blank"
            className="hover:underline underline-offset-2 hover:text-green-700 transition"
          >
            Koós Balázs Bence
          </Link>
        </p>
      </footer>
    </>
  )
}

export default Footer
