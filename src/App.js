import Create from './pages/create/Create';
import Root from './pages/Root';
import Home from './pages/home/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);




function App() {
  return (
   
    <RouterProvider router={router} />
  
    
  );
}

export default App;
