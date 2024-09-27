import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Route } from 'react-router-dom';
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/Github/Github';

//createBrowserRouter() ye method mei ek array hota hai
/*
 const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/Contact",
                element: <Contact />
            }
        ]
    }
])
*/

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} >
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user/:userid' element={<User />} />
            <Route path='github' loader={githubInfoLoader} element={<Github />} />
        </Route>
    )
)


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
