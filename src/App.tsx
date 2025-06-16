
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Layout/Dashboard'
import Auth from './Layout/Auth'
import ViewStudyGroup from './Pages/ViewStudyGroup'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { StudyContextProvider } from './context/StudyContext'
import UserContext from './context/UserContext'
import MainHome from "./Pages/Home"
import ViewMyStudyGroup from './Pages/ViewMyStudyGroup'

//login and signup

//sign up --> signs in user and redirects to login
//login --> redirects to home if user is logged in else shows login form and logs in user then redirects to home

//home should have a protected route that redirects to login if user is not logged in --> getAuth() if logged in...
//


function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={ 
              //contains my auth context
              <UserContext>
                {/* contains my study context */}
                <StudyContextProvider>
                  {/* contains my dashboard view and protects all routes */}
                  <Dashboard/>
                </StudyContextProvider>
              </UserContext>
            }
          >
            <Route index element={<MainHome/>}/>
            <Route path='view-groups' element={<ViewStudyGroup/>}/>
            <Route path='view-groups/my' element={<ViewMyStudyGroup/>}/>
          </Route>
          
          <Route path='/' element={<UserContext><Auth/></UserContext>}>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
  )
}

export default App
