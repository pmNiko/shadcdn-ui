import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  {
    id: "Item-1",
    question: "Is it accesible?",
    answer: "Yes.It adheres to the WAI-ARIA design patters."
  },
  {
    id: "Item-2",
    question: "Can I use It on multiple projects?",
    answer: "Yes. It licensed under the MIT license."
  },
  {
    id: "Item-3",
    question: "How to do I get started?",
    answer: "You can start by reading the documentation."
  },
  {
    id: "Item-4",
    question: "How to do I get started?",
    answer: "You can start by reading the documentation."
  },
]

const page = () => {
  return (
    <Accordion type="multiple"  className="w-full">
      {
        items.map(item => (
          <AccordionItem value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
        ))
      }
  
  </Accordion>
  )
}

export default page