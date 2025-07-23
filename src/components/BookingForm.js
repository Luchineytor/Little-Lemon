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
          type="date"
          value={resDate}
          onChange={(e) => {
            const newDate = e.target.value;
            setResDate(newDate);
            dispatch({ type: 'date_change', date: new Date(newDate) });
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select value={resTime} onChange={e => setResTime(e.target.value)}>
           {availableTimes.map(time => (
            <option key={time} value={time}>
                {time}
            </option>
           ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" value={guests} onChange={e => setGuests(Number(e.target.value))} />
        <label htmlFor="occasion">Occasion</label>
        <select value={occasion} onChange={e => setOccasion(e.target.value)}>
          {occasions.map(occasion => (
            <option key={occasion} value={occasion}>
                {occasion}
            </option>
          ))}
        </select>
        <input type="submit" value="Make Your reservation" className={styles.submitButton}/>
    </form>

  );
}

export default BookingForm;