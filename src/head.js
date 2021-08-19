// add base tag so that relative paths will use href + relative/path
const createBase = ({ href }) => {
	const base = document.createElement('base')
	base.href = href
	document.querySelector('head').prepend(base)
}

if (window.location.host.includes('localhost')) {
	createBase({ href: 'http://localhost:9000/' })
} else if (window.location.host.includes('github.io')) {
	createBase({ href: 'https://ezrag26.github.io/Hatzalah/' })
}
