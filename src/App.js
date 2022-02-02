import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import ShowUsers from './components/ShowUsers';
import ShowMessages from './components/ShowMessages';

function App() {
  return (
    <div className='wrapper-app'>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='user' element={<ShowUsers/>}/>
            <Route path='messages' element={<ShowMessages/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
)
}

export default App;
