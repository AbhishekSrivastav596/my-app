import React from 'react';
import RetryLogic from './RetryLogic';
import { AlertTriangle } from 'react-feather';

function Dashboard({ name, count, images }) {
  const hasError = images.some((img) => img.error);

  return (
    <div className="bg-blue-950 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
      <h1 className="text-white text-3xl font-bold mb-4">{name}</h1>

      <div className="text-white text-xl mb-4">Count: {count}</div>

    
      <div className="flex gap-4">
        {images.map((image, idx) => (
        <RetryLogic key={idx} url={image.url} ready={image.ready} error={image.error} />
        ))}

        {Array.from({ length: 4 - images.length }).map((_, idx) => (
          <div
            key={idx}
            className="w-10 h-10 border rounded-full flex items-center justify-center"
            title="Placeholder"
          >
            Placeholder
          </div>
        ))}
      </div>

      {hasError && (
        <div className="mt-4 flex items-center justify-center">
          <AlertTriangle color="red" size={32} />
          <span className="text-red-500 ml-2">Some images failed to load.</span>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
