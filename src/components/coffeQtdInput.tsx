import { Minus, Plus } from "@phosphor-icons/react"

interface ICoffeQtdInputProps {
	handleIncrementCoffeQtd: () => void
	handleDecreaseCoffeQtd: () => void
	coffeQtdValue: number
}

const CoffeQtdInput: React.FC<ICoffeQtdInputProps> = ({
	handleDecreaseCoffeQtd,
	handleIncrementCoffeQtd,
	coffeQtdValue
}) => {
	return (
		<div className='px-1 flex items-center gap-1 bg-baseButton rounded-md'>
			<Minus
				size={16}
				weight='bold'
				className='text-purple cursor-pointer'
				onClick={handleDecreaseCoffeQtd}
			/>
			<input
				className='w-6 pl-1 bg-transparent text-baseTitle'
				type="number"
				min={1}
				max={99}
				value={coffeQtdValue}
				readOnly
			/>
			<Plus
				size={16}
				weight='bold'
				className='text-purple cursor-pointer'
				onClick={handleIncrementCoffeQtd}
			/>
		</div>
	)
}

export default CoffeQtdInput