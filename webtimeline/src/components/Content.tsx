import { useTranslation } from "react-i18next"
import { useEffect } from "react"

const Content = () => {
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
      {/* <div className="w-full h-full border-red-500 border-dotted border-2"> */}
      <div className="w-full h-full">
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
        <div className="p-3 font-monsterrat mt-8 mb-10" id="prologue">
          <p className="text-3xl p-3">Mi az Internet?</p>
          <blockquote className="p-3 border-s-8 border-blue-700">
            Az internet egy nemzetközileg elterjedt, angol eredetű szóból ered
            (internetwork), magyarul: <br />
            <span className="font-bold text-lg">„hálózatok hálózata”</span>. Az
            egész világot körülölelő számítógép-hálózat, hatalmas rendszer,
            amely számítógép-hálózatokat fog össze.
          </blockquote>
        </div>
        <div className="w-full">
          <h1
            className="text-3xl font-semibold text-gray-600 dark:text-white font-raleway m-2 p-3 mt-8"
            id="history"
          >
            Előzmények
          </h1>
          <hr className="border-t-2" />
          <div className="flex items-center justify-center md:flex-row flex-col gap-2 mt-12">
            <div className="w-1/2 px-3">
              <h2 className="text-6xl text-center font-monsterrat">1960-</h2>
            </div>
            <div className="w-1/2">
              Az <strong>1960-as években</strong> kezdődött a katonai
              fejlesztések civil szférába való átáramlása, amikor az{" "}
              <strong>
                USA-ban felmerült egy kevéssé sebezhető számítógép-hálózat
                szükségessége
              </strong>
              , amely <em>atomtámadás után is működőképes</em> maradhat.{" "}
              <strong>Eisenhower elnök</strong>, válaszul a{" "}
              <strong>Szputnyik-1 fellövésére</strong>, megalapította a{" "}
              <strong>DARPA-t</strong>, amely finanszírozta a kutatásokat.
              Kidolgoztak egy{" "}
              <strong>
                többközpontú, csomagkapcsolt hálózati kommunikációs rendszert
              </strong>{" "}
              (NCP protokoll), amely a mai <strong>TCP/IP elődje</strong> volt.
              Az <strong>ARPANET 1969-ben</strong> ezen az elven kezdett
              működni, és katonai, valamint kutatási célokra használták, például{" "}
              <strong>
                elektronikus levelezésre, fájlok cseréjére és távoli
                bejelentkezésre
              </strong>
              .
            </div>
          </div>
          <h1
            className="text-3xl font-semibold text-gray-600 dark:text-white font-raleway p-3 m-2 mt-8"
            id="improve"
          >
            A fejlődés útja
          </h1>
          <hr className="border-t-2" />
          <div className="flex items-center justify-center md:flex-row flex-col gap-2 mt-12 mb-12">
            <div className="md:w-1/2 w-full">
              <strong>1972-ben</strong> megjelent az első{" "}
              <strong>e-mail-program</strong>, <strong>1974-ben</strong> pedig
              először használták az <em>„internet”</em> kifejezést egy{" "}
              <strong>TCP protokollról</strong> szóló tanulmányban.{" "}
              <strong>1983-ban</strong> az ARPANET katonai részét leválasztották{" "}
              <strong>MILNET</strong> néven. <strong>1988-ban</strong> megjelent
              az első hálózaton terjedő <strong>féregvírus</strong>. A{" "}
              <strong>National Science Foundation (NSF)</strong> felismerte a
              hálózat tudományos kutatásban játszott szerepét, és kiépítette az{" "}
              <strong>NSFNET</strong> hálózatot, amelyet összekapcsoltak az{" "}
              <strong>ARPANET-tel</strong>. Az NSFNET gyorsan bővült, és ma is
              az USA egyik fő gerinchálózata. Az{" "}
              <strong>ARPANET 1989-ben</strong> megszűnt, és a kommunikáció
              egyre inkább magánhálózatokon zajlik. Az internet gyors növekedése
              folytatódott, különösen a <strong>WWW</strong> elterjedésével, és
              az <strong>adatforgalom</strong> ma hatalmas méreteket ölt.
            </div>
            <div className="w-1/2 px-3">
              <h2 className="text-6xl text-center font-monsterrat">
                '72, '74, '83, '88-
              </h2>
            </div>
          </div>
          <h1
            className="text-3xl font-semibold text-gray-600 dark:text-white font-raleway p-3 m-2 mt-8"
            id="nowadays"
          >
            Az internet manapság
          </h1>
          <hr className="border-t-2" />
          <div className="flex items-center justify-center md:flex-row flex-col gap-2 mt-12 mb-12">
            <div className="w-1/2 px-3">
              <h2 className="text-6xl text-center font-monsterrat">2010-</h2>
            </div>
            <div className="w-1/2">
              Manapság körülbelül <strong>négymilliárd ember</strong> használja
              az internetes technológiákat személyes és üzleti célokra, például{" "}
              <strong>információkeresésre</strong>, vásárlásra,
              kapcsolattartásra és szórakozásra. Jelenleg folyó kutatások célja
              az internet technikai problémáinak megoldása, mint például az{" "}
              <strong>új IPv6 címzési rendszer bevezetése</strong>, mivel a
              jelenlegi <strong>IPv4 címek kifogyóban vannak</strong>. Az IPv6
              bevezetése nélkül az internet bővítése nehézségekbe ütközne, mivel
              még legalább <strong>ötmilliárd ember</strong> számára kellene
              hozzáférést biztosítani. <strong>2010-ben az MIT</strong>{" "}
              bejelentette a <em>"flow switching"</em> technológiát, amely{" "}
              <strong>
                százszorosára növelhetné az adattovábbítás sebességét
              </strong>
              , de ennek bevezetését akadályozza, hogy ehhez le kellene cserélni
              a routereket. Emellett több eset is rámutatott arra, hogy az{" "}
              <strong>internet stabilitása</strong> nem olyan biztos, mint
              ahogyan tervezték.
            </div>
          </div>
          <h1
            className="text-3xl font-semibold text-gray-600 dark:text-white font-raleway p-3 m-2 mt-8"
            id="hungary"
          >
            Az internet Magyarországon
          </h1>
          <hr className="border-t-2" />
          <div className="flex items-center justify-center md:flex-row flex-col gap-2 mt-12 mb-12">
            <div className="w-1/2">
              Az első magyarországi domaint, a <strong>sztaki.hu-t</strong>{" "}
              <strong>1991-ben</strong> jegyezték be a{" "}
              <strong>Számítástechnikai és Automatizálási Kutatóintézet</strong>{" "}
              számára. Az internet hazai elterjedését gyorsította a{" "}
              <strong>Matáv</strong> hálózatán <strong>1995-től</strong>{" "}
              elérhető telefonmodemes hozzáférés, majd <strong>1999-ben</strong>{" "}
              megjelent az üzleti és lakossági{" "}
              <strong>ISDN szolgáltatás</strong>. <strong>2001-ben</strong> az{" "}
              <strong>Axelero</strong> néven futó szolgáltató elérhetővé tette
              az <strong>ADSL technológiát</strong> magánszemélyeknek is. A
              vezetékes piac megnyitása után több szolgáltató is megjelent, míg
              a <strong>UPC</strong> <strong>2000-ben</strong> indította el a{" "}
              <strong>Chello szélessávú internetet</strong>.{" "}
              <strong>2007-ben</strong> a magyar háztartások{" "}
              <strong>38%-a</strong> rendelkezett internet-előfizetéssel, a
              szélessávú hozzáférések aránya is nőtt. <strong>2011-re</strong>{" "}
              jelentős növekedést mutattak a{" "}
              <strong>mobilinternet-előfizetések</strong>, amelyek száma több
              mint <strong>2 millióra</strong> emelkedett. Egy{" "}
              <strong>2014-es tervezett gigabyte-adót</strong> a széleskörű
              tiltakozások miatt visszavonták. A{" "}
              <strong>2010-es évek végére</strong> a piac telített lett, a{" "}
              <strong>4G mobilinternet</strong> és az{" "}
              <strong>optikai kábeles szolgáltatások</strong> elterjedése pedig
              számottevően nőtt.
            </div>
            <div className="w-1/2 px-3">
              <h2 className="text-6xl text-center font-monsterrat">
                Az internet Magyarországon
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
