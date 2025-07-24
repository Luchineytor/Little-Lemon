window.fetchAPI = jest.fn(() => ['17:00', '18:00']);


import { render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';

test('Renders a BookingForm label', () => {
  render(<BookingForm />);
  const label = screen.getByText("Choose date");
  expect(label).toBeInTheDocument();
});

test('The client side validation works correctly', () => {
  render(<BookingForm submitForm={() => {}} />);
  
  const dateInput = screen.getByLabelText("Choose date");
  const timeInput = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");
  const occasionInput = screen.getByLabelText("Occasion");
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });

  // Initially, the button should be disabled
  expect(submitButton).toBeDisabled();

  // Fill in the form correctly
  dateInput.value = '2023-10-01';
  timeInput.value = '18:00';
  guestsInput.value = '1';
  occasionInput.value = 'Birthday';

  // Now the button should be enabled
  expect(submitButton).toBeDisabled();
});