import Image from "next/image"
import mediaHero from "@/../public/assets/mediaHero.svg"
import MainSolutionCard from "@/app/components/SolutionCard/MainSolutionCard"
const solnArray = [
  {
    title : "Data Collection \nand Integration",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/databaseLight.svg" , 
    imgDark : "../assets/databaseDark.svg"
  },
  {
    title : "Data Storage and \nManagement",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/mitreLight.svg" , 
    imgDark : "../assets/mitreDark.svg"
  },
  {
    title : "Data Processing \n& Transformation",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/donutLight.svg" , 
    imgDark : "../assets/donutDark.svg"
  },
  {
    title : "Data Analysis \nand Exploration",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/queryLight.svg" , 
    imgDark : "../assets/queryDark.svg"
  },
  {
    title : "Visualisation \nand Reporting",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/thresholdLight.svg" , 
    imgDark : "../assets/thresholdDark.svg"
  },
  {
    title : "ML, RL & AI \nModel Creation",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/brainLight.svg" , 
    imgDark : "../assets/brainDark.svg"
  },
  {
    title : "Data Governance \nand Compliance",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/tenancyLight.svg" , 
    imgDark : "../assets/tenancyDark.svg"
  },
  {
    title : "Data Security \nand Privacy",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/moderatorLight.svg" , 
    imgDark : "../assets/moderatorDark.svg"
  },
  {
    title : "Business \nIntel Support",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/psychologyLight.svg" , 
    imgDark : "../assets/psychologyDark.svg"
  }
]

export default function page() {
  return (
    <div>
      <div className="flex h-[500px] bg-[#E8ECDF] ">
        <Image
        className="p-10 mx-auto"
        src={mediaHero}
        width={1500}
        height={1000}
        alt=""/>
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
      <div className="flex flex-row">

      {
        solnArray.map((soln , index)=>
           { if(index<3)
            return(<MainSolutionCard key={index} soln={soln}/>)}
        )
      }
      </div>
      <div className="flex flex-row justify-around">

      {
        solnArray.map((soln , index)=>
           { if(index>=3 && index<6)
            return(<MainSolutionCard key={index} soln={soln}/>)}
        )
      }
      </div>
      <div className="flex flex-row">

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
