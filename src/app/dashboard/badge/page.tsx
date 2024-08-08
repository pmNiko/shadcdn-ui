import { Badge } from '@/components/ui/badge';

export default function Page() {
  return (
    <div className="flex  gap-3">
      <Badge>Default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge capitalize variant="info">
        info
      </Badge>
      <Badge capitalize variant="success">
        success
      </Badge>
    </div>
  );
}
