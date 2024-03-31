import Navbar from "../../components/navbar"
import PageWrapper from "../../components/ui/pageWrapper"
import HeroSection from "./heroSection"

const ShopPage: React.FC = () => {
	return (
		<PageWrapper>
			<Navbar />
			<HeroSection />
		</PageWrapper>
	)
}

export default ShopPage