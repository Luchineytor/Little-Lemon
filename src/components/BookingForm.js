import React, { useState } from 'react';
import styles from './BookingForm.module.css';
import { useReducer, useEffect } from 'react';
import { initializeTimes, updateTimes } from './bookingReducer';

function BookingForm({submitForm}) {
  const [resDate, setResDate] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  useEffect(() => {
  const handleLoad = () => {
      if (typeof window.fetchAPI === 'function') {
        const today = new Date();
        try {
          dispatch({ type: 'date_change', date: today });
        } catch (error) {
          console.error("Error usando fetchAPI después de load:", error);
        }
      } else {
        console.warn("fetchAPI aún no está disponible incluso después del load.");
      }
    };

    window.addEventListener('load', handleLoad);

    // Limpieza por si el componente se desmonta
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  const [resTime, setResTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const occasions = ['Birthday', 'Anniversary', 'Other'];

  const isFormValid = () => {
  return (
    resDate !== '' &&
    resTime !== '' &&
    guests > 1 &&
    occasion !== ''
  );
};

return (
  <form
    className={styles.form}
    onSubmit={(e) => {
      e.preventDefault();
      submitForm({ resDate, resTime, guests, occasion });
    }}
  >
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={resDate}
          onChange={(e) => {
            const newDate = e.target.value;
            setResDate(newDate);
            dispatch({ type: 'date_change', date: new Date(newDate) });
          }}
          required
          min={new Date().toISOString().split('T')[0]} // Prevent past dates
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={resTime} onChange={e => setResTime(e.target.value)} required>
           {availableTimes.map(time => (
            <option key={time} value={time}>
                {time}
            </option>
           ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input id="guests" type="number" placeholder="1" min="1" max="10" value={guests} onChange={e => setGuests(Number(e.target.value))} required/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
          {occasions.map(occasion => (
            <option key={occasion} value={occasion}>
                {occasion}
            </option>
          ))}
        </select>
        <input aria-label='On Click' type="submit" value="Make Your reservation" disabled={!isFormValid()} className={styles.submitButton} />
    </form>

  );
}

export default BookingForm;