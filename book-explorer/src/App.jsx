import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookDetail from "./pages/BookDetail"
import Favorites from "./pages/Favorites.jsx"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App