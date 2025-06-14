
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Layout/Dashboard'
import Auth from './Layout/Auth'
import Home from './pages/Home/Home'
// import ViewCourses from './Pag es/ViewCourses'
// import Login from './Pages/Login'
// import Signup from './Pages/Signup'
import { StudyContextProvider } from './context/StudyContext'

function App() {
  return (
    <StudyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route index element={<Home/>}/>
            {/* <Route path='view-courses' element={<ViewCourses/>}/> */}
            {/* <Route path='view-courses/:username' element={<ViewCourses/>}/> */}
            <Route path='view-course' element={<></>} />
          </Route>
          <Route path='auth' element={<Auth/>}>
            {/* <Route path='login' element={<Login/>}/> */}
            {/* <Route path='signup' element={<Signup/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </StudyContextProvider>
  )
}

export default App
