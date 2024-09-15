
import boldArrow from "@/../public/assets/boldArrow.svg"
import Image from "next/image";
export default function RootLayout({ children }) {

  return (
      <>
        
        {children}
        <p className='md:w-1/2  w-3/4 mx-auto mt-[120px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
        Our team of strategists, designers, video editors, and animators offers comprehensive solutions
        <br/>
         to enhance your online presence and meet your business objectives through ongoing content
         <br/>
          creation and integrated flagship campaigns.
      </p>
      <button className=' border-2 w-[210px] h-[56px] border-secondary flex flex-row px-[25px] py-[13px] rounded-full bg-secondary  text-white transition-all duration-300 mx-auto'> 
            <div className="m-auto flex flex-row justify-around">


            <p className='text-white text-xl font-semibold leading-snug'>

            Get a Quote
            </p>
            <Image
            className="my-auto pt-1 ml-[10px]" 
            src={boldArrow}
            width={20}
            height={10}
            alt="arrow"
          ></Image>
            </div>
           
        </button>
        
        </>
  );
}
