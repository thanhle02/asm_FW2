import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './components/Add'
import List from './components/List'
import Detail from './components/Edit'
import Edit from './components/Edit'
import Homepage from './layout/Homepage'
// import Header from './components/header/Header'

function App() {
    return (
        <div className=' max-w-4xl mx-auto'>
            <div>
                {/* <Link to='/'>Home</Link> <br /> */}
                {/* <Link to='/products'>Products</Link> <br /> */}
                {/* <Link to='/products/add'>Add Products</Link> */}
            </div>
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='products' element={<List />} />
                <Route path='products/add' element={<Add />} />
                <Route path='products/:id' element={<Edit />} />
                {/* <Route path='header' element={<Header />} /> */}
            </Routes>
        </div>
    )
}

export default App
