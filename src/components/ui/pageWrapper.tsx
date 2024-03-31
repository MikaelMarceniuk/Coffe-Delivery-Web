interface IPageWrapperProps {
	children: React.ReactNode
}

const PageWrapper: React.FC<IPageWrapperProps> = ({children}) => {
	return (
		<main className="min-h-screen bg-background">
			{children}
		</main>
	)
}

export default PageWrapper