
import boldArrow from "@/../public/assets/boldArrow.svg"
import Image from "next/image";
import Brands from "@/app/components/BrandLight/BrandLight";
export default function RootLayout({ children }) {

  return (
      <>
        
        {children}
        <Brands/>
        </>
  );
}
