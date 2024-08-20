


export const AmountCell = ({ amountNumber }: { amountNumber: string }) => {

    const amount = parseFloat(amountNumber)
    const formatted = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
    }).format(amount)

    return <div className="text-right font-medium">{formatted}</div>

}
