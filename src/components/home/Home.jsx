import React, { useState, useEffect } from 'react';

import Skeleton from '../Skeleton/Skeleton'; // skeleton component
import ContentCards from '../ContentCards/ContentCards';


const Home = () => {
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
        <ContentCards />
      )}
    </div>
  );
};

export default Home;
