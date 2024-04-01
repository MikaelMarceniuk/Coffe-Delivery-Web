interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: keyof typeof variants
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	content: React.ReactNode
}

const variants = {
	yellow: 'bg-yellow hover:bg-yellowDark font-bold text-white hover:text-white uppercase transition-all',
	purple: 'bg-purpleLight hover:bg-purpleDark text-purpleDark hover:text-white transition-all',
	buyCoffe: 'bg-purpleDark hover:bg-purple text-white transition-all',
	removeCoffe: 'bg-baseButton text-baseText text-xs uppercase'
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