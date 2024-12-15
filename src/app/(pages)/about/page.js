import Image from "next/image"
import circle from "../../../../public/assets/circles.svg"
import AboutCards from "./AboutCards"
export default function page() {
  return (
    <div>
<div className='h-[500px] bg-[#e8ecdf] mb-[50px]' />
<h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">We are Marqflare</h1>
            <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
                Our team of strategists, designers, video editors, and animators offers comprehensive solutions
                <br />to enhance your online presence and meet your business objectives through ongoing content
                <br />creation and integrated flagship campaigns.
            </p>
      <div class="flex md:mx-auto mx-10 min justify-between flex-col md:flex-row max-w-[1220px]  m-auto bg-gradient-to-b from-[#e8ecdf] to-white rounded-[10px] border border-[#d2d8c5]">
        <span className='flex flex-col'>
        <div class="mt-[78px] ml-[78px] w-[365.14px] h-24 text-[#2e3224] text-4xl font-semibold leading-[42px]">Our transformational <br/>Mission & Vision</div>
        <div class="max-w-[404.97px] mb-[25px] ml-[78px] h-24 text-[#464b37] text-lg font-normal leading-normal">Our team of strategists, designers, video editors, and animators offers comprehensive solutions to enhance your online presence and meet your business.</div>
        <div class="max-w-[404.97px] mb-[25px] ml-[78px] h-24 text-[#464b37] text-lg font-normal leading-normal">Our team of strategists, designers, video editors, and animators offers comprehensive solutions to enhance your online presence and meet your business.</div>
        <div class="max-w-[404.97px] mb-[80px] ml-[78px] h-24 text-[#464b37] text-lg font-normal leading-normal">Our team of strategists, designers, video editors, and animators offers comprehensive solutions to enhance your online presence and meet your business.</div>
        </span>
        <span className='md:w-1/2 p-[85px] flex bg-gradient-to-b from-[#616751] to-[#2e3224] md:rounded-tr-[10px] md:rounded-bl-[0px] rounded-br-[10px] rounded-bl-[10px] border border-[#d2d8c5]'>
          <Image
          src={circle}
          height={400}
          width={400}
          alt="circle"
          className="m-auto "
          />
        </span>
      </div>

      <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Our Leadership Team</h1>
            <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
                Our team of strategists, designers, video editors, and animators offers comprehensive solutions
                <br />to enhance your online presence and meet your business objectives through ongoing content
                <br />creation and integrated flagship campaigns.
            </p>





      <div id="customers" className='pb-10 pt-[60px] flex flex-col bg-gradient-to-br from-[#464b37] to-[#212319]'>
      <div className="flex flex-col">

<h1 className='text-center  text-[#e8ecdf] text-3xl md:text-[3rem] font-semibold leading-[60px]'> 
Partners and Collaboraters
</h1>
<p className='md:w-1/2  w-3/4 m-auto text-center text-[#e8ecdf] text-sm font-norma leading-normal'>
Everyday, we embrace transformation and generate value for all stakeholders across the globe.
Learn what Marqflare Solutions can do for you

</p>
</div>
<div className="flex flex-row justify-around flex-wrap p-5 w-[80%] m-auto">

      <p className='text-[#d2d8c5] text-[41px] font-semibold '>Logos</p>
      <p className='text-[#d2d8c5] text-[41px] font-semibold '>Logos</p>
      <p className='text-[#d2d8c5] text-[41px] font-semibold '>Logos</p>
      <p className='text-[#d2d8c5] text-[41px] font-semibold '>Logos</p>
        </div>
    </div>
            
    </div>
  )
}
