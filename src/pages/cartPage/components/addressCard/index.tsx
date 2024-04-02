import { MapPinLine } from "@phosphor-icons/react"
import Input from "./components/input"
import { useFormContext } from "react-hook-form"
import { CheckoutFormSchemaType } from "../.."

const AdressCard = () => {
	const { register } = useFormContext<CheckoutFormSchemaType>()

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
			<div className='mt-8 flex flex-col gap-4'>
				<Input
					containerProps={{
						style: { width: '200px' }
					}}
					inputProps={{ placeholder: 'CEP', ...register('zipCode') }}
				/>
				<Input
					containerProps={{
						style: { width: '100%' }
					}}
					inputProps={{ placeholder: 'Rua', ...register('address') }}
				/>
				<div className='flex gap-3'>
					<Input
						containerProps={{
							style: { width: '200px' }
						}}
						inputProps={{ placeholder: 'Número', ...register('number', { valueAsNumber: true }) }}
					/>
					<Input
						containerProps={{
							style: { flex: 1 }
						}}
						inputProps={{ placeholder: 'Complemento', ...register('complement') }}
						isOptional
					/>
				</div>
				<div className='flex gap-3'>
					<Input
						containerProps={{
							style: { width: '200px' }
						}}
						inputProps={{ placeholder: 'Bairro', ...register('neighborhood') }}
					/>
					<Input
						containerProps={{
							style: { width: '276px' }
						}}
						inputProps={{ placeholder: 'Cidade', ...register('city') }}
					/>
					<Input
						containerProps={{
							style: { width: '60px' }
						}}
						inputProps={{
							placeholder: 'UF',
							...register('state')
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default AdressCard