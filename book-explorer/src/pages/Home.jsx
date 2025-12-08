import { useEffect, useState } from "react"

export default function Home() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=react")
      .then(res => res.json())
      .then(data => {
        setBooks(data.docs.slice(0, 10))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <h1>Libros sobre React</h1>
      <ul>
        {books.map(book => (
          <li key={book.key}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}