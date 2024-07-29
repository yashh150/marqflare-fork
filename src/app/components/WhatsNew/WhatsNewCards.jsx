import Image from "next/image"
export default function WhatsNewCards(props) {
  return (
    <div className="justify-between flex flex-row w-[500px] mt-10 mx-auto h-[250px] bg-[#464b37] rounded-[20px]">
      <div className="flex flex-col w-1/2 p-[40px] justify-around">
        <h1 className="text-[30px] text-[#8f9777] font-semibold leading-[34px]">
            /.
        </h1>
        <h1 className="text-white text-[20px] font-semibold leading-[34px]">
            {props.feature.title}
        </h1>
        <p className="w-3/4 text-white text-sm font-normal leading-normal tracking-tight">
        {props.feature.desc}
        </p>
        <span className="flex flex-row">
            <h1 className="text-white text-lg font-semibold leading-normal tracking-tight">
                Check Now
            </h1>
            
        </span>

      </div>
      <div className="flex w-1/2 h-[250px] bg-[#616751] rounded-[20px]" >
        <Image
        className="m-auto"
        src={props.feature.image}
        width={130}
        height={100}
        alt="logo"/>
      </div>
    </div>
  )
}
