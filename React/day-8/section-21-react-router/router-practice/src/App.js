import {createBrowserRouter, RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import Home from './pages/Home';
import ProductPages from './pages/ProductPages'
import RootLayout from './RootLayout';
import ErrorPage from './ErrorPage';
import ProductDetailPage from './ProductDetailPage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {path:'',
      element:<Home/>
      },
      {path:'products',
        element:<ProductPages/>
      },
      {path:'products/:id',
        element:<ProductDetailPage/>
      },
    ]
  },
  
])


// const routeDefinitions =createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/products' element={<ProductPages/>}/>
//   </Route>
// )


// const router = createBrowserRouter(routeDefinitions)



function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
