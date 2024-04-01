import { useCartContext } from "../../../../../context/cartContext"
import { priceFormatter } from "../../../../../utils/formatter"

const TotalSection = () => {
	const { values } = useCartContext()

	const totalValue = values.reduce((acc, coffe) => acc += coffe.price, 0)

	return (
		<div className='mt-6 flex flex-col gap-1'>
			<div className='flex items-center justify-between text-baseText'>
				<span className='text-sm'>Total de itens</span>
				<span>{priceFormatter.format(totalValue)}</span>
			</div>
			<div className='flex items-center justify-between text-baseText'>
				<span className='text-sm'>Entrega</span>
				<span>{priceFormatter.format(3.50)}</span>
			</div>
			<div className='flex items-center justify-between font-bold text-xl text-baseSubtitle'>
				<span>Total</span>
				<span>{priceFormatter.format(totalValue + 3.50)}</span>
			</div>
		</div>
	)
}

export default TotalSection