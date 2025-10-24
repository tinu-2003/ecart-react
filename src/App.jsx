
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Prouduct from './pages/Prouduct'
import ViewProuduct from './pages/ViewProuduct'
import Pnf from './pages/Pnf'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/prouduct' element={<Prouduct/>}/>
      <Route path='/viewprouduct/:id' element={<ViewProuduct/>}/>
      <Route path='*' element={<Pnf/>}/>
    </Routes>
    </>
  )
}

export default App
