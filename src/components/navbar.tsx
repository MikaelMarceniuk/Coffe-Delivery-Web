import { MapPin } from '@phosphor-icons/react'
import logoSvg from '../assets/Logo.svg'
import Button from './ui/button'
import BaseContentWrapper from './ui/baseContentWrapper'
import CartButton from './cartButton'
import { Link, useNavigate } from 'react-router-dom'

const Navbar: React.FC = () => {
	const navigate = useNavigate()

	const goToCartPage = () => navigate('/cart')

	return (
		<div className='h-28 flex items-center'>
			<BaseContentWrapper className='flex flex-1 items-center justify-between'>
				<Link to='/'>
					<img src={logoSvg} />
				</Link>

				<div className='flex items-center gap-3'>
					<Button
						variant='purple'
						leftIcon={<MapPin size={22} weight="fill" />}
						content='Ribeirao Preto, SP'
					/>
					<CartButton onClick={goToCartPage} />
				</div>
			</BaseContentWrapper>
		</div>
	)
}

export default Navbar