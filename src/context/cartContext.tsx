import { createContext, useContext, useReducer } from "react";
import ICoffeCart from "../interface/ICoffeCart";
import CartReducer from "../reducers/cart/reducer";
import { removeProductAction, updateCartAction } from "../reducers/cart/actions";

export interface ICartContext {
	values: ICoffeCart[]
	updateCart: (coffe: ICoffeCart) => void
	removeProduct: (id: number) => void
}

const CartContext = createContext<ICartContext>({} as ICartContext)

export const useCartContext = () => useContext(CartContext)

interface ICartContextProviderProps {
	children: React.ReactNode
}

const CartContextProvider: React.FC<ICartContextProviderProps> = ({ children }) => {
	const [cart, dispatch] = useReducer(CartReducer, [])

	const updateCart = (coffe: ICoffeCart) => dispatch(updateCartAction(coffe))

	const removeProduct = (id: number) => dispatch(removeProductAction(id))

	return (
		<CartContext.Provider value={{
			values: cart,
			updateCart,
			removeProduct
		}}>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider