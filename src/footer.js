import React, { useState, useEffect } from 'react'

import Nav from './Navigation/navigation'
import { pages } from './Navigation/pages'
import { useWindowInnerWidth } from './hooks/hooks'

const FlexRow = ({ children, id, className, style = {} }) => {
	return (
		<div id={id} className={className} style={{ display: 'flex', ...style }}>
			{children}
		</div>
	)
}

const FlexColumn = ({ id, children, className, style = {} }) => {
	return (
		<div id={id} className={className} style={{ display: 'flex', flexDirection: 'column', ...style }}>
			{children}
		</div>
	)
}

const FaIcon = ({ id, className, icon, size = 1 }) => {
	return <i id={id} className={`fa fa-${icon} fa-${size}x ${className}`}></i>
}

const Footer = () => {
	const windowInnerWidth = useWindowInnerWidth()
	const [isSmallDisplay, setIsSmallDisplay] = useState(window.innerWidth < 645)

	useEffect(() => {
		setIsSmallDisplay(windowInnerWidth < 645)
	}, [isSmallDisplay, windowInnerWidth])

	return (
		<div id={'footer--content'} className={'stack-large'}>
			<div id={'footer--contact'} className={'stack'}>
				<FlexRow className={'icon-card'} style={{ alignItems: 'center' }}>
					<FaIcon icon={'phone'} size={3}/>
					<FlexColumn style={{ justifyContent: 'space-around', height: '100%' }}>
						<span>Emergency</span>
						<a className={'normalized-a'} href={'tel:+973-604-4000'}><span style={{ color: 'var(--secondary)', fontWeight: 'bold' }} >973-604-4000</span></a>
					</FlexColumn>
				</FlexRow>

				<FlexRow className={'icon-card'} style={{ alignItems: 'center' }}>
					<FaIcon icon={'envelope'} size={3}/>
					<FlexColumn style={{ justifyContent: 'space-around', height: '100%' }}>
						<span>Email</span>
						<a href="mailto: info@hatzalahWOL.org" className={'normalized-a'}><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>info@hatzalahWOL.org</span></a>
					</FlexColumn>
				</FlexRow>

				<FlexRow className={'icon-card'} style={{ alignItems: 'center' }}>
					<FaIcon icon={'map-marker'} size={3}/>
					<FlexColumn style={{ justifyContent: 'space-around', height: '100%' }}>
						<span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>P.O. Box 245</span>
						<span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>West Orange, NJ 07052</span>
					</FlexColumn>
				</FlexRow>

				<FlexRow id={'footer--social'} style={{ alignItems: 'center' }}>
					<a href="https://www.facebook.com/HatzalahWOL/" target="_blank" className={'normalized-a'}>
						<FaIcon icon={'facebook-square'} size={3} />
					</a>
					<a href="https://www.instagram.com/hatzalahwol/" target="_blank" className={'normalized-a'}>
						<FaIcon icon={'instagram'} size={3} />
					</a>
				</FlexRow>
			</div>

			<FlexRow id={'footer--site-map'}>
				<a className={'flex flex-row align-center normalized-a'} href={pages.home.url}>
					<img src="assets/hatzalah-logo-transparent.png" style={{ width: '70px', height: '70px' }} alt={'hatzalah-wol-logo'}/>
				</a>
				<Nav items={pages} horizontal={!isSmallDisplay}/>
				{/*iFrame for mailchimp*/}
			</FlexRow>

			<FlexColumn id={'footer--legal'} className={'stack-large'}>
				<p>Hatzalah of West Orange-Livingston is a New Jersey State Not For Profit Corporation and is a tax exempt charitable organization under IRS Section 501(c)(3). Donations are tax deductible to the maximum extent permitted by law. All donations to Hatzalah of West Orange-Livingston exclusively support the operations of Hatzalah of West Orange-Livingston in its primary operating area.</p>

				<p>Hatzalah of West Orange-Livingston, by a trademark license agreement with Chevra Hatzalah, operates as an independent volunteer ambulance service. Hatzalah of West Orange-Livingston is not under the supervision of Chevra Hatzalah.</p>
			</FlexColumn>
		</div>
	)
}

export default Footer
