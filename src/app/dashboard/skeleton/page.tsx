import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return [...Array(9)];
};

const Page = async () => {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Image
              alt="shadcdn"
              src="https://github.com/shadcn.png"
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />

            <div>
              <CardTitle>Card Title</CardTitle>

              <CardDescription>Card Description</CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Button>More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Page;
