import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Home from "./pages/Home/home";
import NotFoundd from "./pages/NotFound/notFound";
import DetalhesCamisa from "./pages/Detalhes/DetalhesCamisa";

const router = createBrowserRouter([
  {
      path: "/DOM-temp/",
      element: <Home/>,
  },
  {
      path: "/DOM-temp/*",
      element: <NotFoundd/>,
  },
  {
      path: "/DOM-temp/Detalhes/:id",
      element: <DetalhesCamisa/>,
  },
]);


function App() {


  return(
    <div>
        <RouterProvider router={router} />
    </div>
)
}

export default App


