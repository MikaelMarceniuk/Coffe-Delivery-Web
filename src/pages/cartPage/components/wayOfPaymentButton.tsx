interface IWayOfPaymentButtonProps {
	text: string
	icon: React.ReactNode
	handlerOnSelected: (value: string) => void
	isSelected: boolean
}

const cssWhenSelected = 'border-purple bg-purpleLight'

const WayOfPaymentButton: React.FC<IWayOfPaymentButtonProps> = ({ text, icon, handlerOnSelected, isSelected = false }) => {
	return (
		<button
			onClick={() => handlerOnSelected(text)}
			className={`w-44 h-14 px-[15px] flex items-center justify-start gap-3 rounded-md border bg-baseButton hover:bg-baseHover uppercase ${isSelected ? cssWhenSelected : ''}`}
		>
			<div className='text-purple'>
				{icon}
			</div>
			<div className='text-baseText text-xs'>
				{text}
			</div>
		</button>
	)
}

export default WayOfPaymentButton