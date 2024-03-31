import Navbar from "../../components/navbar"
import PageWrapper from "../../components/ui/pageWrapper"
import CoffeSection from "./coffeSection"
import HeroSection from "./heroSection"

const ShopPage: React.FC = () => {
	return (
		<PageWrapper>
			<Navbar />
			<HeroSection />
			<CoffeSection />
		</PageWrapper>
	)
}

export default ShopPage