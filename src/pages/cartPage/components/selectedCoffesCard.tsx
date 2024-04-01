import { Trash } from "@phosphor-icons/react"
import CoffeQtdInput from "../../../components/coffeQtdInput"
import Button from "../../../components/ui/button"
import { useCartContext } from "../../../context/cartContext"
import { priceFormatter } from "../../../utils/formatter"

const SelectedCoffesCard = () => {
	const { values, decreaseCoffe, increaseCoffe, removeProduct } = useCartContext()

	const totalValue = values.reduce((acc, coffe) => acc += coffe.price, 0)

	return (
		<div className='p-5 bg-baseCard rounded-md rounded-tl-md rounded-br-md rounded-tr-card44px rounded-bl-card44px'>
			<ul>
				{values.map(coffe => (
					<li
						key={coffe.id}
						className='p-5 flex justify-between border-b border-baseButton'
					>
						<div className='min-w-16 min-h-16 mr-5 self-center'>
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
				))}
			</ul>

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

			<Button
				className='w-full mt-6 uppercase'
				variant='yellow'
				content='Confirmar pedido'
			/>
		</div>
	)
}

export default SelectedCoffesCard