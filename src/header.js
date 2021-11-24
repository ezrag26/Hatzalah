import React, { useState, useEffect } from 'react'

import Nav from './Navigation/navigation'
import { pages } from './Navigation/pages'
import { useWindowInnerWidth, useSmallDisplay } from './hooks/hooks'

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
		<div id={'curtain'} style={{ top: 0 }} className={`flex ${open ? 'open' : ''}`}>
			<Nav style={{ marginTop: calcTotalElemHeight(document.getElementById('header__main')) }} items={pages}/>
		</div>
	)
}

const Hamburger = ({ open, toggle }) => {
	return (
		<div id="hamburger" onClick={toggle}>
			<div id="bar__top" className={`bar ${open ? 'collapse' : 'delay'}`}></div>
			<div id="bar__middle" className="" style={{ width: '100%' }}>
				<div id="bar__middle--back" className={`bar ${open ? 'rotate--clockwise delay' : ''}`}></div>
				<div id="bar__middle--front" className={`bar ${open ? 'rotate--counter-clockwise delay' : ''}`}></div>
			</div>
			<div id="bar__bottom" className={`bar ${open ? 'collapse' : 'delay'}`}></div>
		</div>
	)
}

const Header = () => {
	const WIDTH_BREAKPOINT = 715
	const [open, setOpen] = useState(false)
	const windowInnerWidth = useWindowInnerWidth()
	const isSmallDisplay = useSmallDisplay(WIDTH_BREAKPOINT, windowInnerWidth)

	useEffect(() => {
		document.querySelectorAll('.section')[0].style.paddingTop = calcTotalElemHeight(document.querySelector('#header')) + 'px'
	}, [isSmallDisplay, windowInnerWidth])

	useEffect(() => {
		if (!isSmallDisplay) setOpen(false)
	}, [isSmallDisplay])

	return (
		<>
			<div id={'header'} className={`flex flex-row align-center ${open ? 'open' : ''}`} style={{ height: '100px' }}>
				<div id={'header__main'} className={`flex flex-row align-center`} style={{ height: '100%' }}>
					<a className={'flex flex-row align-center normalized-a'} href={pages.home.url}>
						<img src="assets/hatzalah-logo-transparent.png" style={{ width: '70px', height: '70px', marginRight: '1rem' }} alt={'hatzalah-wol-logo'}/>
						{/*<div id={'company-name'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><span>Hatzalah of</span><span>West Orange</span><span>and Livingston</span></div>*/}
					</a>
					<div className={`flex flex-row`} style={{ alignItems: 'center' }}>
						{!isSmallDisplay && <Nav items={pages} horizontal={true} />}
					</div>
				</div>
				{
					!isSmallDisplay &&
					<div id={'header__secondary'} style={{ height: '100%' }}>
						<p className={'uppercase'}>Emergency: 973-604-4000</p>
						<a href={'donate'} className={'button button__bg--white button__text--secondary uppercase normalized-a'}>Support Us</a>
					</div>
				}
				{isSmallDisplay &&
					<>
						<Hamburger open={open} toggle={() => setOpen(!open)}/>
						<CurtainMenu open={open} setOpen={setOpen} />
					</>
				}
			</div>
			<div className={`${open ? 'overlay' : ''}`} onClick={() => setOpen(false)}></div>
		</>
	)
}

export default Header
