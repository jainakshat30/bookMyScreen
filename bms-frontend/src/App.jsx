import { Route,Routes } from "react-router-dom"
import Footer from "./components/shared/footer"
import Header from "./components/shared/header"

function App() {

  return (
    <>
      <div className = "flex flex-col mih-h-screen">
        <main className = "flex-grow">
          <Header/>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/profile/:id" element={<h1>Profile</h1>} />
            <Route path="/movies" element={<h1>Movies</h1>} />
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
