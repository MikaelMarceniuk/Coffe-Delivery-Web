import Navbar from "../../components/navbar"
import PageWrapper from "../../components/ui/pageWrapper"
import BaseContentWrapper from "../../components/ui/baseContentWrapper"
import PaymentCard from "./components/paymentCard"
import AdressCard from "./components/addressCard"
import SelectedCoffesCard from "./components/selectedCoffesCard"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCartContext } from "../../context/cartContext"
import { toast } from "react-toastify"
import { useEffect } from "react"

const checkoutFormSchema = z.object({
	zipCode: z.string().min(1),
	address: z.string().min(1),
	number: z.number().min(1),
	complement: z.string().optional(),
	neighborhood: z.string().min(1),
	city: z.string().min(1),
	state: z.string().min(1),
	wayOfPayment: z.enum(['CARTAO_CREDITO', 'CARTAO_DEBITO', 'DINHEIRO'])
}).required()

export type CheckoutFormSchemaType = z.infer<typeof checkoutFormSchema>

const CartPage: React.FC = () => {
	const { values } = useCartContext()
	const hookForm = useForm<CheckoutFormSchemaType>({
		resolver: zodResolver(checkoutFormSchema)
	})

	const {
		handleSubmit,
		formState : { isSubmitSuccessful, errors }
	} = hookForm

	useEffect(() => {
		if(isSubmitSuccessful)
			hookForm.reset()
	}, [hookForm, isSubmitSuccessful])

	useEffect(() => {
		if(errors['wayOfPayment']) {
			toast.error(
				'Método de pagamento obrigatório.',
				{
					theme: 'colored'
				}
			)
		}
	}, [errors])

	const handleOnSubmit = (data: CheckoutFormSchemaType) => {
		if(values.length == 0) {
			toast.error(
				'Insira algum produto no carrinho para continuar com a compra.',
				{
					theme: 'colored'
				}
			)
			throw new Error('Insira algum produto no carrinho para continuar com a compra.')
		}
	}

	return (
		<PageWrapper>
			<Navbar />
			<BaseContentWrapper>
				<FormProvider {...hookForm}>
					<form className='flex gap-8' onSubmit={handleSubmit(handleOnSubmit)}>
						<section className='w-[58%] flex flex-col'>
							<h2 className='mb-3'>Complete seu pedido</h2>
							<AdressCard />
							<PaymentCard />
						</section>

						<section className='w-[448px]'>
							<h2 className='mb-3'>Cafés selecionados</h2>
							<SelectedCoffesCard />
						</section>
					</form>
				</FormProvider>
			</BaseContentWrapper>
		</PageWrapper>
	)
}

export default CartPage