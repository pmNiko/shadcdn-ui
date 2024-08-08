'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [secondDate, setSecondDate] = useState<Date | undefined>(new Date());
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={secondDate}
        onSelect={setSecondDate}
        className="rounded-md border"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDate}
        onSelect={setMultipleDate}
        className="rounded-md border shadow"
      />

      <div className="grid place-content-center my-3 ">
        <div className=" ">
          <h2 className="text-2xl text-black ">Primer calendario</h2>
          <div className="border-b"></div>
          <p className="text-center">{smallDate}</p>
        </div>

        <div className="my-3">
          <h2 className="text-2xl text-black ">Segundo calendario</h2>
          <div className="border-b"></div>
          <p className="text-center">{secondDate?.toLocaleDateString()}</p>
        </div>

        <div className=" ">
          <h2 className="text-2xl text-black ">Tercer calendario</h2>
          <div className="border-b"></div>
          <p className="text-center">
            {multipleDate?.map((date) => date.toLocaleDateString()).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}
