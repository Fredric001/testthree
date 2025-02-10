import React from "react";
import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Contact from "./Contact.jsx";
import Service from "./Service.jsx";
import LogInComp from "./Components/LogInComp.jsx";
import CreateAccountComp from "./Components/CreateAccountComp.jsx";
import OrderPage from "./OrderPage.jsx";
import ClientOrderPage from "./ClientOrderPage.jsx";

const router= createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'service', element:<Service/>},
  {path:'contact', element:<Contact/>},
  {path:'login', element:<LogInComp/>},
  {path:'createaccount', element:<CreateAccountComp/>},
  {path:'orderPage', element:<OrderPage/>},
  {path:'clientorderpage', element:<ClientOrderPage/>},
])


function App() {
  return (
    <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  );
}

export default App;
