import Navbar from "../components/Navbar"
import Content from "../components/Content"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-3/4 mx-auto m-12">
          <Content />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
