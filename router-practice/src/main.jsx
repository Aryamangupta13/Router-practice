import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github , {githubData} from './components/GitHub.jsx'
import User from './components/User.jsx'


// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route path="" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       <Route path="github" loader={githubData} element={<Github/>}/>
//     </Route>
//   )
// )
// this or below works same
//createBrowserRouter is used to give array of paths and elemtnts so that it helps to store the history and local storage
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    // childrens are used to give the further paths after "/" like "/about" etc.
    children:[
      {
        path:"",
        element:<Home/>
      },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          //here give an async funtion which is you want to do things before 
          loader:githubData,
          path:"github",
          element:<Github/>
        },
        {
          path:"user/:userid",
          element:<User/>
        }
        
      ] 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
