import Head from 'next/head';
import Image from 'next/image';
import heroImg from '../public/images/hero.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-[calc(100vh-80px)] border-6">
      <Head>
        <title>Client Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./favicon/logo_size.jpg" />
      </Head>

      <section className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
        <Image
          src={heroImg}
          width={400}
          height={400}
        className="block" />
        <Link href="/login" className="block">
          <a className="px-4 py-2 bg-purple-800 text-white mt-8">Login / Register</a>
        </Link>
      </section>
    </div>
  );
}
