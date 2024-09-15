import Navbar from "../components/Navbar/Navbar"
import Form from "../components/ContactForm/Form"
import Footer from "../components/Footer/Footer";
import boldArrow from "@/../public/assets/boldArrow.svg"
import Image from "next/image";
export default function RootLayout({ children }) {

  return (

      <body >
        <Navbar/>
        {children}
        
     
        <Form/>
        <Footer/>
        </body>
  
  );
}
