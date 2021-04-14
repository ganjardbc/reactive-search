import React, { Component } from 'react'
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom"

import BigSearch from './components/bigsearch/Index'
import ViewCV from './components/bigsearch/cv'
import ViewMap from './components/bigsearch/map'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<HashRouter history={Router.browserHistory}>
				<Route exact path="/" component={BigSearch}></Route>
				<Route exact path="/view-cv" component={ViewCV}></Route>
				<Route exact path="/view-map" component={ViewMap}></Route>
			</HashRouter>
		);
	}
}

export default App;
