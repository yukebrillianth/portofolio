'use client';
import { ThemeProvider } from '@/providers/theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
