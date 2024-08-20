'use client'

import { Badge } from "@/components/ui/badge"


export const BadgeStatus = ({ statusVariant }: { statusVariant: string }) => {

    const variant = {
        'pending': 'secondary',
        'processing': 'info',
        'success': 'success',
        'failed': 'destructive',
    }[statusVariant] ?? ('default') as any

    return <Badge variant={variant} className="w-[90px] flex justify-center capitalize">
        {statusVariant}
    </Badge>
}
