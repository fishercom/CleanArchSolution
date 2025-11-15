import { useEffect, useState } from "react";
import Head from 'next/head';
import api from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>The Gilded Emporium</title>
        <meta name="description" content="An elegant e-commerce experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-primary shadow-md">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            The Gilded Emporium
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((p) => (
                <div key={p.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
                  <div className="p-8 text-center">
                    <h2 className="text-2xl font-semibold text-primary mb-4">{p.name}</h2>
                    <p className="text-accent text-3xl font-serif font-bold">${p.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl text-text-primary">Loading our fine collection...</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-primary mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-white text-sm font-sans">
                  &copy; {new Date().getFullYear()} The Gilded Emporium. All rights reserved.
              </p>
          </div>
      </footer>
    </div>
  );
}
