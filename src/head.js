// add base tag so that relative paths will use href + relative/path
const createBase = ({ href }) => {
	const base = document.createElement('base')
	base.href = href
	document.querySelector('head').prepend(base)
}

window.location.host.includes('github') ? createBase({ href: '/Hatzalah/' }) : createBase({ href: '/' })
