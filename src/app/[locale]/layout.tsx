import React from 'react';
import Footer from '../ui/footer';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
      <>
        <main>{children}</main>
        <Footer />
      </>
    )
  }