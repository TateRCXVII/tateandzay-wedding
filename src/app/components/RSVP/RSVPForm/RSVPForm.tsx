import { useState } from 'react';
import { database } from '../../../../firebase';
import { ref, set } from 'firebase/database';
import { Dialog } from '@headlessui/react';
import { Card, Input } from '@windmill/react-ui';
import { Button } from '@mui/material';
import styles from './styles.module.scss';

interface RSVPFormProps {
  userId: string;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ userId }) => {
  const [dinnerPartyNumber, setDinnerPartyNumber] = useState('');
  const [dinnerLastName, setDinnerLastName] = useState('');
  const [dinnerIsAttending, setDinnerIsAttending] = useState(false);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rsvpData = {
      dinner: {
        partyNumber: dinnerPartyNumber,
        lastName: dinnerLastName,
        isAttending: dinnerIsAttending
      },
    };

    //use set but not userId -- anyone can overwrite anyone else's data
    set(ref(database, 'rsvps'), rsvpData);
  };

  //returns an rsvp form styled such that the left side of the page has a description of the event and the right side has the form
  // which is placed within a Card element
  // the only input needed is the number of people in the party, the last name of the party, and whether or not they are attending
  // use tailwindcss to style the form
  return (
    <Card className={styles.rsvpFormCard}>
      <div className={styles.rsvpFormContainer}>
        <div className={styles.rsvpFormDescription}>
          <h2 className={styles['rsvpTitle']}>RSVP for our Event</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget mauris vitae purus efficitur tristique non eu nibh. Curabitur
            imperdiet libero sit amet justo euismod, vel pellentesque lacus
            pharetra.
          </p>
        </div>
        <div className={styles.rsvpFormInputs}>
          <Card>
            <form onSubmit={handleSubmit}>
              <span>Party Number</span>
              <Input
                css={{}}
                type="text"
                value={dinnerPartyNumber}
                onChange={(e) => setDinnerPartyNumber(e.target.value)}
                className={styles['rsvpFormInput']}
              />
              <span>Last Name</span>
              <Input
                css={{}}
                type="text"
                value={dinnerLastName}
                onChange={(e) => setDinnerLastName(e.target.value)}
                className={styles['rsvpFormInput']}
              />
              <label>
                <input
                  type="checkbox"
                  checked={dinnerIsAttending}
                  onChange={() => setDinnerIsAttending(!dinnerIsAttending)}
                />
                <span className="ml-2">Will you be attending?</span>
              </label>
              <Button
                sx={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#767676',
                  },
                  //on hover, change color to #767676
                }}
                type="submit"
                variant="contained"
                className={styles['button']}>
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Card>
  );

};

export default RSVPForm;
