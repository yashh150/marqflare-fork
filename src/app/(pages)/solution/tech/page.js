import Image from "next/image"
import techHero from "@/../public/assets/techHero.svg"
import MainSolutionCard from "@/app/components/SolutionCard/MainSolutionCard"
const solnArray = [
  {
    title : "Custom Web \nDevelopment",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/developerLight.svg" , 
    imgDark : "../assets/developerDark.svg"
  },
  {
    title : "Website \nPersonalisation",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/websiteLight.svg" , 
    imgDark : "../assets/websiteDark.svg"
  },
  {
    title : "UI/UX Design \n& Research",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/designLight.svg" , 
    imgDark : "../assets/designDark.svg"
  },
  {
    title : "Search Engine \nOptimisation",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/developerLight.svg" , 
    imgDark : "../assets/developerDark.svg"
  },
  {
    title : "Email \nMarketing",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
    imgLight : "../assets/notificationLight.svg" , 
    imgDark : "../assets/notificationDark.svg"
  },
  {
    title : "Marketing \nAutomation",
    desc : "Our team of strategists, designers, \nvideo editors, and animators offers \ncomprehensive solutions to \nenhance your online presence and \nmeet your business.", 
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
     
      </div>

    </div>
  )
}
