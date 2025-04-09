'use client';

import Button from '@/components/ui/Button';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error=({ error, reset }: ErrorProps) =>{
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-5xl font-bold mb-4">500</h1>
      <Button onClick={reset} variant="alert">
        Home Page
      </Button>
    </div>
  );
}

export default Error