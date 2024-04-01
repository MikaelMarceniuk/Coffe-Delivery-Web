import Navbar from "../../components/navbar"
import PageWrapper from "../../components/ui/pageWrapper"
import BaseContentWrapper from "../../components/ui/baseContentWrapper"
import PaymentCard from "./components/paymentCard"
import AdressCard from "./components/addressCard"
import SelectedCoffesCard from "./components/selectedCoffesCard"

const CartPage: React.FC = () => {
	return (
		<PageWrapper>
			<Navbar />
			<BaseContentWrapper className='flex gap-8'>
				<section className='w-[58%] flex flex-col'>
					<h2 className='mb-3'>Complete seu pedido</h2>
					<AdressCard />
					<PaymentCard />
				</section>

				<section className='w-[448px]'>
					<h2 className='mb-3'>Cafés selecionados</h2>
					<SelectedCoffesCard />
				</section>
			</BaseContentWrapper>
		</PageWrapper>
	)
}

export default CartPage