use client ;
import ".//globals.css"; // import CSS
import { Provider } from "@/components/ui/provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <h1>This is header</h1>

        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
