'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const Page = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="grid gap-3">
      <Progress
        value={progress}
        indicatorColor={cn({
          'bg-red-500': progress < 30,
          'bg-yellow-500': progress >= 30 && progress < 60,
          'bg-green-500': progress >= 60,
        })}
      />
    </div>
  );
};

export default Page;
