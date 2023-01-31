/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

import { fireEvent, render, screen } from '@testing-library/react'

import { BookingForm } from './'
import { BookingPage } from '../../Pages/BookingPage'

describe('Booking Form', () => {
	render(<BookingForm availableTimes={[{ value: '', label: '' }]} />)

	test('Renders the BookingForm heading', () => {
		const title = screen.getByText(/Table/i)
		expect(title).toBeInTheDocument()
	})
})

describe('Booking Form Validations', () => {
	test('Input HTML validation works', () => {
		const { getByTestId } = render(
			<BookingPage availableTimes={[{ value: '', label: '' }]} />
		)
		const dateInput = getByTestId('date')
		const timeInput = getByTestId('time')
		const guestsInput = getByTestId('guests')
		const occasionInput = getByTestId('occasion')

		expect(dateInput).toHaveAttribute('required')
		expect(timeInput).toHaveAttribute('required')
		expect(guestsInput).toHaveAttribute('required')
		expect(guestsInput).toHaveAttribute('max', '10')
		expect(occasionInput).toHaveAttribute('required')
	})

	test('Input YUP validation Works', async () => {
		const mock = jest.fn()

		render(
			<BookingPage
				availableTimes={[{ value: '', label: '' }]}
				setAvailableTimes={() => {}}
				submitForm={mock}
			/>
		)

		const dateInput = screen.getByTestId('date')
		const timeInput = screen.getByRole('combobox', { name: /time/i })
		const guestsInput = screen.getByRole('spinbutton', {
			name: /guests/i,
		})
		const occasionInput = screen.getByRole('combobox', {
			name: /occasion/i,
		})

		fireEvent.change(dateInput, {
			target: { value: '2020-03-15' },
		})
		fireEvent.focusOut(dateInput)

		fireEvent.change(timeInput, { target: { value: '20:00' } })
		fireEvent.focusOut(timeInput)

		fireEvent.change(guestsInput, { target: { value: 25 } })
		fireEvent.focusOut(guestsInput)

		fireEvent.change(occasionInput, { target: { value: 'birthday' } })
		fireEvent.focusOut(occasionInput)

		expect(screen.findByTestId('date-error')).toBeDefined()
		expect(screen.findByTestId('time-error')).toBeDefined()
		expect(screen.findByTestId('guests-error')).toBeDefined()
		expect(screen.findByTestId('occasion-error')).toBeDefined()
	})

	test('Form is Submitted', async () => {
		const submitForm = jest.fn()

		render(
			<BookingPage
				availableTimes={[{ value: '20:00', label: '20:00' }]}
				setAvailableTimes={() => {}}
				submitForm={submitForm}
			/>
		)

		const dateInput = screen.getByTestId('date')
		const timeInput = screen.getByRole('combobox', { name: /time/i })
		const guestsInput = screen.getByRole('spinbutton', {
			name: /guests/i,
		})
		const occasionInput = screen.getByRole('combobox', {
			name: /occasion/i,
		})
		const button = screen.getByRole('button')

		fireEvent.change(dateInput, {
			target: { value: '2023-03-15' },
		})
		fireEvent.focusOut(dateInput)

		fireEvent.change(timeInput, { target: { value: '20:00' } })
		fireEvent.focusOut(timeInput)

		fireEvent.change(guestsInput, { target: { value: 5 } })
		fireEvent.focusOut(guestsInput)

		fireEvent.change(occasionInput, { target: { value: 'birthday' } })
		fireEvent.focusOut(occasionInput)

		fireEvent.click(button)
		expect(button).not.toHaveAttribute('disabled')
	})
})
