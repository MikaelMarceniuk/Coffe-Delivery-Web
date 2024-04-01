import { RouterProvider } from "react-router-dom"
import router from "./router"
import CartContextProvider from "./context/cartContext"
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <CartContextProvider>
      <ToastContainer />
      <RouterProvider router={router}/>
    </CartContextProvider>
  )
}

export default App
