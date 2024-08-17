import Image from "next/image"
export default function MainSolutionCard(props) {
  return (
    <div className='w-[380px] h-[430px] mt-[50px] mx-[20px] bg-gradient-to-b from-[#D2D8C5] to-[#FFFFFF] rounded-[10px] border border-[#D2D8C5] flex flex-col justify-start'>
      <Image
        className='transition-all mt-[40px] mb-[15px] group-hover:hidden duration-300 ml-[40px]'
        src={props.soln.imgLight}
        width={100}
        height={100}
        alt="logo">

        </Image>
        <Image
        className='ml-8 mb-3  hidden transition-all hover-rotate group-hover:flex  duration-300'
        src={props.soln.imgDark}
        width={100}
        height={100}
        alt="logo">

        </Image>

<div className="flex flex-col">


      <h1 className='w-[300px] ml-[50px] h-24 text-[#2e3224] text-4xl whitespace-pre-wrap font-semibold leading-[42px]'>

      {props.soln.title}
      </h1>
      <p className='ml-[50px] mb-[30px] w-[290px] whitespace-pre-wrap'>
        {props.soln.desc}
      </p>
</div>
      
    </div>
  )
}
