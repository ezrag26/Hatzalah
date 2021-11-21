import React from 'react'

const NavItem = ({ href, display }) => {
	const baseUrl = document.querySelector('base')?.href
	const path = window.location.href.replace(baseUrl, '')
	const currentPage = path.replaceAll('/', '') === href
	return <li className={`header-nav-item ${!currentPage ? 'fade' : ''}`}><a href={href}>{display}</a></li>
}

const Nav = ({ margin, items = {} }) => {
	return (
		<nav style={{ marginTop: margin }}>
			<ul className={'flex'}>
				{
					Object.values(items).map(headerItem => {
						return <NavItem key={headerItem.title} href={headerItem.url} display={headerItem.title}/>
					})
				}
			</ul>
		</nav>
	)
}

export default Nav
