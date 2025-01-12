"use client"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Solutions/Solutions";
import Industry from "./components/IndustrySolutions/Industry";
import Whatsnew from "./components/WhatsNew/Whatsnew";
import Trust from "./components/Trust/Trust";
import Recognition from "./components/Recognition/Recognition";
import Footer from "./components/Footer/Footer";
import Form from "./components/ContactForm/Form";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
}, []);
  return (
    <body >
<Navbar/>
<Hero/>
<div className="md:bg-[#E8ECDF] md:pb-[75px] md:mt-[-900px] md:h-[1000px]">
<Solutions />
  </div>
<Industry />
<Whatsnew/>
<Trust/>
<Recognition />
<Form />
<Footer />

    </body>
  );
}
