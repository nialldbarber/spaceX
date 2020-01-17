import { css } from 'styled-components'

export const containerMixin = css`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
`

export const timingFunctionMixin = css`animation-timing-function: cubic-bezier(.215, .610, .355, 1.000);`

export const centerMixin = css`
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export const buttonMixin = css`
	display: inline-block;
	line-height: 2.5rem;
	padding: 0 .875rem;
	box-shadow: 0 3px 6px rgba(0, 0, 0, .05), 0 3px 6px rgba(0, 0, 0, .02);
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: .025rem;
	text-decoration: none;
	transition: .125s ease;
	font-size: .9rem;
`
