'use client'

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast";
 
 
const Page = () => {
  const { toast } = useToast()

  return (
    <div className="grid grid-cols-4 gap-4">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            })
          }}
        >
          Add to calendar
        </Button>

        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
          }}
        >
          Show Toast
        </Button>

        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
          }}
        >
          Destructive
        </Button>
    </div>
  );
};

export default Page;
