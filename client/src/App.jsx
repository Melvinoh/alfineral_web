import { Children, useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import { Outlet, RouterProvider, Navigate } from 'react-router'

import Services from './pages/services/Services'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blogs from './pages/blogs/Blogs'
import Contacts from './pages/contacts/Contacts'
import Checkout from './pages/checkout/Checkout'
import Shops from './pages/shops/Shops'
import Products from './pages/products/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/forms/Login'
import Error from './pages/error/Error'
import Header2 from './components/Header2'
import Orders from './admin/orders/Orders'
import Customers from './admin/customers/Customers'
import Settings from './admin/settings/Settings'


function App() {
  const [admin, setAdmin] = useState(false)

  const Layout = ()=>{
    return(
       <section className='layout'>
        <Header/>
        <Outlet/>
        <Footer/>
       </section>
    )
  }
  const Layout2 = ()=>{
    return(
       <section className='layout2'>
        <Header2/>
        <div className='admin-wrapper'>
          <Navbar/>
          <Outlet/>
        </div>
        <Footer/>
       </section>
    )
  }
  const ProtectedRoute = ({children}) =>{
    if(!admin){
      return(
        <Navigate to="/login"/>
      )
    }
    return children;
  }
  const Router = createBrowserRouter ([
    {
      path:"/login",
      element:<Login/>,
      errorElement:<Error/>
    },
   
    {
      path:"/",
      element:<Layout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/blogs",
          element:<Blogs/>
        },
        {
          path:"/contacts",
          element:<Contacts/>
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },
        {
          path:"/shops",
          element:<Shops/>
        },
        {
          path:"/products",
          element:<Products/>
        }
      ]
    },
    {
      path:"/",
      element:(
       <ProtectedRoute>
        <Layout2/>
       </ProtectedRoute>  
      ),
      errorElement:<Error/>,
      children:[
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/customers",
          element:<Customers/>
        },
        {
          path:"/settings",
          element:<Settings/>
        }
      ]
    },
  ])

  return (
    
    <div className='app'>
      <RouterProvider router={Router}/>
    </div>
 
  )
}

export default App
