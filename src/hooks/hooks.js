import React, { useState, useEffect } from 'react'

const useWindowInnerWidth = () => {
	const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)

	window.addEventListener('resize', () => {
		setWindowInnerWidth(window.innerWidth)
	})

	return windowInnerWidth
}

const useSmallDisplay = (breakpoint, windowInnerWidth) => {
	const [isSmallDisplay, setIsSmallDisplay] = useState(windowInnerWidth < breakpoint)

	useEffect(() => {
		setIsSmallDisplay(windowInnerWidth < breakpoint)
	}, [windowInnerWidth])

	return isSmallDisplay
}

export { useWindowInnerWidth, useSmallDisplay }
