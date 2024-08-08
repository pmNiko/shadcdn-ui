'use client';

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { useEffect, useState } from 'react';

const optionsSuggestions = {
  heading: 'Suggestions',
  options: [
    {
      title: 'Calendar',
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      title: 'Search Emoji',
      icon: <Smile className="mr-2 h-4 w-4" />,
    },
    {
      title: 'Calculator',
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
  ],
};
const optionsSettings = {
  heading: 'Settings',
  options: [
    {
      title: 'Profile',
      icon: <User className="mr-2 h-4 w-4" />,
      commandShortcut: '⌘P',
    },
    {
      title: 'Billing',
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      commandShortcut: '⌘B',
    },
    {
      title: 'Settings',
      icon: <Settings className="mr-2 h-4 w-4" />,
      commandShortcut: '⌘S',
    },
  ],
};

export default function Page() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const downEvent = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', downEvent);

    return () => {
      document.removeEventListener('keydown', downEvent);
    };
  }, []);

  return (
    <div>
      <div className="mt-10 h-[60vh] flex justify-center items-center ">
        <p className="text-sm text-muted-foreground">
          Press{' '}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>{' '}
          or{' '}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">CTRL</span>J
          </kbd>
        </p>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading={optionsSuggestions.heading}>
            {optionsSuggestions.options.map((opt) => (
              <CommandItem key={opt.title}>
                {opt.icon}
                <span>{opt.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={optionsSettings.heading}>
            {optionsSettings.options.map((opt) => (
              <CommandItem key={opt.title}>
                {opt.icon}
                <span>{opt.title}</span>
                <CommandShortcut>{opt.commandShortcut}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
