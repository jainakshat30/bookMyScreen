import { Route,Routes } from "react-router-dom"

function App() {

  return (
    <>
      <div className = "flex flex-col mih-h-screen">
        <main className = "flex-grow">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/profile/:id" element={<h1>Profile</h1>} />
            <Route path="/movies" element={<h1>Movies</h1>} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
