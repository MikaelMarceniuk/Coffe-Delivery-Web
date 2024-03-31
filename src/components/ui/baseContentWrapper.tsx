type IBaseContentWrapperProps = React.ButtonHTMLAttributes<HTMLDivElement>

const BaseContentWrapper: React.FC<IBaseContentWrapperProps> = ({ className, children,...divProps}) => {
	return (
		<div className={`mr-40 ml-40 ${className}`} {...divProps}>
			{children}
		</div>
	)
}

export default BaseContentWrapper