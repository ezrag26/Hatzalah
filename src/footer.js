import React from 'react'

const Footer = () => {
	return (
		<>
			<section id={'email'}>
				<p>Email <a href="mailto: info@hatzalahWOL.org" style={{ textDecoration: 'underline', color: 'white' }}>info@hatzalahWOL.org</a> for more information or to get involved</p>
			</section>

			<section>
				<p>P.O. Box 245, West Orange, New Jersey, 07052</p>

				<p>Hatzalah of West Orange-Livingston is a New Jersey State Not For Profit Corporation and is a tax exempt charitable organization under IRS Section 501(c)(3). Donations are tax deductible to the maximum extent permitted by law.</p>

				<p>Hatzalah of West Orange-Livingston, by a trademark license agreement with Chevra Hatzalah, operates as an independent volunteer ambulance service. Hatzalah of West Orange-Livingston is not under the supervision of Chevra Hatzalah. All donations to Hatzalah of West Orange-Livingston exclusively support the operations of Hatzalah of West Orange-Livingston in its primary operating area.</p>
			</section>

			<div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>

				{/*iFrame for mailchimp*/}

				<div style={{ display: 'flex', justifyContent: 'space-evenly', minWidth: '15%' }}>
					<a href="https://www.facebook.com/HatzalahWOL/" target="_blank" className={'normalized-a'}>
						<i className={'fa fa-facebook-square fa-3x'}></i>
					</a>
					<a href="https://www.instagram.com/hatzalahwol/" target="_blank" className={'normalized-a'}>
						<i className={'fa fa-instagram fa-3x'}></i>
					</a>
				</div>
			</div>
		</>
	)
}

export default Footer
