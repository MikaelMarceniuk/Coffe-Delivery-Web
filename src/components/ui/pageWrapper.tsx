interface IPageWrapperProps {
	children: React.ReactNode
}

const PageWrapper: React.FC<IPageWrapperProps> = ({children}) => {
	return (
		<div className="min-h-screen bg-background">
			{children}
		</div>
	)
}

export default PageWrapper