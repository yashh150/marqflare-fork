import Image from "next/image"
import brandHero from "@/../public/assets/brandHero.svg"
import MainSolutionCard from "@/app/components/SolutionCard/MainSolutionCard"
const solnArray = [
  {
    title : "Social Media Management",
    desc : "Boost your brand's online \npresence with expert Social Media \nManagement, driving engagement, \nincreasing traffic, and enhancing conversions.", 
    imgLight : "../assets/manageLight.svg" , 
    imgDark : "../assets/manageDark.svg"
  },
  {
    title : "Content Creation \n& Copywriting",
    desc : "Craft tailored content and \npersuasive copy to captivate \ntarget audiences, increase brand \nawareness, and drive measurable \nbusiness growth.", 
    imgLight : "../assets/contentLight.svg" , 
    imgDark : "../assets/contentDark.svg"
  },
  {
    title : "Graphic Design \n& Illustration",
    desc : "Create visually compelling designs \nand illustrations that elevate brand \nidentity, engage audiences, and \nboost conversion rates across \ndigital platforms.", 
    imgLight : "../assets/graphicLight.svg" , 
    imgDark : "../assets/graphicDark.svg"
  },
  {
    title : "Video Editing \n& Animation",
    desc : "Elevate your brand's narrative with \nprofessional video editing and \nanimation, delivering high-quality \ncontent that increases audience \nengagement and conversions.", 
    imgLight : "../assets/videoLight.svg" , 
    imgDark : "../assets/videoDark.svg"
  },
  {
    title : "Film Production \n& Photography",
    desc : "Produce visually captivating film \nand photography content, \ndelivering high-impact visuals that \nelevate brand identity and support \nbusiness growth.", 
    imgLight : "../assets/filmLight.svg" , 
    imgDark : "../assets/filmDark.svg"
  },
  {
    title : "Campaign \nPlanning",
    desc : "Design effective campaigns with \ndata-driven strategies, optimizing \nreach, engagement, and \nconversion to ensure maximum \nROI and growth.", 
    imgLight : "../assets/campaignLight.svg" , 
    imgDark : "../assets/campaignDark.svg"
  },
  {
    title : "Marqflare \nORM",
    desc : "Strengthen brand credibility by \nmonitoring, improving, and \nmanaging online reviews and \nmentions to boost reputation and \ncustomer trust.", 
    imgLight : "../assets/ormLight.svg" , 
    imgDark : "../assets/ormDark.svg"
  },
  {
    title : "Print, OOH, & \nTraditional Ads",
    desc : "Unlock growth with strategic Print, \nOOH, and Traditional Ads \ncampaigns, enhancing brand \nvisibility, driving customer \nengagement, and increasing sales.", 
    imgLight : "../assets/adsLight.svg" , 
    imgDark : "../assets/adsDark.svg"
  },
  {
    title : "Brand Launch \n& Rebranding",
    desc : "Boost brand recognition and \ncustomer loyalty with expert \nBrand Launch and Rebranding \nservices, optimizing your market \nposition and ROI.", 
    imgLight : "../assets/launchLight.svg" , 
    imgDark : "../assets/launchDark.svg"
  },

]

export default function page() {
  return (
    <div>
      <div className="flex h-[500px] bg-[#E8ECDF] ">
        <Image
        className="p-10 mx-auto"
        src={brandHero}
        width={1500}
        height={1000}
        alt=""/>
      </div>
      <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Our Brand Solutions</h1>
      <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
      Our team of expert strategists, designers, video editors, and animators delivers tailored 
      <br/>solutions to elevate your online presence, align with business goals, and drive growth through 
      <br/>continuous content creation and impactful, integrated campaigns.
      </p>
      <div className="flex flex-col max-w-[1200px] m-auto">
      <div className="flex flex-col md:flex-row items-center">

      {
        solnArray.map((soln , index)=>
           { if(index<3)
            return(<MainSolutionCard key={index} soln={soln}/>)}
        )
      }
      </div>
      <div className="flex flex-col md:flex-row items-center">

      {
        solnArray.map((soln , index)=>
           { if(index>=3 && index<6)
            return(<MainSolutionCard key={index} soln={soln}/>)}
        )
      }
      </div>
      <div className="flex flex-col md:flex-row items-center">

      {
        solnArray.map((soln , index)=>
           { if(index>=6)
            return(<MainSolutionCard key={index} soln={soln}/>)}
        )
      }
      </div>
      </div>

    </div>
  )
}
