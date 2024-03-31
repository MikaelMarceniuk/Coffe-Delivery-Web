import BaseContentWrapper from "../../../components/ui/baseContentWrapper"
import { Clock, Coffee, Package, ShoppingCartSimple } from "@phosphor-icons/react"

import BigCoffe from '../../../assets/big-coffe.svg'

const HeroSection: React.FC = () => {
	return (
		<div className='h-[544px] flex items-center bg-hero-background'>
			<BaseContentWrapper className='flex'>
				<div className='w-[588px] flex flex-col gap-4'>
					<h1 className='font-baloo2 font-extrabold text-5xl text-baseTitle'>Encontre o café perfeito para qualquer hora do dia</h1>
					<span className='font-roboto font-normal text-xl text-baseSubtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
					<div className='mt-[50px] flex gap-x-10'>
						<ul className='flex flex-col gap-y-5'>
							<li className='flex items-center gap-3'>
								<div className='w-8 h-8 flex items-center justify-center bg-yellowDark rounded-full text-white'>
									<ShoppingCartSimple size={16} weight="fill" />
								</div>
								<span className="text-base text-baseText">Compra simples e segura</span>
							</li>
							<li className='flex items-center gap-3'>
								<div className='w-8 h-8 flex items-center justify-center bg-yellow rounded-full text-white'>
									<Clock size={16} weight="fill" />
								</div>
								<span className="text-base text-baseText">Entrega rápida e rastreada</span>
							</li>
						</ul>
						<ul className='flex flex-col gap-y-5'>
							<li className='flex items-center gap-3'>
								<div className='w-8 h-8 flex items-center justify-center bg-baseText rounded-full text-white'>
									<Package size={16} weight="fill" />
								</div>
								<span className="text-base text-baseText">Embalagem mantém o café intacto</span>
							</li>
							<li className='flex items-center gap-3'>
								<div className='w-8 h-8 flex items-center justify-center bg-purple rounded-full text-white'>
									<Coffee size={16} weight="fill" />
								</div>
								<span className="text-base text-baseText">O café chega fresquinho até você</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='max-w-[476px]'>
					<img src={BigCoffe} />
				</div>
			</BaseContentWrapper>
		</div>
	)
}

export default HeroSection