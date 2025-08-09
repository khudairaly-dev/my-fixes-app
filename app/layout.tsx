export const metadata = { title: "Fixes OS" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
