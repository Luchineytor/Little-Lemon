import BookingForm from './BookingForm';
import Specials from './Specials';
import { useNavigate } from 'react-router-dom';



function BookingPage() {

  const navigate = useNavigate();
    function submitForm() {
        const success = window.submitAPI(FormData);
        if (success) {
            navigate('/confirmation');
        }
        else { alert('Error submitting form');}

    }

  return (
    <div>
      <section className="booking-header" style={{ backgroundColor: '#495e57', padding: '1rem 3rem', position: 'relative', width: '100vw', left: '50%', marginLeft: '-50vw', marginBottom: '2rem' }}>
        <h1>Make a Reservation</h1>
      </section>
      <BookingForm submitForm={submitForm}/>
      <Specials withBackground />
    </div>
  );
}

export default BookingPage;