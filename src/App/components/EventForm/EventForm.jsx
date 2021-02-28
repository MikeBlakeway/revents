import React, { useState } from 'react'
import { Segment, Header, Form, Button } from 'semantic-ui-react'

export default function EventForm({ setFormOpen, setEvents }) {
	const initialValues = {
		title: '',
		category: '',
		description: '',
		city: '',
		venue: '',
		date: '',
	}

	const [values, setValues] = useState(initialValues)

	const handleFormSubmit = () => {
		console.log(values)
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	return (
		<Segment clearing>
			<Header content='Create New Event' />
			<Form onSubmit={handleFormSubmit}>
				<Form.Field>
					<input
						type='text'
						placeholder='Event Title'
						name='title'
						value={values.title}
						onChange={e => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Category'
						name='category'
						value={values.category}
						onChange={e => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Description'
						name='description'
						value={values.description}
						onChange={e => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='City'
						name='city'
						value={values.city}
						onChange={e => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='text'
						placeholder='Venue'
						name='venue'
						value={values.venue}
						onChange={e => handleInputChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<input
						type='date'
						placeholder='Date'
						name='date'
						value={values.date}
						onChange={e => handleInputChange(e)}
					/>
				</Form.Field>
				<Button type='submit' floated='right' positive content='Submit' />
				<Button
					onClick={() => setFormOpen(false)}
					type='submit'
					floated='right'
					content='Cancel'
				/>
			</Form>
		</Segment>
	)
}
