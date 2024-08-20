import { Payment } from "@/data/payments.data"
import { FilterFn, Row } from "@tanstack/react-table"




export const myCustomFilterFn: FilterFn<Payment> = (row: Row<Payment>, columnId: string, filterValue: any, addMeta: (meta: any) => void) => {
    const filterParts = filterValue.split(' ')

    let rowValues = `${row.original.clientName} ${row.original.email} ${row.original.status}`.toLowerCase();    
    
    return filterParts.every((part:string) => rowValues.includes(part))
}
