'use client';

import React from "react";
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();

    return (
        <div className="flex-1">
            <p>Page &quot;{pathname}&quot; not Found</p>
        </div>
    );
}