import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import TableOfContents from "../components/TableOfContents"
import Content from "../components/Content"
import Footer from "../components/Footer"

const Home: React.FC = () => {
  const cheatCode = ["b", "a", "g", "u", "v", "i", "x"]
  const [userInput, setUserInput] = useState<string[]>([])
  const [cheatActivated, setCheatActivated] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyPressed = event.key.toLowerCase()

      setUserInput((prevInput) => {
        const updatedInput = [...prevInput, keyPressed]

        if (updatedInput.join("").includes(cheatCode.join(""))) {
          setCheatActivated(true)
          return []
        }

        if (updatedInput.length > cheatCode.length) {
          updatedInput.shift()
        }

        return updatedInput
      })
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [cheatCode])

  return (
    <>
      <div>
        <Navbar />
        {cheatActivated && (
          <div className="text-center w-1/6 mx-auto text-green-500 text-xl font-bold mt-2 shadow-md">
            <span className="text-2xl">🎉</span>
            Cheat Activated!
          </div>
        )}
        <div className="grid grid-cols-6 w-3/4 mx-auto">
          <div className="col-span-1">
            <TableOfContents />
          </div>
          <div className="mt-12 col-span-5">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
