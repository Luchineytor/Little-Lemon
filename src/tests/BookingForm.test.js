window.fetchAPI = jest.fn(() => ['17:00', '18:00']);


import { render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';

test('Renders a BookingForm label', () => {
  render(<BookingForm />);
  const label = screen.getByText("Choose date");
  expect(label).toBeInTheDocument();
});