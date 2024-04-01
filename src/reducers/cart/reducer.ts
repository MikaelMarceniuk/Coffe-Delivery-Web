import { produce } from "immer"
import ICoffeCart from "../../interface/ICoffeCart"
import { ActionTypes, DecreaseCoffeQtdActionType, IncreaseCoffeActionType, RemoveProductQtdActionType, UpdateCartActionType } from "./actions"
import { toast } from "react-toastify"

export type ReducerActions =
	IncreaseCoffeActionType |
	DecreaseCoffeQtdActionType |
	UpdateCartActionType |
	RemoveProductQtdActionType

const CartReducer = (state: ICoffeCart[], action: ReducerActions): ICoffeCart[] => {
	switch(action.type) {
		case ActionTypes.INCREASE_COFFE_QTD: {
			const productInCartIndex = state.findIndex(p => p.id == action.payload.id)
			if(productInCartIndex < 0) {
				toast.error('O café nao existe.')
				return state
			}
	
			return produce(state, draft => {
				draft[productInCartIndex].qtd++
			})
		}

		case ActionTypes.DECREASE_COFFE_QTD: {
			const productInCartIndex = state.findIndex(p => p.id == action.payload.id)
			if(productInCartIndex < 0) {
				toast.error('O café nao existe.')
				return state
			}
	
			return produce(state, draft => {
				draft[productInCartIndex].qtd--
			})
		}

		case ActionTypes.UPDATE_CART: {
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

		case ActionTypes.REMOVE_PRODUCT: {
			const productInCartIndex = state.findIndex(p => p.id == action.payload.id)
			if(productInCartIndex == -1) return state
	
			const newState = [...state]
			newState.splice(productInCartIndex, 1)
	
			return newState
		}

		default:
			return state
	}
}

export default CartReducer