import { MapPinLine } from "@phosphor-icons/react"

const AdressCard = () => {
	return (
		<div className='p-10 bg-baseCard rounded-md'>
			<div className='flex gap-2'>
				<div className='text-yellowDark'>
					<MapPinLine size={22} />
				</div>
				<div className='flex flex-col'>
					<span className='text-baseSubtitle'>Endereço de Entrega</span>
					<span className='text-baseText text-sm'>Informe o endereço onde deseja receber seu pedido</span>
				</div>
			</div>
		</div>
	)
}

export default AdressCard