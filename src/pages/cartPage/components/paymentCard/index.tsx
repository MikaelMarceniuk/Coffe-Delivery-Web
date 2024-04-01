import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react"
import WayOfPaymentButton from "./components/wayOfPaymentButton"
import * as RadioGroup from '@radix-ui/react-radio-group';

const PaymentCard = () => {
	return (
		<div className='p-10 bg-baseCard rounded-md '>
			<div className='flex flex-col gap-8'>
				<div className='flex gap-2'>
					<div className='text-purple'>
						<CurrencyDollar size={22} />
					</div>
					<div className='flex flex-col'>
						<span className='text-baseSubtitle'>Pagamento</span>
						<span className='text-baseText text-sm'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
					</div>
				</div>
				<RadioGroup.Root className='flex gap-3'>
					<WayOfPaymentButton
						value='Cartão de crédito'
						text="Cartão de crédito"
						icon={<CreditCard size={16} />}
					/>
					<WayOfPaymentButton
						value='Cartão de débito'
						text="Cartão de débito"
						icon={<Bank size={16} />}
					/>
					<WayOfPaymentButton
						value='Dinheiro'
						text="Dinheiro"
						icon={<Money size={16} />}
					/>
				</RadioGroup.Root>
			</div>
		</div>
	)
}

export default PaymentCard