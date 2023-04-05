import { useState } from 'react';
import { database } from '../../../../firebase';
import { ref, set } from 'firebase/database';
import styles from './styles.module.scss';

interface RSVPFormProps {
  userId: string;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ userId }) => {
  const [dinnerPartyNumber, setDinnerPartyNumber] = useState('');
  const [dinnerLastName, setDinnerLastName] = useState('');
  const [dinnerIsAttending, setDinnerIsAttending] = useState(false);
  const [templePartyNumber, setTemplePartyNumber] = useState('');
  const [templeLastName, setTempleLastName] = useState('');
  const [templeIsAttending, setTempleIsAttending] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rsvpData = {
      dinner: {
        partyNumber: dinnerPartyNumber,
        lastName: dinnerLastName,
        isAttending: dinnerIsAttending
      },
      temple: {
        partyNumber: templePartyNumber,
        lastName: templeLastName,
        isAttending: templeIsAttending
      }
    };

    //use set but not userId -- anyone can overwrite anyone else's data
    set(ref(database, 'rsvps'), rsvpData);
  };

  return (
    // create an RSVP form with predefined tailwind classes
    <form onSubmit={handleSubmit}>
      <div className={styles['form']}>
        <div className={styles['form--input']}>
          <label htmlFor="dinnerPartyNumber">Dinner Party Number</label>
          <input
            type="text"
            id="dinnerPartyNumber"
            value={dinnerPartyNumber}
            onChange={(event) => setDinnerPartyNumber(event.target.value)}
          />
        </div>
        <div className={styles['form--input']}>
          <label htmlFor="dinnerLastName">Dinner Last Name</label>
          <input
            type="text"
            id="dinnerLastName"
            value={dinnerLastName}
            onChange={(event) => setDinnerLastName(event.target.value)}
          />
        </div>
        <div className={styles['form--input']}>
          <label htmlFor="dinnerIsAttending">Dinner Is Attending</label>
          <input
            type="checkbox"
            id="dinnerIsAttending"
            checked={dinnerIsAttending}
            onChange={(event) => setDinnerIsAttending(event.target.checked)}
          />
        </div>
        <div className={styles['form--input']}>
          <label htmlFor="templePartyNumber">Temple Party Number</label>
          <input
            type="text"
            id="templePartyNumber"
            value={templePartyNumber}
            onChange={(event) => setTemplePartyNumber(event.target.value)}
          />
        </div>
        <div className={styles['form--input']}>
          <label htmlFor="templeLastName">Temple Last Name</label>
          <input
            type="text"
            id="templeLastName"
            value={templeLastName}
            onChange={(event) => setTempleLastName(event.target.value)}
          />
        </div>
        <div className={styles['form--input']}>
          <label htmlFor="templeIsAttending">Temple Is Attending</label>
          <input
            type="checkbox"
            id="templeIsAttending"
            checked={templeIsAttending}
            onChange={(event) => setTempleIsAttending(event.target.checked)}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default RSVPForm;
