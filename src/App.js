import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Headers/Layout/Layout';
import Add from './Components/Headers/Add/Add';
import Watchlist from './Components/Headers/Watchlist/Watchlist';
import Watched from './Components/Headers/Warched/Watched';
import ContextProvider from './Components/Context/GlobalContext';

function App() {


  let Routers = createHashRouter([
    {path:'/', element: <Layout/> , children:[
      {path: "/" , element:<Watchlist/>},
      {path: "Watched" , element:<Watched/>},
      {path: "Add" , element:<Add/>},
      
    ] }
  ])

 
  return <>
 <ContextProvider>
 <RouterProvider router= {Routers}> </RouterProvider>
 </ContextProvider>
  </>

  
  
}

export default App;
