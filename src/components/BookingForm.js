import React, { useState } from 'react';
import styles from './BookingForm.module.css';

function BookingForm() {
  const [resDate, setResDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);
  const [resTime, setResTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const occasions = ['Birthday', 'Anniversary', 'Other'];

  return (
    <form className={styles.form}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" value={resDate} onChange={e => setResDate(e.target.value)}/>
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