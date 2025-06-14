
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Layout/Dashboard'
import Auth from './Layout/Auth'
import Home from './Pages/Home'
import ViewCourses from './Pages/ViewCourses'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route index element={<Home/>}/>
          <Route path='view-courses' element={<ViewCourses/>}/>
          <Route path='view-courses/:username' element={<ViewCourses/>}/>
          <Route path='view-course' element={<></>} />
        </Route>
        <Route path='/' element={<Auth/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
