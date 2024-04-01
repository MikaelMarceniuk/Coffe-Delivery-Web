import { createBrowserRouter } from "react-router-dom";
import ShopPage from "./pages/shopPage";
import CartPage from "./pages/cartPage";

const router = createBrowserRouter([
	{
		path: '/',
		element: <ShopPage />,
	},
	{
		path: '/cart',
		element: <CartPage />
	}
])

export default router