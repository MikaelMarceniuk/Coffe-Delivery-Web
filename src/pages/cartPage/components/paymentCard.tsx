import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react"
import WayOfPaymentButton from "./wayOfPaymentButton"

const PaymentCard = () => {
	const handleOnWayOfPaymentIsSelected = (value: string) => {
		console.log(`Payment "${value}" selected.`)
	}

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
				<div className='flex gap-3'>
					<WayOfPaymentButton
						text="Cartão de crédito"
						icon={<CreditCard size={16} />}
						handlerOnSelected={handleOnWayOfPaymentIsSelected}
						isSelected={false}
					/>
					<WayOfPaymentButton
						text="Cartão de débito"
						icon={<Bank size={16} />}
						handlerOnSelected={handleOnWayOfPaymentIsSelected}
						isSelected={false}
					/>
					<WayOfPaymentButton
						text="Dinheiro"
						icon={<Money size={16} />}
						handlerOnSelected={handleOnWayOfPaymentIsSelected}
						isSelected={true}
					/>
				</div>
			</div>
		</div>
	)
}

export default PaymentCard