import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const loading = () =>  (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {[...Array(9)].map((item) => (

        <Card key={item}>
          <CardHeader className="flex-row">
            <Skeleton className="h-10 w-10 rounded-full mr-2" />
            <div className='flex-col flex-grow'>
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-3 w-full" />
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
              <Skeleton className="h-8 w-20" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );


export default loading;
