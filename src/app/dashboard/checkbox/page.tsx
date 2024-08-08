'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { type CheckedState } from '@radix-ui/react-checkbox';
import { useState } from 'react';

export default function Page() {
  const [terms, setTerms] = useState<CheckedState>(false);

  return (
    <div className="flex space-x-2">
      <Checkbox
        checked={terms}
        onCheckedChange={setTerms}
        id="terms2"
        // disabled
      />

      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>

        {terms ? (
          <Badge variant="success" className="w-[55px]">
            Great!
          </Badge>
        ) : (
          <Badge variant="destructive" className="w-[75px]">
            Warning!
          </Badge>
        )}
      </div>
    </div>
  );
}
