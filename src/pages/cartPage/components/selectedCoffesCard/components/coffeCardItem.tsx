import React from "react"
import CoffeQtdInput from "../../../../../components/coffeQtdInput"
import Button from "../../../../../components/ui/button"
import { priceFormatter } from "../../../../../utils/formatter"
import ICoffeCart from "../../../../../interface/ICoffeCart"
import { Trash } from "@phosphor-icons/react"
import { useCartContext } from "../../../../../context/cartContext"

const CoffeCardItem: React.FC<ICoffeCart> = (coffe) => {
	const { decreaseCoffe, increaseCoffe, removeProduct } = useCartContext()

	return (
		<li
			className='p-5 flex justify-between gap-5 border-b border-baseButton'
		>
			<div className='w-16 h-16 self-center'>
				<img src={coffe.img} />
			</div>

			<div>
				<span className='text-baseSubtitle'>{coffe.name}</span>
				<div className='mt-2 flex gap-2'>
					<CoffeQtdInput
						coffeQtdValue={coffe.qtd}
						handleDecreaseCoffeQtd={() => decreaseCoffe(coffe.id)}
						handleIncrementCoffeQtd={() => increaseCoffe(coffe.id)}
					/>
					<Button
						variant="removeCoffe"
						leftIcon={<Trash className='text-purple' size={16} weight="thin" />}
						content='Remover'
						onClick={() => removeProduct(coffe.id)}
					/>
				</div>
			</div>

			<span className='font-bold text-baseText'>{priceFormatter.format(coffe.price)}</span>
		</li>
	)
}

export default CoffeCardItem