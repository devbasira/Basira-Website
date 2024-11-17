import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Basira Studio</title>
        <link rel="icon" href="/basira_dot.svg" type="image/svg+xml" />
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
