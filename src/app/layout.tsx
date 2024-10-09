import "./globals.css";
import Menu from "@/components/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
