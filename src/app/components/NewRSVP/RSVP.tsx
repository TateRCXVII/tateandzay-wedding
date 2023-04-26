'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import Topnav from '../Topnav/Topnav';
import { push, ref, set } from 'firebase/database';
import { database } from '@/firebase';

export default function RSVP() {
  const [stage, setStage] = useState(0);
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [partySize, setPartySize] = useState(0);

  const handleSubmitName = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStage(1);
  };

  const handleSubmitAttendance = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (attending === 'no') {
      setPartySize(0);
      setStage(3);
      try {
        const rsvpData = {
          dinner: {
            partyNumber: partySize,
            lastName: name,
            isAttending: attending,
          },
        };

        //use set but not userId -- anyone can overwrite anyone else's data
        const rsvpsRef = ref(database, 'rsvps');
        const newRsvpRef = push(rsvpsRef);
        set(newRsvpRef, rsvpData);
      } catch (error) {
        console.log(error);
      }
      return;
    }
    setStage(2);
  };

  const handleSubmitPartySize = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const rsvpData = {
        dinner: {
          partyNumber: partySize,
          lastName: name,
          isAttending: attending,
        },
      };

      //use set but not userId -- anyone can overwrite anyone else's data
      const rsvpsRef = ref(database, 'rsvps');
      const newRsvpRef = push(rsvpsRef);
      set(newRsvpRef, rsvpData);
    } catch (error) {
      console.log(error);
    }

    setStage(3);
  };

  return (
    <>
      <Topnav />
      <div className={styles.rsvpContainer}>
        {stage === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.rsvpFormCard}
          >
            <h1 className="text-black text-3xl font-serif">RSVP For The Dinner</h1>
            <form onSubmit={handleSubmitName}>
              <label htmlFor="name" className="block text-lg font-semibold">
                Please enter your first and last name
              </label>
              <input
                id="name"
                type="text"
                className="border border-black rounded w-full p-3 my-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-black text-white text-lg py-3 px-6 rounded"
              >
                Next
              </button>
            </form>
          </motion.div>
        )}

        {stage === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.rsvpFormCard}
          >
            <h1 className="text-black text-3xl font-serif">
              Will you be attending the dinner on June 8th?
            </h1>
            <form onSubmit={handleSubmitAttendance}>
              <div className="flex items-center my-3">
                <button
                  type="button"
                  className={`rounded-full py-3 px-6 mr-4 ${attending === 'yes' ? 'bg-black text-white' : 'bg-white text-black border border-black'
                    }`}
                  onClick={() => setAttending('yes')}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`rounded-full py-3 px-6 ${attending === 'no' ? 'bg-black text-white' : 'bg-white text-black border border-black'
                    }`}
                  onClick={() => setAttending('no')}
                >
                  No
                </button>
              </div>
              <button
                type="submit"
                className="bg-black text-white text-lg py-3 px-6 rounded"
                disabled={!attending}
              >
                Submit
              </button>
            </form>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.rsvpFormCard}
          >
            <h1 className="text-black text-3xl font-serif">How many people are in your party?</h1>
            <form onSubmit={handleSubmitPartySize}>
              <input
                type="number"
                className="border border-black rounded w-full p-3 my-3"
                value={partySize}
                onChange={(e) => setPartySize((e.target.value as unknown) as number)}
                required
              />
              <button
                type="submit"
                className="bg-black text-white text-lg py-3 px-6 rounded"
              >
                Submit
              </button>
            </form>
          </motion.div>
        )}

        {stage === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.rsvpFormCard}
          >
            <h1 className="text-black text-3xl font-serif pb-3">Thanks! Your response has been recorded.</h1>
            <h2 className="text-black text-2xl font-serif pb-3">Buy the couple a gift:</h2>
            <div className="flex my-3">
              <a
                href="https://www.zola.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-lg py-3 px-6 rounded mr-4"
              >
                Zola
              </a>
              <a
                href="https://www.myregistry.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-lg py-3 px-6 rounded"
              >
                REI
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

