import { useFormContext } from "react-hook-form"
import { CheckoutFormSchemaType } from "../../.."

interface IInputProps  {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
	containerProps?: React.HTMLAttributes<HTMLDivElement>
	isOptional?: boolean
}

const Input: React.FC<IInputProps> = ({
	isOptional = false,
	inputProps,
	containerProps
}) => {
	const { formState: { errors } } = useFormContext<CheckoutFormSchemaType>()
	const isThereErrors = errors[inputProps?.name]

	return (
		<div
			className={`w-fit flex relative rounded-md bg-baseInput border ${isThereErrors ? 'border-yellowDark' : ''}`}
			{...containerProps}
		>
			<input
				className='w-full p-3 flex-1 bg-transparent placeholder:text-baseLabel text-baseText text-sm'
				{...inputProps}
			/>
			
			{isOptional && 
				<div className='p-3 flex items-center justify-center text-baseLabel text-xs italic border-none'>
					<span>Opcional</span>
				</div>
			}
		</div>
	)
}

export default Input