import Header from "../docs/Header"
import Prologue from "../docs/Prologue"
import History from "../docs/History"
import Improve from "../docs/Improve"
import Nowadays from "../docs/Nowadays"
import Hungary from "../docs/Hungary"

const Content = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <Prologue />
        <div className="w-full">
          <History />
          <Improve />
          <Nowadays />
          <Hungary />
        </div>
      </div>
    </>
  )
}

export default Content
