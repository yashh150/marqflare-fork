import Image from "next/image"
export default function MainSolutionCard(props) {
  return (
    <div className='w-[380px] transition-all hover:scale-105 duration-500 pr-[30px] h-[430px] mt-[50px] mx-[20px] bg-gradient-to-b from-[#D2D8C5] to-[#FFFFFF] hover:from-[#616751] hover:to-[#2e3224] rounded-[10px] border border-[#D2D8C5] flex flex-col justify-start group'>
      <Image
        className='transition-all mt-[40px] mb-[15px] ml-[40px]  duration-150 group-hover:filter group-hover:brightness-0 group-hover:invert'
        src={props.soln.imgLight}
        width={100}
        height={100}
        alt="logo">

        </Image>

<div className="flex flex-col">


      <h1 className='group-hover:text-white w-[300px] ml-[50px]  transition-all duration-500 h-24  text-[#2e3224] text-4xl whitespace-pre-wrap font-semibold leading-[42px]'>

      {props.soln.title}
      </h1>
      <p className='group-hover:text-white ml-[50px] mb-[30px]  transition-all duration-500  w-[290px] whitespace-pre-wrap'>
        {props.soln.desc}
      </p>
</div>
      
    </div>
  )
}

// hover:from-[#616751] hover:to-[#2e3224]