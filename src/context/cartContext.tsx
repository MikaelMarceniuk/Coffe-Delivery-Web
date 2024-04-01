import { createContext, useContext, useReducer } from "react";
import ICoffeCart from "../interface/ICoffeCart";
import CartReducer from "../reducers/cart/reducer";
import { toast } from "react-toastify";
import {
	updateCartAction,
	increaseCoffeQtdAction,
	decreaseCoffeQtdAction,
	removeProductAction
} from "../reducers/cart/actions";

export interface ICartContext {
	values: ICoffeCart[]
	updateCart: (coffe: ICoffeCart) => void
	removeProduct: (id: number) => void
	increaseCoffe:(id: number) => void
	decreaseCoffe:(id: number) => void
}

const CartContext = createContext<ICartContext>({} as ICartContext)

export const useCartContext = () => useContext(CartContext)

interface ICartContextProviderProps {
	children: React.ReactNode
}

const CartContextProvider: React.FC<ICartContextProviderProps> = ({ children }) => {
	const [cart, dispatch] = useReducer(CartReducer, [])

	const updateCart = (coffe: ICoffeCart) => {
		dispatch(updateCartAction(coffe))
		
		toast.success(
			`Cafe "${coffe.name}" adicionado ao carrinho.`,
			{
				autoClose: 2000,
				theme: 'colored'
			}
		)
	}

	const increaseCoffe = (coffeId: number) => dispatch(increaseCoffeQtdAction(coffeId))

	const decreaseCoffe = (coffeId: number) => dispatch(decreaseCoffeQtdAction(coffeId))

	const removeProduct = (id: number) => dispatch(removeProductAction(id))

	return (
		<CartContext.Provider value={{
			values: cart,
			updateCart,
			removeProduct,
			increaseCoffe,
			decreaseCoffe
		}}>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider