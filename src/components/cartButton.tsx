import { ShoppingCartSimple } from "@phosphor-icons/react"
import { useCartContext } from "../context/cartContext"

const CartButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...btnProps }) => {
	const { values } = useCartContext()

	return (
		<button
			className='w-fit h-10 p-2 relative flex items-center justify-center gap-1 rounded-md bg-yellowLight text-yellowDark font-roboto text-sm'
			{...btnProps}
		>
			<ShoppingCartSimple size={22} weight="fill" />

			{values.length > 0 &&
				<div className='w-5 h-5 absolute -top-[6px] -right-[10px] flex items-center justify-center bg-yellowDark rounded-full font-bold text-xs text-white'>
					{values.length}
				</div>
			}
		</button>
	)
}

export default CartButton