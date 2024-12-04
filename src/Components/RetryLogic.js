import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'react-feather';

function RetryLogic({ url, ready, error }) {
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentError, setCurrentError] = useState(error);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ready && !error) {
      loadImage();
    }
  }, [url, ready, error]);

  const loadImage = () => {
    if (attempts >= 3) return;
    setLoading(true);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.8; 
      if (isSuccess) {
        setLoaded(true);
        setCurrentError(false);
      } else {
        setAttempts((prev) => prev + 1);
        setCurrentError(true);
      }
      setLoading(false);
    }, 5000); 
  };

  return (
    <div
      className="relative w-10 h-10 border rounded-full flex items-center justify-center"
      title={
        currentError
          ? `Error occurred. Retries: ${attempts}`
          : loaded
          ? 'Image loaded successfully'
          : 'Loading...'
      }
    >
      
      {loading && <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>}

    
      {loaded && !currentError ? (
        <img src={url} alt="Loaded" className="w-full h-full rounded-full object-cover" />
      ) : currentError ? (
        <AlertTriangle color="red" />
      ) : null}
    </div>
  );
}

export default RetryLogic;
