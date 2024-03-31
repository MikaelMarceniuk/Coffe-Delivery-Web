interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: keyof typeof variants
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	content: React.ReactNode
}

const variants = {
	yellowLight: 'bg-yellowLight text-yellowDark',
	purple: 'bg-purpleLight text-purpleDark',
	buy: 'bg-purpleDark text-white'
}

const Button: React.FC<IButtonProps> = ({ variant, className = '', leftIcon, rightIcon, content, ...btnProps }) => {
	return (
		<button
			className={`w-fit h-10 p-2 flex items-center justify-center gap-1 rounded-md font-roboto text-sm ${variants[variant]} ${className}`}
			{...btnProps}
		>
			{leftIcon}
			{content}
			{rightIcon}
		</button>
	)
}

export default Button