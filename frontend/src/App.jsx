import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/home/Home'
import {Route,Routes} from "react-router-dom"
import SingleHotel from './Pages/single-hotel-page/SingleHotel'
import LoginPage from './authentication/login/LoginPage'
import RegisterPage from './authentication/Register/RegisterPage'
import WishList from './Components/wish-list/WishList'
const App = () => {
  return (
    <div>
      <NavBar/>
      <main className='p-5'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel />} />
          <Route path='/wish-list' element={<WishList/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
