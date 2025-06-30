import React, { useState, useEffect } from 'react';

import Skeleton from '../Skeleton/Skeleton'; // skeleton component
import ContentCards from '../ContentCards/ContentCards';


const Container = () => {
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
         <div style={{ padding: '20px', textAlign: 'center',backgroundColor:'gray', height:'100%', borderRadius:'10px',margin:'5px' }}></div>
      )}
    </div>
  );
};

export default Container;
