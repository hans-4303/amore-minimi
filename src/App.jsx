import { Routes, Route } from 'react-router-dom'
import './App.css'
import Event from './pages/Event'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Notice from './pages/Notice'
import ProductDetail from './pages/ProductDetail'
import Sale from './pages/Sale'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/event_detail' element={<Event></Event>}></Route>
          <Route path='/product_detail' element={<ProductDetail></ProductDetail>}></Route>
          <Route path='/sales' element={<Sale></Sale>}></Route>
          <Route path='/notice' element={<Notice></Notice>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
