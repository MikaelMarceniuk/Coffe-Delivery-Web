import Navbar from "../../components/navbar"
import PageWrapper from "../../components/ui/pageWrapper"
import BaseContentWrapper from "../../components/ui/baseContentWrapper"
import PaymentCard from "./components/paymentCard"
import AdressCard from "./components/addressCard"

const CartPage: React.FC = () => {
	return (
		<PageWrapper>
			<Navbar />
			<BaseContentWrapper className='flex gap-8'>
				<section className='w-[640px] flex flex-col gap-3'>
					<h2>Complete seu pedido</h2>
					<AdressCard />
					<PaymentCard />
				</section>

				<section className='w-[448px]'>
					<h2>Cafés selecionados</h2>
					<div className='bg-baseCard rounded-md'>
						<div className='p-10 bg-baseCard rounded-md'>
							
						</div>
					</div>
				</section>
			</BaseContentWrapper>
		</PageWrapper>
	)
}

export default CartPage