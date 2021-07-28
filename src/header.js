import React, { useState } from 'react'

const Nav = () => {
	return (
		<nav>
			<ul className={'flex'}>
				{
					[{ display: 'In Case of Emergency', href: '/in-case-of-emergency' }, { display: 'Who We Are', href: '/who-we-are' }, { display: 'Training & Resources', href: '/training-resources' }, { display: 'Donate', href: '/donate' }].map(headerItem => {
						return <li key={headerItem.display} className="header-nav-item"><a href={`${headerItem.href}`}>{headerItem.display}</a></li>
					})
				}
			</ul>
		</nav>
	)
}

const calcTotalElemHeight = (elem) => {
	if (!elem) return ''
	const contentPlusPadding = elem.clientHeight
	const style = getComputedStyle(elem)

	const marginTop = parseInt(style.marginTop)
	const marginBottom = parseInt(style.marginBottom)
	const borderTopWidth = parseInt(style.borderTopWidth) || 0
	const borderBottomWidth = parseInt(style.borderBottomWidth) || 0

	return contentPlusPadding + marginTop + marginBottom + borderTopWidth + borderBottomWidth
}

const CurtainMenu = ({ open, setOpen }) => {
	return (
		<div id={'curtain'} style={{ top: calcTotalElemHeight(document.getElementById('alert-banner')) }} className={`flex ${open ? 'open' : ''}`}>
			<Nav />
		</div>
	)
}

const Header = () => {
	const SMALL_DISPLAY_WIDTH = 475
	const [open, setOpen] = useState(false)
	const [isSmallDisplay, setIsSmallDisplay] = useState(window.innerWidth < SMALL_DISPLAY_WIDTH)

	window.addEventListener('resize', () => {
		if (window.innerWidth > SMALL_DISPLAY_WIDTH && isSmallDisplay) {
			setIsSmallDisplay(false)
			setOpen(false)
		} else if (window.innerWidth < SMALL_DISPLAY_WIDTH && !isSmallDisplay) {
			setIsSmallDisplay(true)
		}
	})

	return (
		<>
			<div id={'alert-banner'}>
				<p>We are hard at work getting ready to launch in the community. Stay tuned for more information!</p>
				<div className={'button contained white uppercase'} style={{ whiteSpace: 'nowrap' }}>Support Us</div>
			</div>
			<div id={'header'} className={`flex flex-row align-center ${open ? 'open' : ''}`}>
			{isSmallDisplay &&
				<>
					<div id={'hamburger'} className={`${open ? 'open' : ''}`} onClick={e => {
						setOpen(prev => !prev)
					}}>...</div>
					<CurtainMenu open={open} setOpen={setOpen} />
				</>
			}
				<div id={'header-content'} className={`flex flex-row align-center`}>
					<a className={'flex flex-row align-center normalized-a'} href="/">
						<img src="/assets/hatzalah-logo-transparent.png" style={{ width: '40px', height: '40px' }} alt={'hatzalah-wol-logo'}/>
						{!isSmallDisplay && <div>Hatzalah of West Orange and Livingston</div>}
					</a>
					{!isSmallDisplay && <Nav />}
				</div>
			</div>
		</>
	)
}

export default Header
