import Image from "next/image"
export default function WhatsNewCards(props) {
  return (
    <div className="justify-between md:mr-[27px] flex flex-row sm:w-[500px] w-[70%] mt-[27px] mx-auto md:h-[250px] h-[150pxs] bg-[#464b37] rounded-[20px]">
      <div className="flex flex-col w-1/2 sm:p-[40px] justify-around">
        <h1 className="sm:text-[30px] text-[25px] text-[#8f9777] font-semibold leading-[34px] ml-5 sm:ml-1 sm:mt-1 mt-3">
            /.
        </h1>
        <h1 className="text-white sm:text-[20px] sm:mt-3 font-semibold sm:leading-[25px] sm:ml-1 ml-5">
            {props.feature.title}
        </h1>
        <p className="sm:w-3/4 w-1/2 text-white text-sm sm:font-normal leading-normal tracking-tight sm:mb-2 sm:ml-1 ml-5">
        {props.feature.desc}
        </p>
        <span className="flex flex-row w-3/4 justify-between my-3 ml-5 sm:ml-1">
            <h1 className="text-white  sm:text-lg text-sm font-semibold leading-normal tracking-tight ">
                Check Now
            </h1>
            <Image
            className="hover: transition-all duration-150"
            src="assets/industryArrow.svg"
            width={20}
            height={10}
            alt="arrow">


            </Image>
        </span>

      </div>
      <div className="flex w-1/2 md:h-[250px] h-[150pxs] bg-[#616751] rounded-[20px]" >
        <Image
        className="m-auto hover:scale-110 transition-all duration-150"
        src={props.feature.image}
        width={130}
        height={100}
        alt="logo"/>
      </div>
    </div>
  )
}
