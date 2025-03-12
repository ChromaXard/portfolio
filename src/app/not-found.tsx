import { useTranslations } from "next-intl";
import React from "react";
import PathnameHandler from "./tools/pathnameHandler";

export default function NotFound() {
    const t = useTranslations('notFound');

    return (
        <div>
            <h1 className="text-gray-500">{t("main-text")} <PathnameHandler /></h1>
        </div>
    );
}