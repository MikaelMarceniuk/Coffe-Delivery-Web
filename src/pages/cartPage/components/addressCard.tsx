import { MapPinLine } from "@phosphor-icons/react"
import Input from "./input"

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
			<form className='mt-8 flex flex-col gap-4'>
				<Input
					containerProps={{
						style: { width: '200px' }
					}}
					inputProps={{ placeholder: 'CEP' }}
				/>
				<Input
					containerProps={{
						style: { width: '100%' }
					}}
					inputProps={{ placeholder: 'Rua' }}
				/>
				<div className='flex gap-3'>
					<Input
						containerProps={{
							style: { width: '200px' }
						}}
						inputProps={{ placeholder: 'Número' 	}}
					/>
					<Input
						containerProps={{
							style: { flex: 1 }
						}}
						inputProps={{ placeholder: 'Complemento' 	}}
						isOptional
					/>
				</div>
				<div className='flex gap-3'>
					<Input
						containerProps={{
							style: { width: '200px' }
						}}
						inputProps={{ placeholder: 'Bairro' 	}}
					/>
					<Input
						containerProps={{
							style: { width: '276px' }
						}}
						inputProps={{ placeholder: 'Cidade' 	}}
					/>
					<Input
						containerProps={{
							style: { width: '60px' }
						}}
						inputProps={{ placeholder: 'UF' 	}}
					/>
				</div>
			</form>
		</div>
	)
}

export default AdressCard