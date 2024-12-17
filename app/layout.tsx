import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "AirBlog",
  description: "Generated in Next",
  // FIXME: update author and url information
  authors: [{ name: "", url: "" }],
  icons: "/icon.png",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={}
      >
        {children}
      </body>
    </html>
  );
}
