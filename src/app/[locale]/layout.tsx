import React from 'react';
import Footer from '../ui/footer';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
      <>
        <main className="flex w-full h-full bg-gray-100 text-black">{children}</main>
        <Footer />
      </>
    )
  }