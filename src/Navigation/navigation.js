import React from 'react'

const NavItem = ({ href, display }) => {
	const baseUrl = document.querySelector('base')?.href
	const path = window.location.href.replace(baseUrl, '')
	const currentPage = path.replaceAll('/', '') === href
	return <li className={`header-nav-item ${!currentPage ? 'fade' : ''}`}><a href={href}>{display}</a></li>
}

const Nav = ({ style = {}, id, className, horizontal = false, items = {} }) => {
	return (
		<nav id={id} className={className} style={style}>
			<ul className={'flex'} style={{ flexDirection: horizontal ? 'row' : 'column' }}>
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
