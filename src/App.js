import './App.css';
import HomePage from './Pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Questions from './Pages/Questions'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
  },
 { 
  path:"/questions",
  element:<Questions/>
 }
]);



function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
