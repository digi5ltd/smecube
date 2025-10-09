import { Outlet } from "react-router"
import Header from "../pages/shared/Header"
import Footer from "../pages/shared/Footer"
import ScrollToTop from "../utils/ScrollToTop"

function App() {

  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
