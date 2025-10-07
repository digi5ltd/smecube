import { Outlet } from "react-router"
import Header from "./pages/shared/Header"
import Footer from "./pages/shared/Footer"

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
