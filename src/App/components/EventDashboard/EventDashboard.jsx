import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'

export default function EventDashboard() {
	return (
		<Grid textAlign='center'>
			<Grid.Column width={10}>
				<EventList />
			</Grid.Column>
			<Grid.Column width={6}>Right Column</Grid.Column>
		</Grid>
	)
}
