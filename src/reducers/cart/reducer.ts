import { produce } from "immer"
import ICoffeCart from "../../interface/ICoffeCart"
import { ActionTypes } from "./actions"

const CartReducer = (state: ICoffeCart[], action: any) => {
	if(action.type == ActionTypes.UPDATE_CART) {
		const productInCartIndex = state.findIndex(p => p.id == action.payload.product.id)

		if(productInCartIndex == -1) {
			return produce(state, draft => {
				draft.push(action.payload.product)
			})
		}

		return produce(state, draft => {
			draft[productInCartIndex].qtd += action.payload.product.qtd
		})
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