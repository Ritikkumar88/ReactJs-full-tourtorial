import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contect/Contect.jsx'
import User from './components/user/User.jsx'
import Github from './components/Github/Github.jsx'


// method -1 for routing***********

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children : [
//       {
//         path: "",
//         element : <Home/>
//       },

//       {
//         path: "About",
//         element : <About/>
//       },

//       {
//         path: "Contect",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// method 2 -- for routing****************

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='About' element = {<About/>}/>
      <Route path='Contect' element = {<Contact/>}/>
      <Route path='user/:useid' element = {<User/>}/>
      <Route 
      // loader={}
      path='Git-Hub' element = {<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>    {/*here we are using router */}
  </React.StrictMode>,
)
