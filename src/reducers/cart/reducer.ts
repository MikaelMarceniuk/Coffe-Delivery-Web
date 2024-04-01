import ICoffeCart from "../../interface/ICoffeCart"
import { ActionTypes } from "./actions"

const CartReducer = (state: ICoffeCart[], action: any) => {
	if(action.type == ActionTypes.UPDATE_CART) {
		const newState = [...state]
		const productInCartIndex = newState.findIndex(p => p.id == action.payload.product.id)
		if(productInCartIndex == -1) {
			newState.push(action.payload.product)
			return newState
		}

		newState[productInCartIndex] = action.payload.product
		return newState
	}

	if(action.type == ActionTypes.REMOVE_PRODUCT) {
		const productInCartIndex = state.findIndex(p => p.id == action.payload.product.id)
		if(productInCartIndex == -1) return state

		const newState = [...state]
		newState.splice(productInCartIndex, 1)

		return newState
	}

	return state
}

export default CartReducer