import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { sampleData } from '../../api/sampleData'

export default function EventDashboard() {
	return (
		<Grid textAlign='center'>
			<Grid.Column width={10}>
				<EventList events={sampleData} />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventForm />
			</Grid.Column>
		</Grid>
	)
}
