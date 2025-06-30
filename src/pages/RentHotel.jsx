import React, { useState, useEffect } from 'react';

import Skeleton from '../components/Skeleton/Skeleton'; // skeleton component



const RentHotel = () => {
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
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Book Your Hotel</h1>
          <p>Explore our range of hotels and book your stay now!</p>
          <p>comming soon!</p>
          {/* Here you can add your hotel booking components */}
        </div>
      )}
    </div>
  );
};

export default RentHotel;
