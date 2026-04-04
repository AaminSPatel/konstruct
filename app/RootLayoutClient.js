'use client';

import { SiteProvider } from '@/lib/SiteContext';

export function RootLayoutClient({ children }) {
  return (
    <SiteProvider>
      {children}
    </SiteProvider>
  );
}
