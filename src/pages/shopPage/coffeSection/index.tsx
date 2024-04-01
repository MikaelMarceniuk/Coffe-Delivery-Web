import BaseContentWrapper from "../../../components/ui/baseContentWrapper"
import CoffesData from "../../../data/coffes"
import CoffeListItem from "./listItem"

const CoffeSection: React.FC = () => {
	return (
		<section>
			<BaseContentWrapper>
				<h2 className='pb-8 font-baloo2 font-extrabold text-3xl text-baseSubtitle'>Nossos cafés</h2>
				<ul className='flex flex-wrap gap-8'>
					{CoffesData.map((coffe) => <CoffeListItem key={coffe.id} {...coffe} />)}
				</ul>
			</BaseContentWrapper>
		</section>
	)
}

export default CoffeSection