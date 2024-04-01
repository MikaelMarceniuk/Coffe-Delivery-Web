interface IInputProps  {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
	containerProps?: React.HTMLAttributes<HTMLDivElement>
	isOptional?: boolean
}

const Input: React.FC<IInputProps> = ({ isOptional = false, inputProps, containerProps}) => {
	return (
		<div
			className='w-fit flex relative rounded-md bg-baseInput'
			{...containerProps}
		>
			<input
				className='p-3 flex-1 bg-transparent placeholder:text-baseLabel text-baseText text-sm'
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