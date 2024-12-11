import Navbar from "./Navbar"; // Imported Navbar here
import "./globals.css";

export const metadata = {
  title: "Real Time Ticketing",
  description: "A real-time ticketing simulation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* Navbar is added here */}
        {children} {/* This renders the specific page content */}
      </body>
    </html>
  );
}
