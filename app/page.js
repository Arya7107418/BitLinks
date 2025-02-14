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
          <h1 className={`text-5xl font-bold ${poppins.className} text-purple-900 leading-tight max-w-2xl text-center`}>
            Shorten Links, 
            <span className="text-purple-600"> Not Privacy</span>
          </h1>
          <p className="text-lg text-purple-700 max-w-xl text-center leading-relaxed">
            BitLinks puts you in control. No sign-ups, no tracking, no complexity. 
            Just paste your long URL and get a short link instantly. We've stripped 
            away the bloat to give you what matters most - a lightning-fast, 
            private URL shortener that simply works.
          </p>
          
          <div className="grid grid-cols-3 gap-6 w-full max-w-xl mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-900">100%</div>
              <div className="text-sm text-purple-700">Privacy Focused</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-900">0</div>
              <div className="text-sm text-purple-700">Sign-ups Needed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-900">24/7</div>
              <div className="text-sm text-purple-700">Always Free</div>
            </div>
          </div>

          <div className='flex gap-4 mt-4'>
            <Link href="/shorten">
              <button className='bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-8 py-4 font-bold text-white transition-all transform hover:scale-105'>
                Shorten URL Now →
              </button>
            </Link>
            <Link href="/about">
              <button className='bg-white hover:bg-purple-50 text-purple-600 rounded-lg shadow-lg px-8 py-4 font-bold transition-all transform hover:scale-105'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <Image 
            className="mix-blend-darken object-contain"
            alt="BitLinks URL shortening illustration"
            src="/vector.png"
            fill={true}
            priority
          />
        </div>
      </section>
    </main>
  );
}