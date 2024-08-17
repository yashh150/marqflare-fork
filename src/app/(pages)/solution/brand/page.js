import Image from "next/image"
import brandHero from "@/../public/assets/brandHero.svg"
import MainSolutionCard from "@/app/components/SolutionCard/MainSolutionCard"
const solnArray = [
  {
    title : "Social Media Management",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/manageLight.svg" , 
    imgDark : "../assets/manageDark.svg"
  },
  {
    title : "Content Creation \n& Copywriting",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/contentLight.svg" , 
    imgDark : "../assets/contentDark.svg"
  },
  {
    title : "Graphic Design \n& Illustration",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/graphicLight.svg" , 
    imgDark : "../assets/graphicDark.svg"
  },
  {
    title : "Video Editing \n& Animation",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/videoLight.svg" , 
    imgDark : "../assets/videoDark.svg"
  },
  {
    title : "Film Production \n& Photography",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/filmLight.svg" , 
    imgDark : "../assets/filmDark.svg"
  },
  {
    title : "Campaign \nPlanning",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/campaignLight.svg" , 
    imgDark : "../assets/campaignDark.svg"
  },
  {
    title : "Marqflare \nORM",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/ormLight.svg" , 
    imgDark : "../assets/ormDark.svg"
  },
  {
    title : "Print, OOH, & \nTraditional Ads",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/adsLight.svg" , 
    imgDark : "../assets/adsDark.svg"
  },
  {
    title : "Brand Launch \n& Rebranding",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
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
