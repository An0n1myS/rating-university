import { FC, PropsWithChildren } from "react"
import Footer from "src/components/Footer"
import Header from "src/components/Header"

export const Layout: FC<PropsWithChildren> = ({
	children
}) => {
	return (
		<div className="react-root">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
