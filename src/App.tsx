import React, { useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsLoading(prev => !prev);
  };

  return (
    <div className="app">
      <LoadingSpinner
        isLoading={isLoading}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default App;