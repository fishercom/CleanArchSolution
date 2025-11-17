import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <header className="bg-primary shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          <Link href="/">The Gilded Emporium</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/" className="text-white hover:text-accent">Home</Link></li>
            {isLoggedIn && (
              <li><Link href="/products" className="text-white hover:text-accent">Manage Products</Link></li>
            )}
            {isLoggedIn ? (
              <li>
                <button onClick={handleLogout} className="bg-accent text-white px-4 py-2 rounded hover:bg-yellow-700">
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link href="/login" className="bg-accent text-white px-4 py-2 rounded hover:bg-yellow-700">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
