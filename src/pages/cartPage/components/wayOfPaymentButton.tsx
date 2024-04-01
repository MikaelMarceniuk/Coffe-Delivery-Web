import * as RadioGroup from '@radix-ui/react-radio-group';

interface IWayOfPaymentButtonProps {
	value: string
	text: string
	icon: React.ReactNode
}

const WayOfPaymentButton: React.FC<IWayOfPaymentButtonProps> = ({ value, text, icon }) => {
	return (
		<RadioGroup.Item
			value={value}
			asChild
		>
			<div
				className={`w-44 h-14 px-[15px] flex items-center justify-start gap-3 rounded-md border bg-baseButton hover:bg-baseHover uppercase data-[state=checked]:border-purple data-[state=checked]:bg-purpleLight cursor-pointer`}
			>
				<div className='text-purple'>
					{icon}
				</div>
				<div className='text-baseText text-xs'>
					{text}
				</div>
			</div>
		</RadioGroup.Item>
	)
}

export default WayOfPaymentButton