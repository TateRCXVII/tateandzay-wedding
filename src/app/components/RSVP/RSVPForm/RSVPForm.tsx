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
    <div className={styles['rsvp-form']}>
      <div className="flex items-center justify-center font-serif">
        <Card className="rounded-lg flex flex-row grid-rows-2 p-6 space-y-6 overflow-hidden bg-white shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800">RSVP</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="dinnerPartyNumber" className="block text-sm font-medium text-gray-700">
                Number of People in Your Party
              </label>
              <Input
                className={styles['rsvp-form--input']}
                css={{}}
                type="text"
                id="dinnerPartyNumber"
                placeholder="Number of People in Your Party"
                value={dinnerPartyNumber}
                onChange={(e) => setDinnerPartyNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="dinnerLastName" className="block text-sm font-medium text-gray-700">
                Last Name of Party
              </label>
              <Input
                className='w-full'
                css={{}}
                type="text"
                id="dinnerLastName"
                placeholder="Last Name of Party"
                value={dinnerLastName}
                onChange={(e) => setDinnerLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="dinnerIsAttending" className="block text-sm font-medium text-gray-700">
                Are You Attending?
              </label>
              <Input
                css={{}}
                type="checkbox"
                id="dinnerIsAttending"
                placeholder="Are You Attending?"
                checked={dinnerIsAttending}
                onChange={(e) => setDinnerIsAttending(e.target.checked)}
              />
            </div>
            <div className="flex justify-end">
              <Button className="mt-4" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div >
  );
};

export default RSVPForm;
