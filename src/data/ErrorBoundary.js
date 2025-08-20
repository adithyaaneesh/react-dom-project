import { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      // Handle errors here
      setHasError(true);
      console.error('Error caught by Error Boundary:', error, errorInfo);
    };

    // Assign the error handler
    window.addEventListener('error', errorHandler);

    // Cleanup function
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

 

  if (hasError) {
    // Render fallback UI when an error occurs
    return <p>Something went wrong.</p>;
  }

  // Render children components as usual
  return children;
}

export default ErrorBoundary;