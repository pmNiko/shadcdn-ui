'use client';

import { useState } from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { ClipboardPaste } from 'lucide-react';
import { REGEXP_ONLY_DIGITS } from 'input-otp';

const patternRegex = new RegExp(REGEXP_ONLY_DIGITS);

const Page = () => {
  const [value, setValue] = useState<string>();

  const pasteFromClipboard = async () => {
    const clipboardValue = await navigator.clipboard.readText();
    const validInput = patternRegex.test(clipboardValue);
    setValue(validInput ? clipboardValue : '');
  };

  return (
    <div className="flex flex-col justify-center items-center h-[30vh] gap-5 ">
      <ClipboardPaste
        size={20}
        className="font-bold cursor-pointer"
        onClick={pasteFromClipboard}
      />
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      {value && (
        <div className="flex gap-3 ">
          <span>{value}</span>
          <Button
            variant="destructive"
            size="sm"
            className="h-5 w-5 mt-0.5"
            onClick={() => setValue('')}
          >
            x
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
