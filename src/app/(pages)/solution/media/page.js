import Image from "next/image"
import mediaHero from "@/../public/assets/mediaHero.svg"
import Head from "next/head"
import MainSolutionCard from "@/app/components/SolutionCard/MainSolutionCard"
const solnArray = [
  {
    title : "Media Buying \n& Planning",
    desc : "Maximize ROI by strategically \nplanning and buying media, \nensuring optimal ad placements, \naudience targeting, and increased \nbrand visibility.", 
    imgLight : "../assets/colabLight.svg" , 
    imgDark : "../assets/colabDark.svg"
  },
  {
    title : "Performance \nMarketing",
    desc : "Achieve higher ROI through \nperformance-based marketing, \nleveraging data insights to \nenhance customer acquisition, \nretention, and overall campaign \nefficiency.", 
    imgLight : "../assets/performLight.svg" , 
    imgDark : "../assets/performDark.svg"
  },
  {
    title : "Marq-Tech \nfor Media",
    desc : "Drive innovation with Marq Tech \nfor Media, optimizing content \ndistribution, increasing \nengagement, and ensuring \nseamless integration across all \nchannels.", 
    imgLight : "../assets/marqtechLight.svg" , 
    imgDark : "../assets/marqtechDark.svg"
  },
  {
    title : "Influencer \nMarketing",
    desc : "Accelerate growth by partnering \nwith influential personalities to \nreach engaged audiences, \nincrease brand visibility, and drive \nmeasurable results.", 
    imgLight : "../assets/smsLight.svg" , 
    imgDark : "../assets/smsDark.svg"
  },
  {
    title : "Programmatic \nSolutions",
    desc : "Drive higher engagement and \nconversions with automated, real-\ntime programmatic advertising, \ntargeting the right audience with \nprecision-driven campaigns.", 
    imgLight : "../assets/terminalLight.svg" , 
    imgDark : "../assets/terminalDark.svg"
  },
  {
    title : "Affiliate \nMarketing",
    desc : "Expand reach and revenue by \nengaging affiliate partners, \nimproving conversions, and driving \nsustainable traffic through \noptimized marketing efforts.", 
    imgLight : "../assets/rampLight.svg" , 
    imgDark : "../assets/rampDark.svg"
  },


]

export default function page() {
  return (
    <>
    <Head>
        <link rel="preload" href="/assets/media.mp4" as="video" type="video/mp4" />
      </Head>
    <div>
        <div className="relative h-[500px] flex">
    {/* Video Background */}
    <video
      autoPlay
      muted
      playsInline
      className="h-full w-full object-cover"
    >
      <source src="/assets/media.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay Filter */}
    <div className="absolute inset-0 h-[500px] bg-[#5A6344] bg-opacity-50"></div>

    
  </div>
      <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Our Media Solutions</h1>
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
    </>
  )
}
