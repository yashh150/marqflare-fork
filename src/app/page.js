import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Solutions/Solutions";
import Industry from "./components/IndustrySolutions/Industry";
import Whatsnew from "./components/WhatsNew/Whatsnew";
import Trust from "./components/Trust/Trust";
import Recognition from "./components/Recognition/Recognition";
import Footer from "./components/Footer/Footer";
import Form from "./components/ContactForm/Form";
export default function Home() {
  return (
    <body >
<Navbar/>
<Hero/>
<Solutions />
<Industry />
<Whatsnew/>
<Trust/>
<Recognition />
<Form />
<Footer />
    </body>
  );
}
