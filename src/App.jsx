import { Outlet } from "react-router-dom";
import Header from "./pages/shared/Header";
import Footer from "./pages/shared/Footer";

function App() {
  return (
    <>
      <Header />
      {/* Add padding-top to prevent content from hiding under fixed navbar */}
      <div className="pt-20 md:pt-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
