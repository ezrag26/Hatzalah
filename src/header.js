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
	useEffect(() => {
		if (open) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'auto'
	}, [open])
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
			<div id={'header'} className={`flex flex-row align-center ${open ? 'open' : ''}`}>
				<div id={'header__main'} className={`flex flex-row align-center`}>
					<a className={'flex flex-row align-center normalized-a'} href={pages.home.url}>
						<img src="assets/hatzalah-logo-transparent.png" style={{ width: '50px', height: '50px', marginRight: '.5rem' }} alt={'hatzalah-wol-logo'}/>
						{/*<div id={'company-name'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><span>Hatzalah of</span><span>West Orange</span><span>and Livingston</span></div>*/}
					</a>
					<div className={`flex flex-row`} style={{ alignItems: 'center' }}>
						{!isSmallDisplay && <Nav items={pages} horizontal={true} />}
					</div>
					<div className={`flex flex-row`} style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingRight: '2rem', color: 'var(--secondary)' }}>
					{
						isSmallDisplay && <p className={'uppercase'}>Emergency: <a href="tel:+1-973-604-4000" className={'normalized-a'}>973-604-4000</a></p>
					}
					</div>
				</div>
				{
					!isSmallDisplay &&
					<div id={'header__secondary'}>
						<p className={'uppercase'}>Emergency: <a href="tel:+1-973-604-4000" className={'normalized-a'} style={{ color: 'var(--white)' }}>973-604-4000</a></p>
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
