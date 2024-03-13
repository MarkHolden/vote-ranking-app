import './App.css'
import BookList from './BookList'

function App() {

  return (
    <main>
      <h1>Book Club</h1>
      <BookList />
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
