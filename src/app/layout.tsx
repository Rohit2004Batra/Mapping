import './globals.css'; // ✅ Required for Tailwind to work
import Link from 'next/link';

export const metadata = {
  title: 'MapSathi - Offline City Maps',
  description: 'Explore and download offline maps of Indian cities',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-grey-800 font-sans">
        <nav className="bg-white shadow p-4">
          {/* <div className="container mx-auto">
            <Link href="/" className="font-bold text-xl text-blue-600">MapSathi</Link>
          </div> */}
        </nav>
        <main className="container mx-auto mt-6">{children}</main>
      </body>
    </html>
  );
}
