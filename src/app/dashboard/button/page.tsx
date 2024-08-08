import { Button } from '@/components/ui/button';
import { ChevronRightIcon, Loader2, Mail } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button capitalize>capitalize false </Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Pleasde wait
      </Button>
      <Button asChild>
        <Link href="/dashboard/home">Home</Link>
      </Button>
    </div>
  );
};

export default page;
