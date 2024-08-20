"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState
} from "@tanstack/react-table"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Payment } from "@/data/payments.data"
import { ReloadIcon } from "@radix-ui/react-icons"
import { TrashIcon } from "lucide-react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [currentStatus, setCurrentStatus] = useState('all')
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection
        },

    })

    return (
        <div className="rounded-md border">
            <div className="flex items-center justify-between py-4">
                <Input
                    placeholder="Filter (client name, email, status...)"
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        setCurrentStatus('all');
                        table.getColumn('status')?.setFilterValue(undefined);
                        table.getColumn("email")?.setFilterValue(event.target.value);
                    }}
                    className="max-w-sm"
                />

                <Select
                    value={currentStatus}
                    onValueChange={(value) => {
                        setCurrentStatus(value);
                        table.getColumn('status')?.setFilterValue(value !== 'all' ? value : undefined);
                    }}
                >
                    <SelectTrigger className="w-[180px] ml-4">
                        <SelectValue placeholder="Select - All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value="all" >All</SelectItem>
                            <SelectItem value="pending"><span className="w-20 h-20 bg-grey-500">|</span> Pending</SelectItem>
                            <SelectItem value="processing"><span className="w-20 h-20 bg-blue-500">|</span> Processing</SelectItem>
                            <SelectItem value="success"><span className="w-20 h-20 bg-green-500">|</span> Success</SelectItem>
                            <SelectItem value="failed"><span className="w-20 h-20 bg-red-500">|</span> Failed</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <Button variant="outline" className="mr-1" onClick={() => setColumnVisibility({})}>
                        <ReloadIcon />
                    </Button>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .filter((column) => column.id !== 'actions')
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>



            <div className="flex items-center justify-end space-x-2 py-4 mx-2">
                <div className="flex-1 text-sm text-muted-foreground">
                    {
                        Object.entries(rowSelection).length > 0 &&
                        <div>

                            <Button variant='ghost' onClick={() => {
                                const rowsId = table
                                    .getSelectedRowModel()
                                    .rows.map(row => (row.original as Payment).id)
                                console.log(rowsId);
                            }}>
                                <TrashIcon className="w-4 h-4 text-red-500" />

                            </Button>
                            {table.getFilteredSelectedRowModel().rows.length} of{" "}
                            {table.getFilteredRowModel().rows.length} row(s) selected.
                        </div>
                    }
                </div>

                <div className="flex gap-3">
                    <Select
                        onValueChange={(value) => table.setPageSize(+value)}
                    >
                        <SelectTrigger className="w-[130px] h-[32px]" >
                            <SelectValue placeholder="10 rows" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Rows per page</SelectLabel>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="30">30</SelectItem>
                                <SelectItem value="40">40</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className="mr-1"
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
