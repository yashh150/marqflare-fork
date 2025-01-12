import WhatsNewCards from "./WhatsNewCards"

const NewFeatures = [
    {
        title : "UX Research & Service Design",
        desc: "We create user-centered, innovative \nservices that foster meaningful \ninteractions and align with your business goals.",
        link : "/servicedesign",
        image : "assets/service.svg",
    },
    {
        title : "Policy \nResearch",
        desc: "We provide policy analysis to help \nbusinesses navigate complex regulatory \nlandscapes confidently.",
        link : "/social",
        image : "assets/social.svg",
    },
    {
        title : "Influencer Marketing",
        desc: "We connect brands with the right \ninfluencers to boost reach, engagement, and \ndeliver measurable impact.",
        link : "/interest",
        image : "assets/influencer.svg",
    },
    {
        title : "New Media \nAdvertisement",
        desc: "We create data-driven, boundary-pushing \nad campaigns across emerging platforms for \nstandout branding.",
        link : "",
        image : "assets/ar.svg",
    },
]

export default function Whatsnew() {
  return (
    <div className="flex flex-col mx-auto mt-[100px] max-w-[1250px]">
        <div className="flex flex-col"> 
      <h1 className="w-[90%] m-auto text-center text-primary white text-3xl md:text-[3rem] font-semibold leading-normal">What&apos;s New at Marqflare?</h1>
      <p className='md:w-1/2  w-3/4 m-auto text-center text-[#464b37] text-sm font-normal leading-normal'>
      Get an exclusive preview of the latest from Marqflare. Explore our newest <br/>service offerings, solution updates, and more!

      </p>
      
        </div>

        
        <div className="flex flex-col md:w-full w-[90%] mx-auto mt-10">
            <div className="flex md:flex-row items-center flex-col justify-around">

            {
                NewFeatures.map((feature , index)=>{
                    if(index<2){

                      return ( <WhatsNewCards key={index} feature={feature}/>)
                    }
                }
                )
            }
            </div>
            <div className="flex md:flex-row items-center flex-col justify-around">

            {
                NewFeatures.map((feature , index)=>{
                    if(index>=2){

                      return ( <WhatsNewCards key={index} feature={feature}/>)
                    }
                }
                )
            }
            </div>
           
        </div>
    </div>
  )
}
