import React from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'

import EventDashboard from './components/EventDashboard/EventDashboard'
import { Navbar } from './components/Navbar/Navbar'

export default function App() {
	return (
		<>
			<Navbar />
			<Container style={{ marginTop: '7em' }}>
				<EventDashboard />
			</Container>
		</>
	)
}
