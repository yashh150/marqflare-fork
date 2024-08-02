
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='w-full flex-col transition-all duration-500'>
      <h1 className='max-w-[950px] w-full sm:text-[2.5rem] sm:leading-[3.75rem] sm:font-semibold text-[2rem] leading-[3rem] font-semibold text-[#2e3224] mx-auto text-center'>
      Evolving Brand & Communication Strategy with Tech, Data, and Creativity
      </h1>
      <p className='text-center mt-[16px] text-primary'>
      Unlock accelerated growth for top-tier global enterprises with our agile solutions
      </p>
      <button className='w-[210px] my-[30px] block border-2 border-secondary hover:text-secondary px-[20px] py-[10px] rounded-full bg-secondary hover:bg-white text-white transition-all duration-300 mx-auto'> 
            Unlock Now
           
        </button>
        <Image 
      className='my-[40px] w-[80%] mx-auto '
      src="assets/specs.svg"
      width={90}
      height={40}
      alt="logo"> 
    
      </Image>
      <div className=' flex flex-col relative top-[-70px] w-3/4 m-auto'>
        <p className='text-center text-primary text-lg sm:text-xl md:text-4xl font-semibold leading-[60px]'>
        360* Value
        </p>
        <p className='sm:mt-8 mx-auto text-center text-secondary text-sm md:text-lg font-normal leading-normal'>
        Everyday, we embrace transformation and generate value for all stakeholders across the globe.
        </p>
      </div>
    </div>
  )
}
