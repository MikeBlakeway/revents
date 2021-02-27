import React, { useState } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'

import EventDashboard from './components/EventDashboard/EventDashboard'
import { Navbar } from './components/Navbar/Navbar'

export default function App() {
	const [formOpen, setFormOpen] = useState(false)

	return (
		<>
			<Navbar setFormOpen={setFormOpen} />
			<Container style={{ marginTop: '7em' }}>
				<EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
			</Container>
		</>
	)
}
