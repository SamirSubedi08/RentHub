import React, { useState, useEffect } from 'react';

import Skeleton from '../components/Skeleton/Skeleton'; // your skeleton component
import RoomCard from '../components/RoomsCard/RoomCard';



const RentRoom = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call or content load
    const timer = setTimeout(() => {
              setIsLoading(false);
    }, 2000); // Show skeleton for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div >
      {isLoading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <RoomCard />
      )}
    </div>
  );
};

export default RentRoom;
