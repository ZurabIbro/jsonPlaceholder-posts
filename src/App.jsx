import ToPage from './pages/ToPage'
import styles from './App.module.css'
import FetchPosts from './components/FetchPosts'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route path='/posts' element={<FetchPosts/>}/>
      <Route path='/posts/:id' element={<ToPage/>}/>
    </Routes>
    </>
  )
}

export default App
