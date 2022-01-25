import { useState, useEffect, useCallback } from 'react';

const useHandleEnter = () => {
  const [value, setValue] = useState('');
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('enter');
      setValue(e.target.value);
      e.target.value = '';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return [value, setValue];
};

export default useHandleEnter;
