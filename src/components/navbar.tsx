import { MapPin } from '@phosphor-icons/react'
import logoSvg from '../assets/Logo.svg'
import Button from './ui/button'
import BaseContentWrapper from './ui/baseContentWrapper'
import CartButton from './cartButton'

const Navbar: React.FC = () => {
	return (
		<div className='h-28 flex items-center'>
			<BaseContentWrapper className='flex flex-1 items-center justify-between'>
				<div>
					<img src={logoSvg} />
				</div>

				<div className='flex items-center gap-3'>
					<Button
						variant='purple'
						leftIcon={<MapPin size={22} weight="fill" />}
						content='Ribeirao Preto, SP'
					/>
					<CartButton />
				</div>
			</BaseContentWrapper>
		</div>
	)
}

export default Navbar