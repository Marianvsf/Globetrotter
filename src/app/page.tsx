"use client";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import TravelForm from "@/components/TravelForm/TravelForm";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="m-auto container">
        <Navbar />
        <main>
          <div className="bg-gray-900 m-auto max-w-screen-xl">
            <Header />
            <TravelForm />
          </div>
        </main>
      </div>
      <footer className="row-start-3 py-8 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Marianvsf"
          target="_blank"
          rel="noopener noreferrer"
        >Made by
          <Image
            aria-hidden
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Logo"
            width={16}
            height={16}
          />
          Marian Suárez →
        </a>
      </footer>
    </>
  );
}
