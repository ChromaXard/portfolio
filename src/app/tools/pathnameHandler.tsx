'use client';

import { usePathname } from "next/navigation";

export default function PathnameHandler() {
    const pathname = usePathname();
    return pathname;
}