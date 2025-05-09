import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <NavBar/>
      <main className='p-5'>
        <Home/>
      </main>
    </div>
  )
}

export default App
