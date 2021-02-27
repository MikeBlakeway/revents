import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { sampleData } from '../../api/sampleData'

export default function EventDashboard({ formOpen, setFormOpen }) {
	const [events, setEvents] = useState(sampleData)
	return (
		<Grid textAlign='center'>
			<Grid.Column width={10}>
				<EventList events={events} />
			</Grid.Column>
			<Grid.Column width={6}>
				{formOpen && <EventForm setFormOpen={setFormOpen} />}
			</Grid.Column>
		</Grid>
	)
}
