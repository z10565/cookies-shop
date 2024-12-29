import {AboutCookies} from "./pages/AboutCookies/AboutCookies"
import {AboutBakery} from "./pages/AboutBakery/AboutBakery"
import SelectCookie from "./pages/SelectCookie/SelectCookie";
import {MakeOrder} from "./pages/MakeOrder/MakeOrder"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AboutCookies/>
    },
    {
      path:"/step-one",
      element:<AboutBakery/>
    },
    {
      path:"/step-two",
      element:<SelectCookie/>
    },
    {
      path:"/step-three",
      element:<MakeOrder/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

