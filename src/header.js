import React, { useState, useEffect } from 'react'

const pages = {
	home: { title: 'Home', url: `` },
	emergency: { title: 'In Case Of Emergency', url: 'in-case-of-emergency' },
	about: { title: 'Who We Are', url: 'who-we-are' },
	training: { title: 'Training & Resources', url: 'training-resources' },
	donate: { title: 'Donate', url: 'donate' }
}

const NavItem = ({ href, display }) => {
	const baseUrl = document.querySelector('base')?.href
	const path = window.location.href.replace(baseUrl, '')
	const currentPage = path.replaceAll('/', '') === href
	return <li className={`header-nav-item ${!currentPage ? 'fade' : ''}`}><a href={href}>{display}</a></li>
}

const Nav = () => {
	return (
		<nav>
			<ul className={'flex'}>
				{
					Object.values(pages).map(headerItem => {
						return <NavItem key={headerItem.title} href={headerItem.url} display={headerItem.title}/>
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

const searchIndex = [
	{
		title: 'Saving Lives',
		url: pages.home.url,
		content: 'Neighbors Saving Lives 24 hours day 365 days year',
		summary: 'Your Neighbors Saving Lives. 24 hours a day. 365 days a year.'
	},
	{
		title: 'Partner with us',
		url: pages.home.url,
		content: 'Partner, volunteer, dispatcher',
		summary: 'Partner with us. Dedicated to saving lives in West Orange, Livingston and the surrounding Essex County area. DONATE. Want to Volunteer? Apply to become a dispatcher'
	},
	{
		title: 'We are Here for You',
		url: pages.home.url,
		content: 'Emergency',
		summary: 'No Matter the Emergency, We are Here for You... Emergency Medical Response... 24/7 Emergency Dispatch... Proven First Response System'
	},
	{
		title: 'Emergency Medical Response',
		url: pages.home.url,
		content: 'Emergency Medical Response emergency',
		summary: 'Emergency Medical Response... Our experienced members are ready to respond to any medical emergency in Livingston, West Orange or the surrounding Essex County communities'
	},
	{
		title: '24/7 Emergency Dispatch',
		url: pages.home.url,
		content: '24/7 Emergency Dispatching trained volunteers',
		summary: '24/7 Emergency Dispatch... Hatzalah state of the art dispatching is staffed 24 hours a day by highly trained local volunteers'
	},
	{
		title: 'Proven First Response System',
		url: pages.home.url,
		content: 'Proven First Response System vehicles dispatches EMTs care ambulance',
		summary: 'Proven First Response System... Using first response vehicles, Hatzalah dispatches the closest EMTs directly to the scene so care can begin before an ambulance arrives'
	},
	{
		title: 'Email us',
		url: pages.home.url,
		content: 'Email info@hatzalahWOL.org for more information or to get involved',
		summary: 'Email info@hatzalahWOL.org for more information or to get involved'
	},
	{
		title: 'Donate',
		url: pages.donate.url,
		content: 'Donate Friends Hatzalah West Orange Livingston write check donation',
		summary: '...Donate to Friends of Hatzalah of West Orange - Livingston. Prefer to write a check? Please make your donation to Friends of Hatzalah of West...'
	},
	{
		title: 'Thank You for your Donation',
		url: pages.donate.url,
		content: 'Thank You support Hatzalah of West Orange and Livingston',
		summary: 'Thank You. Thank you for your generous support of Hatzalah of West Orange and Livingston.'
	},
]

const search = (q) => {
	return searchIndex.reduce((acc, index) => new RegExp(q, 'gi').test(index.content) ? acc.concat(index) : acc, [])
}

const Search = ({ isOpen, close }) => {
	const [q, setQ] = useState('')
	const [results, setResults] = useState()

	const resetAndClose = () => {
		setResults()
		setQ('')
		close()
	}

	return (
		<>
			<div className={`${isOpen ? 'overlay' : ''}`} style={{ zIndex: 'calc(var(--curtain-z) + 2)' }} onClick={resetAndClose}></div>
			<div id={'search-container'} style={{ width: isOpen ? '100%' : '0', height: results ? '100%' : 'auto' }}>
				<div id={'search'} className={`${isOpen ? 'padding' : ''}`} style={{ width: isOpen ? '100%' : '0', transitionDuration:  '.3s', }}>
					<i className={'fa fa-arrow-left clickable'} onClick={resetAndClose}></i>
					<div id={'search-bar'} className={''}>
						<i className={'fa fa-search clickable'} onClick={() => {
							q && setTimeout(() => setResults(search(q)), 1000 * 0.5)
						}}></i>
						<input className={'font-medium'} value={q} onChange={e => setQ(e.target.value)} style={{ flexGrow: 1, outline: 'none', border: 'none', width: '100%', padding: '0 .5em' }} placeholder={'Search this site'} />
						{q && <i className={'fa fa-close clickable'}  onClick={() => setQ('')}></i>}
					</div>
					<div className={'hidden'}>{/* hidden item to center the search bar */}</div>
				</div>
				<div id={`search-results`} style={{ marginTop: '1em', display: results ? 'initial' : 'none' }}>
				{
					results && results.map(result => {
						return (
							<div key={result.summary} className={'flex flex-column'}>
								<a className={'normalized-a font-large'} style={{ color: 'blue' }} href={result.url}>{result.title}</a>
								<div className={'font-medium'}>{result.summary}</div>
							</div>
						)
					})
				}
				</div>
			</div>
		</>
	)
}

const Header = () => {
	const WIDTH_BREAKPOINT = 715
	const [open, setOpen] = useState(false)
	const [isSmallDisplay, setIsSmallDisplay] = useState(window.innerWidth < WIDTH_BREAKPOINT)
	const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)
	const [headerSize, setHeaderSize] = useState(calcTotalElemHeight(document.querySelector('header')))
	const [searchOpen, setSearchOpen] = useState(false)

	useEffect(() => {
		document.querySelector('main').style.marginTop = calcTotalElemHeight(document.querySelector('#alert-banner')) + 'px'
		document.querySelectorAll('.section')[0].style.paddingTop = calcTotalElemHeight(document.querySelector('#header')) + 'px'

		setIsSmallDisplay(windowInnerWidth < WIDTH_BREAKPOINT)
	}, [isSmallDisplay, windowInnerWidth])

	useEffect(() => {
		if (!isSmallDisplay) setOpen(false)
	}, [isSmallDisplay])

	window.addEventListener('resize', () => {
		setWindowInnerWidth(window.innerWidth)
	})

	return (
		<>
			<div id={'alert-banner'}>
				<p>We are hard at work getting ready to launch in the community. Stay tuned for more information!</p>
				<a href={'donate'} className={'button contained white uppercase normalized-a'}>Support Us</a>
			</div>
			<div id={'header'} className={`flex flex-row align-center ${open ? 'open' : ''}`}>
			{isSmallDisplay &&
				<>
					<i id={'hamburger'} className={`fa clickable ${open ? 'fa-times' : 'fa-bars'}`} onClick={e => {
						setOpen(prev => !prev)
					}}></i>
					<CurtainMenu open={open} setOpen={setOpen} />
				</>
			}
				<div id={'header-content'} className={`flex flex-row align-center`}>
					<a className={'flex flex-row align-center normalized-a'} href={pages.home.url}>
						<img src="assets/hatzalah-logo-transparent.png" style={{ width: '40px', height: '40px', marginRight: '1rem' }} alt={'hatzalah-wol-logo'}/>
						{!isSmallDisplay && <div id={'company-name'}>Hatzalah of West Orange and Livingston</div>}
					</a>
					<div className={`flex flex-row`} style={{ alignItems: 'center' }}>
						{!isSmallDisplay && <Nav />}
						<i className={'fa fa-search clickable'} onClick={() => setSearchOpen(true)}></i>
					</div>
				</div>
			</div>
			<Search isOpen={searchOpen} close={() => setSearchOpen(false)} />
			<div className={`${open ? 'overlay' : ''}`} onClick={() => setOpen(false)}></div>
		</>
	)
}

export default Header
