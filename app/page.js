
// page.js
import Image from "next/image";
import localFont from 'next/font/local'
import Link from 'next/link'

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="grid grid-cols-2 min-h-[90vh] container mx-auto px-4">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className={`text-4xl font-bold ${poppins.className} text-purple-900 leading-tight max-w-2xl text-center`}>
            The best URL Shortner in the market
          </h1>
          <p className="text-lg text-purple-700 max-w-xl text-center leading-relaxed">
            We are the most straightforward URL Shortner in the world. Most of the url
            shortners will track you or ask you to give your details for login. We
            understand your needs and hence we have created this URL shortner.
          </p>
          <div className='flex gap-4 mt-4'>
            <Link href="/shorten">
              <button className='bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-6 py-3 font-bold text-white transition-all transform hover:scale-105'>
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-6 py-3 font-bold text-white transition-all transform hover:scale-105'>
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <Image 
            className="mix-blend-darken object-contain" 
            alt="an Image of a vector" 
            src="/vector.png" 
            fill={true}
            priority
          />
        </div>
      </section>
    </main>
  );
}