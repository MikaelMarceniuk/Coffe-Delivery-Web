import { useState } from "react"
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react"
import ICoffe from "../../../../interface/ICoffe"
import Button from "../../../../components/ui/button"
import { useCartContext } from "../../../../context/cartContext"

const CoffeListItem: React.FC<ICoffe> = (coffe) => {
	const [coffeQtd, setCoffeQtd] = useState(1)
	const { updateCart } = useCartContext()

	const incrementCoffeQtd = () => setCoffeQtd(state => state + 1)

	const decreaseCoffeQtd = () => setCoffeQtd(state => state - 1)

	const addCoffeToCard = () => updateCart({ ...coffe, qtd: coffeQtd })

	return (
		<div
			className='w-64 h-[310px] mt-5 pt-24 relative flex flex-col items-center text-center bg-baseCard rounded-tl-md rounded-br-md rounded-tr-card36px rounded-bl-card36px'
		>
			<img
				className='absolute -top-5'
				src={coffe.img}
				alt={coffe.name}
			/>

			<ul className='w-full pb-4 flex items-center justify-center gap-x-1'>
				{coffe.categories.map((category, i) => (
					<li
						key={i}
						className='w-fit pl-2 pr-2 pt-1 pb-1 rounded-full bg-yellowLight font-bold text-badge text-yellowDark uppercase'
					>
						{category}
					</li>
				))}
			</ul>

			<div className='px-6 flex flex-col gap-1 mb-8'>
				<h4 className='font-baloo2 font-bold text-xl text-baseSubtitle'>{coffe.name}</h4>
				<span className='text-sm text-baseLabel'>{coffe.description}</span>
			</div>

			<div className='px-6 flex w-full items-center justify-between'>
				<div>
					<span className='text-baseText text-sm'>R$ </span>
					<span className='font-extrabold text-baseText text-2xl'>{coffe.price}</span>
				</div>

				<div className='flex gap-2'>
					<div className='px-1 flex items-center gap-1 bg-baseButton rounded-md'>
						<Minus
							size={16}
							weight='bold'
							className='text-purple cursor-pointer'
							onClick={decreaseCoffeQtd}
						/>
						<input
							className='w-6 pl-1 bg-transparent text-baseTitle'
							type="number"
							min={1}
							max={99}
							value={coffeQtd}
							readOnly
						/>
						<Plus
							size={16}
							weight='bold'
							className='text-purple cursor-pointer'
							onClick={incrementCoffeQtd}
						/>
					</div>

					<Button
						variant='buy'
						content={<ShoppingCartSimple size={20} weight="fill" />}
						className='h-[38px]'
						onClick={addCoffeToCard}
					/>
				</div>
			</div>
		</div>
	)
}

export default CoffeListItem