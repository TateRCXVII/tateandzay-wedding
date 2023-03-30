'use client'
import React, { useState } from 'react';

interface Guest {
  id: number;
  name: string;
}

interface AisleProps {
  seatsCount: number;
}

const Aisle: React.FC<AisleProps> = ({ seatsCount }) => {
  const [guests, setGuests] = useState<Guest[]>([]);

  const handleRsvp = (name: string) => {
    const newGuest: Guest = {
      id: guests.length + 1,
      name,
    };
    setGuests([...guests, newGuest]);
  };

  const seats = [];
  for (let i = 0; i < seatsCount; i++) {
    seats.push(
      <div
        key={i}
        className="w-8 h-8 rounded-full border border-gray-300 mr-2"
      ></div>
    );
  }

  const renderGuests = () => {
    return guests.map((guest) => (
      <div key={guest.id} className="inline-block m-2">
        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center">
          {guest.name.substring(0, 1).toUpperCase()}
        </div>
      </div>
    ));
  };

  return (
    <div className="p-4">
      <div className="bg-gray-300 w-full h-4 mb-4"></div>
      <div className="flex justify-center items-center mb-4">{seats}</div>
      <div className="flex justify-center">{renderGuests()}</div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter your name to RSVP"
          className="p-2 border border-gray-300 rounded-md mr-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleRsvp(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => {
            const input = document.querySelector(
              '.aisle input'
            ) as HTMLInputElement;
            handleRsvp(input.value);
            input.value = '';
          }}
        >
          RSVP
        </button>
      </div>
    </div>
  );
};

export default Aisle;
