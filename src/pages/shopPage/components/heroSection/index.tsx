import BaseContentWrapper from "../../../../components/ui/baseContentWrapper"
import { Clock, Coffee, Package, ShoppingCartSimple } from "@phosphor-icons/react"
import ListItem from "../listItem"

import BigCoffe from '../../../../assets/big-coffe.svg'

const HeroSection: React.FC = () => {
	return (
		<div className='h-[544px] flex items-center'>
			<BaseContentWrapper className='flex'>
				<div className='w-[588px] flex flex-col gap-4'>
					<h1 className='font-baloo2 font-extrabold text-5xl text-baseTitle'>Encontre o café perfeito para qualquer hora do dia</h1>
					<span className='font-roboto font-normal text-xl text-baseSubtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
					<div className='mt-[50px] flex gap-x-10'>
						<ul className='flex flex-col gap-y-5'>
							<ListItem
								variant="yellowDark"
								icon={<ShoppingCartSimple size={16} weight="fill" />}
								text="Compra simples e segura"
							/>
							<ListItem
								variant="yellow"
								icon={<Clock size={16} weight="fill" />}
								text="Entrega rápida e rastreada"
							/>
						</ul>
						<ul className='flex flex-col gap-y-5'>
							<ListItem
								variant="dark"
								icon={<Package size={16} weight="fill" />}
								text="Embalagem mantém o café intacto"
								/>
							<ListItem
								variant="purple"
								icon={<Coffee size={16} weight="fill" />}
								text="O café chega fresquinho até você"
							/>
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