interface IListItemProps {
	text: string
	variant: keyof typeof variants
	icon: React.ReactNode
}

const variants = {
	yellowDark: 'bg-yellowDark',
	yellow: 'bg-yellow',
	dark: 'bg-baseText',
	purple: 'bg-purple'
}

const ListItem: React.FC<IListItemProps> = ({ text, variant, icon }) => {
	return (
		<li className='flex items-center gap-3'>
			<div className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${variants[variant]}`}>
				{icon}
			</div>
			<span className="text-base text-baseText">{text}</span>
		</li>
	)
}

export default ListItem