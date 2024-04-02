import Button from "../../../../components/ui/button"
import { useCartContext } from "../../../../context/cartContext"
import CoffeCardItem from "./components/coffeCardItem"
import TotalSection from "./components/totalSection"

const SelectedCoffesCard = () => {
	const { values } = useCartContext()

	return (
		<div className='p-5 bg-baseCard rounded-md rounded-tl-md rounded-br-md rounded-tr-card44px rounded-bl-card44px'>
			<ul>
				{values.map(coffe => <CoffeCardItem key={coffe.id} {...coffe} />)}
			</ul>

			<TotalSection />

			<Button
				className='w-full mt-6 uppercase'
				variant='yellow'
				content='Confirmar pedido'
				type='submit'
			/>
		</div>
	)
}

export default SelectedCoffesCard