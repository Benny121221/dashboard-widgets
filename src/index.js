import React from 'react'
import * as bd from './badge.js'

export default "The default export of dashboard-widgets does nothing. Import the module you want explicitly, or use import * as dw"

export class Test extends React.Component{
	render(){
		return <h1>dashboard-widgets says Hello World</h1>
	}
}

export const author = "Benjamin Lehmann"

export const Badge = bd.default