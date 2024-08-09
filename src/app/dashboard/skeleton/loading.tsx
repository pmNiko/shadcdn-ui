import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {[...Array(9)].map((item) => (
        <div key={item}>
          <div className="flex flex-row gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[110px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
          <div className="flex justify-end mt-4 pr-4">
            <Skeleton className="h-8 w-[80px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default loading;
