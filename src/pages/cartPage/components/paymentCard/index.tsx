import { CurrencyDollar } from "@phosphor-icons/react"
import WayOfPaymentButton from "./components/wayOfPaymentButton"
import * as RadioGroup from '@radix-ui/react-radio-group';
import PaymentOptions from "../../../../data/paymentOptions";
import { Controller, useFormContext } from "react-hook-form";
import { CheckoutFormSchemaType } from "../..";

const PaymentCard = () => {
	const { control } = useFormContext<CheckoutFormSchemaType>()

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
				<Controller
					control={control}
					name='wayOfPayment'
					render={({ field }) => (
						<RadioGroup.Root
							className='flex gap-3'
							onValueChange={field.onChange}
							value={field.value || null}
						>
							{PaymentOptions.map(paymentOption => <WayOfPaymentButton key={paymentOption.id} {...paymentOption} />)}
						</RadioGroup.Root>
					)}
				/>
			</div>
		</div>
	)
}

export default PaymentCard