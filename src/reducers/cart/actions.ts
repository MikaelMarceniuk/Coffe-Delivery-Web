import ICoffeCart from "../../interface/ICoffeCart"

export enum ActionTypes {
	INCREASE_COFFE_QTD = 'INCREASE_COFFE_QTD',
	DECREASE_COFFE_QTD = 'DECREASE_COFFE_QTD',
	UPDATE_CART = 'UPDATE_CART',
	REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

export type IncreaseCoffeActionType = {
	type: ActionTypes.INCREASE_COFFE_QTD,
	payload: {
		id: number
	}
}

export const increaseCoffeQtdAction = (coffeId: number): IncreaseCoffeActionType => {
	return {
		type: ActionTypes.INCREASE_COFFE_QTD,
		payload: {
			id: coffeId
		}
	}
}

export type DecreaseCoffeQtdActionType = {
	type: ActionTypes.DECREASE_COFFE_QTD,
	payload: {
		id: number
	}
}

export const decreaseCoffeQtdAction = (coffeId: number): DecreaseCoffeQtdActionType => {
	return {
		type: ActionTypes.DECREASE_COFFE_QTD,
		payload: {
			id: coffeId
		}
	}
}

export type UpdateCartActionType = {
	type: ActionTypes.UPDATE_CART,
	payload: {
		product: ICoffeCart
	}
}

export const updateCartAction = (coffe: ICoffeCart): UpdateCartActionType => {
	return {
		type: ActionTypes.UPDATE_CART,
		payload: {
			product: coffe
		}
	}
}

export type RemoveProductQtdActionType = {
	type: ActionTypes.REMOVE_PRODUCT,
	payload: {
		id: number
	}
}

export const removeProductAction = (coffeId: number): RemoveProductQtdActionType => {
	return {
		type: ActionTypes.REMOVE_PRODUCT,
		payload: {
			id: coffeId
		}
	}
}