"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <div className="border-b border-gray-400 mb-3 pb-2 w-full">
        <nav className="text-gray-600 text-sm">
            <ul className="flex items-center space-x-2">
                {/* Lien vers l'accueil */}
                <li>
                <Link href="/" className="hover:text-blue-500">
                    Accueil
                </Link>
                {pathSegments.length > 0 && <span className="mx-2">/</span>}
                </li>

                {/* Génération dynamique des breadcrumbs */}
                {pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                const label = segment.charAt(0).toUpperCase() + segment.slice(1);

                return (
                    <li key={href} className="flex items-center">
                    <Link href={href} className="hover:text-blue-500">
                        {label}
                    </Link>
                    {index < pathSegments.length - 1 && <span className="mx-2">/</span>}
                    </li>
                );
                })}
            </ul>
        </nav>
    </div>
  );
};

export default Breadcrumb;
