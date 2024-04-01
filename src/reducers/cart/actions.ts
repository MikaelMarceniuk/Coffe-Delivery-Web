import ICoffeCart from "../../interface/ICoffeCart"

export enum ActionTypes {
	UPDATE_CART = 'UPDATE_CART',
	REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

export const updateCartAction = (coffe: ICoffeCart) => {
	return {
		type: ActionTypes.UPDATE_CART,
		payload: {
			product: coffe
		}
	}
}

export const removeProductAction = (coffeId: number) => {
	return {
		type: ActionTypes.REMOVE_PRODUCT,
		payload: {
			id: coffeId
		}
	}
}