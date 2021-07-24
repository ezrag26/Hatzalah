import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Footer from './footer'

const App = () => {
	return (
		<>
			<Header />
			<Footer />
		</>
	)
}

ReactDOM.render(<Header />, document.querySelector('header'))
ReactDOM.render(<Footer />, document.querySelector('footer'))
