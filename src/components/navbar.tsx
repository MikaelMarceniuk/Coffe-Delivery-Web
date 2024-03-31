import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import logoSvg from '../assets/Logo.svg'
import Button from './ui/button'

const Navbar: React.FC = () => {
	return (
		<div className='h-28 flex items-center'>
			<div className='mr-40 ml-40 flex flex-1 items-center justify-between'>
				<div>
					<img src={logoSvg} />
				</div>

				<div className='flex items-center gap-3'>
					<Button
						variant='purple'
						leftIcon={<MapPin size={22} weight="fill" />}
						content='Ribeirao Preto, SP'
					/>
					<Button
						variant='yellowLight'
						content={<ShoppingCartSimple size={22} weight="fill" />}
					/>
				</div>
			</div>
		</div>
	)
}

export default Navbar