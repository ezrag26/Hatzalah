import React from 'react'

import Nav from './Navigation/navigation'
import { pages } from './Navigation/pages'

const FlexRow = ({ children, className, justifyContent = 'center' }) => {
	return (
		<div className={className} style={{ display: 'flex', alignContent: 'center', flexWrap: 'wrap', justifyContent }}>
			{children}
		</div>
	)
}

const FlexColumn = ({ children, className }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className={className}>
			{children}
		</div>
	)
}

const FaIcon = ({ icon, size = 1 }) => {
	return <i className={`fa fa-${icon} fa-${size}x`}></i>
}

const Footer = () => {
	return (
		<div className={'stack-large'} style={{ width: '90%', margin: 'auto', padding: '3rem 0' }}>
			<FlexRow justifyContent={'space-between'}>
				<FlexRow className={'icon-card'}>
					<FaIcon icon={'phone'} size={3}/>
					<FlexColumn>
						<span>Emergency</span>
						<a className={'normalized-a'} href={'tel:+973-604-4000'}><span style={{ color: 'var(--secondary)', fontWeight: 'bold' }} >973-604-4000</span></a>
					</FlexColumn>
				</FlexRow>

				<FlexRow className={'icon-card'}>
					<FaIcon icon={'envelope'} size={3}/>
					<FlexColumn>
						<span>Email</span>
						<a href="mailto: info@hatzalahWOL.org" className={'normalized-a'}><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>info@hatzalahWOL.org</span></a>
					</FlexColumn>
				</FlexRow>

				<FlexRow className={'icon-card'}>
					<FaIcon icon={'map-marker'} size={3}/>
					<FlexColumn>
						<span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>P.O. Box 245</span>
						<span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>West Orange, NJ 07052</span>
					</FlexColumn>
				</FlexRow>

				<FlexRow className={'icon-card'}>
					<a href="https://www.facebook.com/HatzalahWOL/" target="_blank" className={'normalized-a'}>
						<FaIcon icon={'facebook-square'} size={3} />
					</a>
					<a href="https://www.instagram.com/hatzalahwol/" target="_blank" className={'normalized-a'}>
						<FaIcon icon={'instagram'} size={3} />
					</a>
				</FlexRow>
			</FlexRow>

			<FlexRow justifyContent={'flex-start'}>
				<Nav items={pages}/>
				{/*iFrame for mailchimp*/}
			</FlexRow>

			<FlexColumn className={'stack-large'}>
				<p style={{ fontSize: '.75rem' }}>Hatzalah of West Orange-Livingston is a New Jersey State Not For Profit Corporation and is a tax exempt charitable organization under IRS Section 501(c)(3). Donations are tax deductible to the maximum extent permitted by law. All donations to Hatzalah of West Orange-Livingston exclusively support the operations of Hatzalah of West Orange-Livingston in its primary operating area.</p>

				<p style={{ fontSize: '.75rem' }}>Hatzalah of West Orange-Livingston, by a trademark license agreement with Chevra Hatzalah, operates as an independent volunteer ambulance service. Hatzalah of West Orange-Livingston is not under the supervision of Chevra Hatzalah.</p>
			</FlexColumn>
		</div>
	)
}

export default Footer
