import Navbar from "../../components/navbar"
import BaseContentWrapper from "../../components/ui/baseContentWrapper"
import PageWrapper from "../../components/ui/pageWrapper"
import CoffesData from "../../data/coffes"
import CoffeListItem from "./coffeListItem"
import HeroSection from "./heroSection"

const ShopPage: React.FC = () => {
	return (
		<PageWrapper>
			<Navbar />
			<HeroSection />
			<section>
				<BaseContentWrapper>
					<h2 className='pb-8 font-baloo2 font-extrabold text-3xl text-baseSubtitle'>Nossos cafés</h2>
					<ul className='flex flex-wrap gap-8'>
						{CoffesData.map((coffe, i) => <CoffeListItem key={i} {...coffe} />)}
					</ul>
				</BaseContentWrapper>
			</section>
		</PageWrapper>
	)
}

export default ShopPage