import * as RadioGroup from '@radix-ui/react-radio-group';
import IPaymentOption from '../../../../../interface/IPaymentOption';
import { CreditCard, Bank, Money } from '@phosphor-icons/react';

const iconSize = 16

const WayOfPaymentButton: React.FC<IPaymentOption> = (paymentOption) => {
	const getPaymentOptionIcon = () => {
		switch(paymentOption.value) {
			case 'CARTAO_CREDITO':
				return <CreditCard size={iconSize} />

			case 'CARTAO_DEBITO':
				return <Bank size={iconSize} />

			case 'DINHEIRO':
				return <Money size={iconSize} />
		}
	}

	return (
		<RadioGroup.Item
			value={paymentOption.value}
			asChild
		>
			<div
				className={`w-44 h-14 px-[15px] flex items-center justify-start gap-3 rounded-md border bg-baseButton hover:bg-baseHover uppercase data-[state=checked]:border-purple data-[state=checked]:bg-purpleLight cursor-pointer`}
			>
				<div className='text-purple'>
					{getPaymentOptionIcon()}
				</div>
				<div className='text-baseText text-xs'>
					{paymentOption.text}
				</div>
			</div>
		</RadioGroup.Item>
	)
}

export default WayOfPaymentButton