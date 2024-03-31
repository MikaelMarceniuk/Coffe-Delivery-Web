import { createBrowserRouter } from "react-router-dom";
import ShopPage from "./pages/shopPage";

const router = createBrowserRouter([
	{
		path: '/',
		element: <ShopPage />,
	}
])

export default router