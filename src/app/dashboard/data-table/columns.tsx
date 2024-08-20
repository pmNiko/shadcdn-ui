'use client'

import { AmountCell } from "./AmountCell"
import { BadgeStatus } from "./BadgeStatus"
import { ColumnDef, FilterFn, Row } from "@tanstack/react-table"
import { ColumnSorted } from "./ColumnSorted"
import { DropDownColumn } from "./DropDownColumn"
import { Payment } from "@/data/payments.data"
import { Checkbox } from "@/components/ui/checkbox"
import { myCustomFilterFn } from "./customFilters"


export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        )
    },
    {
        accessorKey: "clientName",
        header: ({ column }) =>
            <ColumnSorted
                title="Name Client"
                isSorted={column.getIsSorted()}
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            />
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <BadgeStatus statusVariant={row.getValue('status')} />
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => <AmountCell amountNumber={row.getValue("amount")} />
    },
    {
        accessorKey: "email",
        filterFn: myCustomFilterFn,
        header: ({ column }) =>
            <ColumnSorted
                title="Email"
                isSorted={column.getIsSorted()}
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            />
    },
    {
        header: 'Actions',
        id: "actions",
        cell: ({ row }) => <DropDownColumn id={row.original.id} />
    },
]