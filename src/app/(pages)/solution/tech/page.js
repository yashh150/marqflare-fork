import Image from "next/image"
import techHero from "@/../public/assets/techHero.svg"
import MainSolutionCard from "@/app/components/SolutionCard/MainSolutionCard"
const solnArray = [
  {
    title : "Custom Web \nDevelopment",
    desc : "Develop custom websites with \nresponsive design, optimized \nperformance, and seamless \nfunctionality to improve user \nengagement and business growth.", 
    imgLight : "../assets/developerLight.svg" , 
    imgDark : "../assets/developerDark.svg"
  },
  {
    title : "Website \nPersonalisation",
    desc : "Optimize user engagement by \ndelivering personalized website \nexperiences, driving higher \nretention, conversions, and \nincreasing overall customer \nsatisfaction and loyalty.", 
    imgLight : "../assets/websiteLight.svg" , 
    imgDark : "../assets/websiteDark.svg"
  },
  {
    title : "UI/UX Design \n& Research",
    desc : "Improve user journeys with data-\ndriven UI/UX design research, \noptimizing interface elements for \nbetter functionality and higher \nuser retention.", 
    imgLight : "../assets/designLight.svg" , 
    imgDark : "../assets/designDark.svg"
  },
  {
    title : "Search Engine \nOptimisation",
    desc : "Boost organic traffic by optimizing \nwebsite content, improving search \nengine rankings, and driving \nconversions through targeted SEO \nstrategies.", 
    imgLight : "../assets/developerLight.svg" , 
    imgDark : "../assets/developerDark.svg"
  },
  {
    title : "Email \nMarketing",
    desc : "Drive sales growth by creating \npersonalized email marketing \ncampaigns that boost customer \nretention, engagement, and \nimprove click-through rates.", 
    imgLight : "../assets/notificationLight.svg" , 
    imgDark : "../assets/notificationDark.svg"
  },
  {
    title : "Marketing \nAutomation",
    desc : "Maximize marketing impact by \nautomating key workflows, \nimproving customer segmentation, and driving measurable results through data-driven campaigns.", 
    imgLight : "../assets/adjustLight.svg" , 
    imgDark : "../assets/adjustDark.svg"
  },


]

export default function page() {
  return (
    <div>
      <div className="flex h-[500px] bg-[#E8ECDF] ">
        <Image
        className="p-10 mx-auto"
        src={techHero}
        width={1500}
        height={1000}
        alt=""/>
      </div>
      <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Our Tech Solutions</h1>
      <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
        Our team of strategists, designers, video editors, and animators offers comprehensive solutions
        <br/>
         to enhance your online presence and meet your business objectives through ongoing content
         <br/>
          creation and integrated flagship campaigns.
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
     
      </div>

    </div>
  )
}
