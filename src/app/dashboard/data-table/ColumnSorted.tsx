import { Button } from "@/components/ui/button"
import { SortDirection } from "@tanstack/react-table"
import { ArrowDown, ArrowUp } from "lucide-react"

interface Props {
    onClick: () => void
    title: string
    isSorted: false | SortDirection
}

export const ColumnSorted = ({ onClick, title, isSorted }: Props) => (
    <Button
        variant="ghost"
        onClick={onClick}
    >
        {title}

        {isSorted === "asc" && <ArrowDown className="ml-2 h-4 w-4" />}

        {isSorted === "desc" && <ArrowUp className="ml-2 h-4 w-4" />}


    </Button>
)
