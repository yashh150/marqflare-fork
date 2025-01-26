import Image from "next/image"
import mediaHero from "@/../public/assets/mediaHero.svg"
import MainSolutionCard from "@/app/components/SolutionCard/MainSolutionCard"
import Head from "next/head"
const solnArray = [
  {
    title : "Data Collection \nand Integration",
    desc : "Gather, integrate, and organize \ndiverse data streams, enhancing \nbusiness intelligence and \nproviding a unified view for \nstrategic planning.", 
    imgLight : "../assets/databaseLight.svg" , 
    imgDark : "../assets/databaseDark.svg"
  },
  {
    title : "Data Processing",
    desc : "Convert raw data into structured, \nusable formats, enhancing \nbusiness intelligence, data \naccuracy, and supporting strategic \nplanning across departments.", 
    imgLight : "../assets/mitreLight.svg" , 
    imgDark : "../assets/mitreDark.svg"
  },
  {
    title : "Data \nTransformation",
    desc : "Streamline data processes by \ntransforming raw information into \nstructured formats, improving \naccuracy, accessibility, and \ndecision-making efficiency.", 
    imgLight : "../assets/donutLight.svg" , 
    imgDark : "../assets/donutDark.svg"
  },
  {
    title : "Data Analysis \nand Exploration",
    desc : "Explore large datasets to identify \nkey trends, opportunities, and \nactionable insights, enabling \nsmarter decision-making and \noperational efficiency.", 
    imgLight : "../assets/queryLight.svg" , 
    imgDark : "../assets/queryDark.svg"
  },
  {
    title : "Visualisation \nand Reporting",
    desc : "Transform complex data into clear, \ninteractive visuals and reports, \ndriving informed decision-making \nand enhancing business strategy \nexecution.", 
    imgLight : "../assets/thresholdLight.svg" , 
    imgDark : "../assets/thresholdDark.svg"
  },
  {
    title : "Observations \ninto Insights",
    desc : "Unlock actionable data insights to \ndrive performance, improve \nstrategies, and maximize growth \nthrough in-depth analysis and \nexpert interpretation.", 
    imgLight : "../assets/brainLight.svg" , 
    imgDark : "../assets/brainDark.svg"
  },
  
]

export default function page() {
  return (
    <>
    <Head>
        <link rel="preload" href="/assets/data.mp4" as="video" type="video/mp4" />
      </Head>
    <div>
        <div className="relative h-[500px] flex">
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
    >
      <source src="/assets/data.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay Filter */}
    <div className="absolute inset-0 h-[500px] bg-[#5A6344] bg-opacity-50"></div>

    
  </div>
      <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Our Data Solutions</h1>
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
    </>
  )
}
