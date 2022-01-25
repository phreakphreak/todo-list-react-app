import { useState, useEffect } from 'react';
import { currentLocation, navigate } from '../utils/NavUtils';

const useHashLocation = () => {
  const [location, setLocation] = useState(currentLocation());
  useEffect(() => {
    const handler = () => setLocation(currentLocation());
    window.addEventListener('hashchange', handler);

    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return [location, navigate];
};

export default useHashLocation;
